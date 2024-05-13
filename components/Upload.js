"use client"
import React, { useEffect, useRef, useState } from 'react';

const Upload = () => {

    const [files, setFiles] = useState([]);
  const ctxProviderRef = useRef(null);

  useEffect(() => {
    const ctxProvider = ctxProviderRef.current;
    if (!ctxProvider) return;

    const handleChangeEvent = (event) => {
      setFiles([...event.detail.allEntries.filter((file) => file.status === 'success')]);
    };

    ctxProvider.addEventListener('change', handleChangeEvent);

    return () => {
      ctxProvider.removeEventListener('change', handleChangeEvent);
    };
  }, [setFiles]);


  return (
    <div>
        {files.map((file) => (
          <div key={file.uuid}>
            <img
              src={file.cdnUrl}
              alt={file.fileInfo.originalFilename}
            />
          </div>
        ))}

<lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={ctxProviderRef}
      />
      </div>
  )
}

export default Upload