import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Globe from '../assets/Globe.png'
import EventTile from '@/components/EventTile'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='overscroll-x-none'>
      <Head>
        <title>
          Entrepreneurship Summit
        </title>
      </Head>
      <div className='bg-[#1E1E1E] overflow-hidden h-full flex-col flex'>
        <div className='flex h-[8vh] border-b-[1px] justify-center items-center border-b-white'>
          <p className={styles.font_Monoton}>VEBS</p>
          <div className='absolute right-11 bg-black text-white border-r-2 border-b-2 border-yellow-300 text-lg p-1 px-4'>My Pass</div>
        </div>
        <div className='absolute bg-black overflow-hidden w-60 right-0 h-[80vh] top-[8vh]'>
        <div className='bg-[#d6c423] absolute bg-opacity-30 blur-[600pt] h-full w-full right-0 top-[20vh]'/>
          <Image src={Globe} alt={''} />
        </div>
        <div className='flex h-[60vh] p-14 pb-4 flex-col'>
          <p className='text-[#FFFFFF] font-Playfair w-[50vw] text-[60pt]'>Unleashing the</p>
          <p className='text-[#FFFFFF] font-Playfair w-[50vw] text-[60pt]'>Power of</p>
          <div className='flex flex-row'>
            <p className='text-[#FFEC42] font-Playfair text-[60pt]'>Entrepreneurship</p>
            <p className='text-white font-Playfair text-[60pt]'>.</p>
          </div>
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
        <div className='mt-[13vh] h-[100vh] bg-[#161616] bg-opacity-60 backdrop-blur-xl'>
          <EventTile name='Loser' desc='Kuch bhi hota rehta hai... lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' src={'https://images3.alphacoders.com/108/1082567.jpg'}/>
        </div>
      </div>
    </div>
  )
}


