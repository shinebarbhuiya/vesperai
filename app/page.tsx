


import HeroSection from '@/components/HeroSection'
import { Kalam } from 'next/font/google'
import Link from 'next/link'


const kalam = Kalam({ subsets: ['latin'], weight: '400' })


export default function Home() {
  return (
    <div>
      <div className='container'>
        <div className=''>
          <div className='py-16'>
              <HeroSection />
          </div>
        </div>

        <div className={kalam.className}>
          <div className=' bottom-0 right-0 left-0  ' >
            <p className='text-center p-4  font-regular text-sm'>Made with ❤️ by  <Link href={"https://twitter.com/ShineBarbhuiya"}>Shine Barbhuiya</Link> </p>

          </div>

        </div>
       
      </div>
    </div>
    
  )
}
