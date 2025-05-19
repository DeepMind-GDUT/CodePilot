// components/FileUploader.tsx
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

export default function FileUploader() {
  const [uploading, setUploading] = useState(false);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    noClick: true,
    onDrop: () => {},
  });

  const handleUpload = async () => {
    setUploading(true);
    const form = new FormData();
    acceptedFiles.forEach(file => form.append('files', file));
    await axios.post('/api/code-review/submit-multi', form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    setUploading(false);
    alert('多文件提交成功');
  };

  return (
    <div>
      <div
        {...getRootProps()}
        className="border-dashed border-2 p-6 text-center cursor-pointer"
      >
        <input {...getInputProps()} />
        <p>将项目文件拖拽到此处，或点击选择</p>
      </div>
      {acceptedFiles.length > 0 && (
        <div className="mt-2">
          <strong>待上传文件：</strong>
          <ul className="list-disc ml-5">
            {acceptedFiles.map(f => (
              <li key={f.path}>{f.path}</li>
            ))}
          </ul>
        </div>
      )}
      <button
        onClick={handleUpload}
        disabled={uploading || acceptedFiles.length === 0}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        {uploading ? '上传中…' : '开始上传'}
      </button>
    </div>
  );
}
