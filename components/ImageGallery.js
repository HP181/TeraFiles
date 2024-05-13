import Image from 'next/image'
import React from 'react'

const ImageGallery = ({ImageIds}) => {

    const UploadCare_BaseUrl = "https://ucarecdn.com"
  return (
    <div>
        {ImageIds.map((ImageId) => 
            <div key={ImageId} className='flex-1 basis-[200px] h-[200px] m-3'>
                <Image src={`${UploadCare_BaseUrl}/${ImageId}/`} className='h-32 w-32' height="900" width="900" alt="imagess" />
            </div>
        )}
    </div>
  )
}

export default ImageGallery