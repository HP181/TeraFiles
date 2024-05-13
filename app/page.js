// import Upload from "@/components/FileUpload";
// import Regular from "@/components/FileUpload";
// import FileUpload from "@/components/FileUpload";
// import { UserButton } from "@clerk/nextjs";
"use client"

import ImageGallery from "@/components/ImageGallery";
import * as LR from '@uploadcare/blocks';
LR.registerBlocks(LR);

import { useEffect, useRef, useState } from "react";

const Home = () => {

  const [ImageIds, setImageIds] = useState([])

  const ctxProviderRef = useRef();

  
  useEffect(() => {
    const ctx = document.querySelector('lr-upload-ctx-provider')
    // ctx.addEventListener('change', e => {
    //     console.log("1",e.detail)
    // })

    ctx?.addEventListener("file-url-changed", e => {
      console.log("2",e.detail)
    setImageIds(prev => [...prev, e?.detail?.uuid])
  })

    return () => { ctx?.removeEventListener("file-url-changed", e => {
        console.log("3",e.detail)
      })
    }

  }, [])
  

  return <>
  <section>

<p>jwef</p> 
{/* <lr-config
        ctx-name="my-uploader"
        pubkey="a4d807e9ac1619d9f4dd"
      /> */}

<lr-config
    ctx-name="my-uploader"
    pubkey="a4d807e9ac1619d9f4dd"
    max-local-file-size-bytes="10000000"
    multiple-max="10"
    source-list="local, url, camera, dropbox, gdrive"
></lr-config>
    
    <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.38.0/web/lr-file-uploader-regular.min.css`}
        class="my-config"
      />

      {/* Event Handler for Drag & Drop */}
      <lr-upload-ctx-provider ctx-name="my-uploader"  />
  </section>
<ImageGallery ImageIds={ImageIds} />

  </>
};

export default Home;
