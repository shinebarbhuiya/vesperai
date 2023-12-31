"use client"


import React, { useEffect, useRef } from 'react'



import { Skeleton } from "@/components/ui/skeleton"
import {saveAs} from "file-saver";


import Link from 'next/link';

import { LazyLoadImage } from 'react-lazy-load-image-component';



import PromptForm from '@/components/PromptForm';

import useStore from '@/Store';
import { Button } from '@/components/ui/button';





const Page = () => {

  

  

  // const [imageUrl, setImageUrl] = useState(null);

  const { imageUrl, loading, promptStr } = useStore((state) => ({
    imageUrl: state.imageUrl,
    loading: state.loading,
    promptStr: state.promptStr
  }))



  const imageRef = useRef(null);

  useEffect(() => {
    if (loading && imageRef.current) {
      // Scroll to the image element
      (imageRef.current as HTMLElement).scrollIntoView({ behavior: 'smooth' });

    }
  }, [loading]);

  // const { imageUrl, setLoading } = useStore((state) => ({
  //   imageUrl: state.imageUrl,
  //   setLoading: state.setLoading,
  // }));


  // const handleImageUrlChange = (newImageUrl : any) => {
  //   setImageUrl(newImageUrl);
  // }


  const handleDownload = () => {

    
    const host = window.location.host;

    let imgUrl = imageUrl.replace('https://results.deepinfra.com/', '');
    console.log("Image URL:", imgUrl);

    try {
      saveAs(`https://${host}/image/${imgUrl}`, `vesperai_${(promptStr).replace(" ", "_")}.png`);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  }



  return (
    <div className='container mt-10 md:mt-24'>
      {/* <div className=' flex items-center  gap-2 p-2 rounded-md text-white/80'>
            <p className='text-lg font-semibold'>Prompt</p>
           

        </div> */}

      <div className='flex flex-col gap-6  md:flex-row '>

        {/* left side */}
        
        <div className='md:w-1/2'>
            {/* <PromptForm onImageUrlChange={handleImageUrlChange} /> */}
            <PromptForm  />
        </div>
        


        {/* Right side / Output */}
        <div className='md:w-1/2 flex items-center justify-center'>
          {(imageUrl.length !== 0) ? (
            <div className='flex flex-col justify-center items-center gap-3'>
            <div ref={imageRef} className=''>
              <LazyLoadImage ref={imageRef} loading='lazy' className='rounded-md' src={`https://${window.location.host}/image/${imageUrl.replace('https://results.deepinfra.com/', '')}`} alt='ai' width={400} height={400} />
            </div>

              <Button ref={imageRef} className='w-full mb-6' onClick={handleDownload}> Download </Button>
              
            </div>
            
          ): (
            <>
              {loading ? (
                <div className=' w-full h-full md:h-96 md:w-96' ref={imageRef}>
                  <Skeleton   className=' flex  h-96 border-2 items-center justify-center text-md font-slim text-white/80' > Vesper is thinking...</Skeleton>
                </div>
                
              ) : (
                <div ref={imageRef} className='flex h-96 w-96   border-2 items-center justify-center text-md font-slim text-white/80' >Image will be generated here.</div> 
              )}
              
            
            </>

            
          )}
          
          {/* <PromptForm /> */}
        </div>

      </div>


      {/* Desktop  */}
      <div >
            <div className='hidden md:fixed bottom-0 right-0 left-0  ' >
              <p className='text-center p-4  font-regular text-sm'>Made with ❤️ by  <Link href={"https://twitter.com/ShineBarbhuiya"}>Shine Barbhuiya</Link> </p>

            </div>

      </div>

      {/* Phone  */}
      <div >
            <div className='md:hidden' >
              <p className='text-center p-4  font-regular text-sm'>Made with ❤️ by  <Link href={"https://twitter.com/ShineBarbhuiya"}>Shine Barbhuiya</Link> </p>

            </div>

      </div>

    </div>
  )
}

export default Page