"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import { Button } from './ui/button';
import { Kalam } from 'next/font/google'
import { PiArrowBendRightUpFill } from "react-icons/pi";
import { PiArrowBendLeftDownFill } from "react-icons/pi";
import { FaMagic } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Autoplay } from 'swiper/modules';
import ConfettiExplosion from 'react-confetti-explosion';

import { Loader2 } from "lucide-react"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';






const kalam = Kalam({ subsets: ['latin'], weight: '400' })


const HeroSection = () => {

    const router = useRouter();

    const [isLoading, setIsLoading] = React.useState(false);

    const handleClick = () => {
        
        setIsLoading(true)

        router.push("/generate")
      
    }

  return (
    <>

      <div className='flex flex-col md:flex-row items-center justify-between'>
        <motion.div

          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 15 }}
          transition={{
            delay: 0.30,
            ease: 'easeInOut',
            duration: 0.80,
          }}



         

          className=' flex flex-col items-center justify-center gap-4 md:gap-8  md:w-1/2'>

          <h1 className='text-3xl font-bold text-center md:text-6xl md:px-6  md:text-left'> Experience the <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500'>Magic</span> of  <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500'> Seamless AI  </span> Image Generation</h1>
          <p className=' text-center text-lg  text-gray-500 dark:text-white/80  md:text-2xl md:px-6  md:text-left'>Create images that are far beyond reality with nothing but your imagination for free. </p>
          <div className='w-full mt-3 md:px-6'>
            
            <Button onClick={handleClick} className='w-full     text-white bg-gradient-to-br from-fuchsia-500 to-cyan-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800  rounded-lg  text-center me-2 mb-2 ' disabled={isLoading}>
              {/* <FaMagic className="mr-2 text-lg" /> */}
              
              {isLoading? (<><ConfettiExplosion />  Loading <Loader2 width={20} className=' ml-2' /> </>) :   (<><FaMagic className="mr-2 text-lg" />Create Magic</> )  }
             </Button>
             {/* <p className='text-center  pt-1 text-white/760'>No credit card required</p> */}


          

            
            
          </div>




        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.30,
            ease: 'easeInOut',
            duration: 0.80,
          }}
          
          className='mt-8  flex flex-col items-center justify-center  md:w-1/2'>

          <ConfettiExplosion />
          <Image className='rounded-md border-4 shadow-lg m' src="/images/image1.png" alt="hero" width={400} height={400} />
               
          
          <div className={kalam.className}>
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                ease: 'easeInOut',
                duration: 0.2,
              }}

              className='flex mt-3'>
              {/* <PiArrowBendLeftDownFill className="mr-1 mt-2 md:hidden" /> */}
              <p className= ' text-gray-500  dark:text-white/80 font-md '> Created using VesperAI</p>
              <PiArrowBendRightUpFill className="ml-1 " />
            </motion.div>
          </div>



        </motion.div>







      </div>



      {/* Mobile Slider  */}
      <motion.div

        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 15 }}
        transition={{
          delay: 0.10,
          ease: 'easeInOut',
          duration: 0.60,
        }}
      
        className='md:hidden'>
      <div className=' text-center pt-10 pb-4 mt-6'>
         <p className='text-3xl font-semibold'>Some Example Images Made using VesperAI</p>
         <p className='text-center text-white/70 py-2'>Want to get results similar to these? You can find some amazing prompts to generate art like this on <Link href={"https://lexica.art/"}><span className='font-bold  text-white'>Lexica</span> </Link></p>
        </div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop
          autoplay={{
            delay: 1500,
            
          }}
          slidesPerView={1.2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            // slideShadows: true,

          }}

          modules={[Autoplay, EffectCoverflow]}


          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          className='mt-3 swiper-container '
        >
          <SwiperSlide><Image className='rounded-md border-4 shadow-lg' src="/images/image1.png" alt="hero" width={400} height={400} /></SwiperSlide>
          <SwiperSlide><Image className='rounded-md border-4 shadow-lg' src="/images/image2.png" alt="hero" width={400} height={400} /></SwiperSlide>
          <SwiperSlide><Image className='rounded-md border-4 shadow-lg' src="/images/image3.png" alt="hero" width={400} height={400} /></SwiperSlide>
          <SwiperSlide><Image className='rounded-md border-4 shadow-lg' src="/images/image4.png" alt="hero" width={400} height={400} /></SwiperSlide>
          <SwiperSlide><Image className='rounded-md border-4 shadow-lg' src="/images/image5.png" alt="hero" width={400} height={400} /></SwiperSlide>


        </Swiper>
        
      </motion.div>


      {/* Desktop Slider  */}
      <motion.div
      
     

        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 15 }}
        transition={{
          delay: 0.10,
          ease: 'easeInOut',
          duration: 0.60,
        }}
        

      className='hidden md:block'>
        <div className=' text-center py-10 mt-16'>
         <p className='text-3xl font-semibold'>Some Example Images Made using VesperAI</p>
         <p className='text-center  text-gray-500   dark:text-white/60 py-2'>Want to get results similar to these? You can find some amazing prompts to generate art like this on <Link href={"https://lexica.art/"}><span className='font-bold  text-white'>Lexica</span> </Link></p>
        </div>
        
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            // slideShadows: true,

          }}

          modules={[Autoplay, EffectCoverflow]}


          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          className='mt-3 swiper-container '
        >
          <SwiperSlide><Image className='rounded-md border-4 shadow-lg' src="/images/image1.png" alt="hero" width={400} height={400} /></SwiperSlide>
          <SwiperSlide><Image className='rounded-md border-4 shadow-lg' src="/images/image2.png" alt="hero" width={400} height={400} /></SwiperSlide>
          <SwiperSlide><Image className='rounded-md border-4 shadow-lg' src="/images/image3.png" alt="hero" width={400} height={400} /></SwiperSlide>
          <SwiperSlide><Image className='rounded-md border-4 shadow-lg' src="/images/image4.png" alt="hero" width={400} height={400} /></SwiperSlide>
          <SwiperSlide><Image className='rounded-md border-4 shadow-lg' src="/images/image5.png" alt="hero" width={400} height={400} /></SwiperSlide>


        </Swiper>
      </motion.div>

    </>


  )
}

export default HeroSection