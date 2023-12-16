import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavigationBar from '@/components/NavigationBar'
import { ThemeProvider } from '@/components/ThemeProvider'


const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: 'Vesper - Create Free AI Generated Images ',
  description: 'Generating AI Images without spending a single cent. The best platform in the world to generate perfect AI Images.',


  openGraph: {
    images: [
      {
        url: "https://vesperai.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  

  twitter: {
    card: "summary_large_image"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
          >
            <div className='container'>
              <NavigationBar  />
            </div>
             
          {children}

          
        </ThemeProvider>
      </body>
    </html>
  )
}
