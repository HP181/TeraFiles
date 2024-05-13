
import * as LR from '@uploadcare/blocks';
import "@uploadcare/blocks/web/lr-file-uploader-regular.min.css";
import Upload from './Upload';

LR.registerBlocks(LR);

function App() {
  

  return (
    <div>
      <lr-config
        ctx-name="my-uploader"
        pubkey="a4d807e9ac1619d9f4dd"
      />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.39.0/web/lr-file-uploader-regular.min.css`}
      />
<lr-upload-ctx-provider
        ctx-name="my-uploader"
        // ref={ctxProviderRef}
      />

     <Upload />

      
    </div>
  );
}

export default App;