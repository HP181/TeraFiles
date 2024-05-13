"use client";

import ImageGallery from "@/components/ImageGallery";
import * as LR from "@uploadcare/blocks";
LR.registerBlocks(LR);

import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [ImageIds, setImageIds] = useState([]);
  // const [UploadedFiles, setUploadedFiles] = useState([])
  const a = useRef();

  useEffect(() => {
    const ctx = document.querySelector("lr-upload-ctx-provider");

    ctx?.addEventListener("done-click", (e) => {
      console.log("2a", e);
      setImageIds((prev) => [...prev, e?.detail?.allEntries[0]?.uuid]);
      a.current?.uploadCollection.clearAll();
    });

    return () => {
      ctx?.removeEventListener("done-click", (e) => {
        console.log("3", e.detail);
      });
    };
  }, []);

  useEffect(() => {
    const ctx = document.querySelector("lr-upload-ctx-provider");

    ctx?.addEventListener("change", (e) => {
      console.log("3 c", e);
      setImageIds((prev) => [...prev, e?.detail?.allEntries[0]?.uuid]);
    });

    return () => {
      ctx?.removeEventListener("change", (e) => {
        console.log("3 c", e);
      });
    };
  }, []);

  return (
    <>
      <section>
        <lr-config
          ctx-name="my-uploader"
          pubkey="a4d807e9ac1619d9f4dd"
          max-local-file-size-bytes="10000000"
          multiple-max="10"
          source-list="local, url, camera, dropbox, gdrive"
          confirmUpload
          useCloudImageEditor
          cloudImageEditorTabs
          cropPreset
        ></lr-config>

        <lr-file-uploader-regular
          ctx-name="my-uploader"
          css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.38.0/web/lr-file-uploader-regular.min.css`}
          class="my-config"
          confirmUpload
          useCloudImageEditor
          cloudImageEditorTabs
          cropPreset
        />

        {/* Event Handler for Drag & Drop */}
        <lr-upload-ctx-provider
          ctx-name="my-uploader"
          ref={a}
          confirmUpload
          useCloudImageEditor
          cloudImageEditorTabs
          cropPreset
        />
      </section>
      <ImageGallery ImageIds={ImageIds} />
    </>
  );
};

export default Home;
