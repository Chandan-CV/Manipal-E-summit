import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Globe from '../assets/Globe.png'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Head>
        <title>
          Entrepreneurship Summit
        </title>
      </Head>
      <div className='bg-[#1E1E1E] h-full flex-col flex'>
        <div className='flex h-[8vh] border-b-[1px] justify-center items-center border-b-white'>
          <p className={styles.font_Monoton}>VEBS</p>
          <div className='absolute right-11'>My Pass</div>
        </div>
        <div className='absolute right-[-27vw] top-[8vh]'>
          <Image src={Globe} alt={''} className='h-[100vh] w-fit '/>
        </div>
        <div className='flex h-[60vh] p-14 pb-4 flex-col'>
          <p className='text-[#FFFFFF] font-Playfair w-[50vw] text-[60pt]'>Unleashing the Power of</p>
          <p className='text-[#FFEC42] font-Playfair w-[50vw] text-[60pt]'>Entrepreneurship.</p>
        </div>
        <div className='flex pl-14 w-[40vw] flex-row justify-around'>
          <div className='flex flex-col text-center justify-center'>
            <div className='flex justify-center flex-row'>
              <p className='text-white font-bold text-[50pt]'>25</p>
              <p className='text-[#FFEC42]  font-bold text-[50pt]'>+</p>
            </div>
            <p className='text-white text-[20pt]'>Companies</p>
          </div>
          <div className='flex flex-col text-center justify-center'>
            <div className='flex justify-center flex-row'>
              <p className='text-white font-bold text-[50pt]'>15</p>
              <p className='text-[#FFEC42] font-bold text-[50pt]'>+</p>
            </div>
            <p className='text-white text-[20pt]'>Presentations</p>
          </div>
          <div className='flex flex-col text-center justify-center'>
            <div className='flex justify-center flex-row'>
              <p className='text-white font-bold text-[50pt]'>50</p>
              <p className='text-[#FFEC42] font-bold text-[50pt]'>+</p>
            </div>
            <p className='text-white text-[20pt]'>Events</p>
          </div>
        </div>
        <div className='h-[100vh]'>

        </div>
      </div>
    </div>
  )
}


