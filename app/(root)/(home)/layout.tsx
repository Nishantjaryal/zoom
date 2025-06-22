import Navbar from '@/components/ui/Navbar'
import Sidebar from '@/components/ui/Sidebar'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'


export const metadata: Metadata = {
  title: "Zooom",
  description: "Video Calling Application",
  icons:{
    icon:'/icons/logo.svg'
  }
};


const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
        <Navbar />
        <div className='flex'>
            <Sidebar />
            <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
            {children}

            </section>
        </div>
    </main>
  )
}

export default RootLayout