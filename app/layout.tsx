import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import NavigationBar from '@/components/NavigationBar'

const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: 'Vesper - Create Free AI Generated Images ',
  description: 'Generating AI Images without spending a single cent. The best platform in the world to generate perfect AI Images.',
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
