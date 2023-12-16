"use client"
import Link from "next/link";
import { ModeToggle } from "./Modetoggle"
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import ConfettiExplosion from 'react-confetti-explosion';



const NavigationBar = () => {
  return (
    <div className="flex items-center justify-between py-4 ">
    {/* <div className="flex items-center justify-between py-4 fixed top-0 left-4 right-4  z-50 "> */}
      
      <Link href="/">
        {/* <ConfettiExplosion /> */}
        <p className="text-xl font-bold hover:text-white/80">Vesper<span className="text-md font-light text-slate-">AI</span></p>
      </Link>
      <div className="flex items-center justify-center gap-5 text-xl md:gap-8">
        <Link href="https://github.com/shinebarbhuiya/vesperai">  <FaGithub /> </Link>
        <Link href='https://twitter.com/shinebarbhuiya'> <FaXTwitter /> </Link>
        <ModeToggle />
      </div>
    </div>
    
  )
}

export default NavigationBar