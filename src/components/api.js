import axios from 'axios';

// Base URL for Cloud Run
const BASE_URL = 'https://pdftools-566443362943.us-central1.run.app';

// -----------------------------
// File upload helper
// -----------------------------
export const uploadFile = async (endpoint, file, onProgress) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post(
    `${BASE_URL}${endpoint}`,
    formData,
    {
      responseType: 'blob', // download file as blob
      onUploadProgress: (event) => {
        if (onProgress && event.total) {
          const percent = Math.round((event.loaded * 100) / event.total);
          onProgress(percent);
        }
      },
    }
  );

  return response.data;
};

// -----------------------------
// Async GET requests helper
// -----------------------------
export const fetchData = async (endpoint) => {
  const response = await axios.get(`${BASE_URL}${endpoint}`);
  return response.data;
};

// -----------------------------
// API Wrappers for your endpoints
// -----------------------------

// PDF Conversions
export const convertPdfToWord = (file, onProgress) =>
  uploadFile('/convert/pdf-to-word', file, onProgress);

export const convertPdfToPptx = (file, onProgress) =>
  uploadFile('/convert/pdf-to-pptx', file, onProgress);

export const convertPdfToImage = (file, onProgress) =>
  uploadFile('/convert/pdf-to-image', file, onProgress);

export const convertImageToPdf = (file, onProgress) =>
  uploadFile('/convert/image-to-pdf', file, onProgress);

export const combinePdfs = (file, onProgress) =>
  uploadFile('/convert/pdf-combine', file, onProgress);

// Image Tools
export const resizeCustomBg = (file, onProgress) =>
  uploadFile('/image/resize-custom-bg', file, onProgress);

export const resizeWatermark = (file, onProgress) =>
  uploadFile('/image/resize-watermark', file, onProgress);

export const removeBg = (file, onProgress) =>
  uploadFile('/image/remove-bg', file, onProgress);

export const convertImageFormats = (file, onProgress) =>
  uploadFile('/image/convert', file, onProgress);

// Tasks
export const getTaskStatus = (taskId) =>
  fetchData(`/tasks/${taskId}/status`);

export const getTaskResult = (taskId) =>
  fetchData(`/tasks/${taskId}/result`);

export const getAllTasks = () =>
  fetchData('/tasks/all');

export const downloadHistoryZip = () =>
  fetchData('/history/download-zip');
