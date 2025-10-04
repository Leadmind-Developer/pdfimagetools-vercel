import React from 'react';

const ResultViewer = ({ url, loading }) => {
  if (loading) return <p>Processing file, please wait...</p>;

  if (!url) return null;

  return (
    <div className="mt-4">
      <a
        href={url}
        download
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Download Result
      </a>
    </div>
  );
};

export default ResultViewer;
