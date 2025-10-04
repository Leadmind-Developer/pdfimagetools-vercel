"use client";

import React from 'react';
import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import { useImage } from 'react-konva';

const ManualEditor = ({ image, onClose }) => {
  const [img] = useImage(image);

  return (
    <div className="manual-editor-modal">
      <h3>Manual Editor</h3>
      <Stage width={500} height={500}>
        <Layer>
          <KonvaImage image={img} />
        </Layer>
      </Stage>
      <button onClick={onClose}>Close</button>

      <style jsx>{`
        .manual-editor-modal {
          position: fixed;
          top: 10%;
          left: 10%;
          width: 80%;
          height: 80%;
          background: white;
          border: 2px solid #ccc;
          z-index: 999;
          padding: 20px;
          overflow: auto;
        }
        canvas {
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        button {
          margin-top: 20px;
          padding: 10px 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ManualEditor;
