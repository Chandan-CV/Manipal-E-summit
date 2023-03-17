import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Globe from '@/assets/globe.png'
import EventTile from '@/components/EventTile'
import Header from '@/components/Header'
import Presentations from '@/components/Presentations'
import { Nigga } from '@/types'
const desc = "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
const name = 'Aman Gupta'
const src='https://assets.gqindia.com/photos/61fa82d0f88d392f7d46a55c/4:3/w_1440,h_1080,c_limit/Aman-Gupta-net-worth.jpg'
const comp='boAt'
const tag='Galat Aadmi hun' 
const time='12:00 AM' 
const loc='Sri Lanka'

export default function Home() {
  const loll: Nigga[] = [{age:10, name:"nigga"}]
  return (
    <div className=''>
      <Head>
        <title>
          Entrepreneurship Summit
        </title>
      </Head>
      <div className='bg-[#1E1E1E] h-full flex-col flex'>
        <Header/>
        <div className='absolute pl-[60vw] pt-[10vh] overflow-hidden bg-opacity-50 h-[150vh] w-[100vw] right-0'>
          <div className='absolute bg-[#d6c423] bg-opacity-20 blur-[600pt] h-[120vh] w-[100vw]'/>
            <Image className='absolute left-[65vw] top-[5vh] h-fit w-fit' src={Globe} alt={''}/>
        </div>
        <div className='flex h-[62vh] p-14 pb-4 flex-col'>
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
              <p className='bg-gradient-to-tr from-black to-white bg-clip-text text-transparent font-Oswald font-bold text-[50pt]'>25</p>
              <p className='text-[#FFEC42] font-Oswald font-bold text-[50pt]'>+</p>
            </div>
            <p className='text-white font-Oswald text-[20pt]'>Companies</p>
          </div>
          <div className='flex flex-col text-center justify-center'>
            <div className='flex justify-center flex-row'>
              <p className='bg-gradient-to-tr from-black to-white bg-clip-text text-transparent font-Oswald font-bold text-[50pt]'>15</p>
              <p className='text-[#FFEC42] font-Oswald font-bold text-[50pt]'>+</p>
            </div>
            <p className='text-white font-Oswald font-extralight text-[20pt]'>Presentations</p>
          </div>
          <div className='flex flex-col text-center justify-center'>
            <div className='flex justify-center flex-row'>
              <p className='bg-gradient-to-tr from-black to-white bg-clip-text text-transparent font-Oswald font-bold text-[50pt]'>50</p>
              <p className='text-[#FFEC42] font-Oswald font-bold text-[50pt]'>+</p>
            </div>
            <p className='text-white font-Oswald text-[20pt]'>Events</p>
          </div>
        </div>
        <div className='mt-[13vh] flex items-center flex-col min-h-[100vh] max-h-fit bg-[#161616] bg-opacity-60 backdrop-blur-[25px]'>
          <p className='text-white bg-[#161616] p-1 px-3 text-[30pt] m-20 font-Playfair shadow-[3px_3px_0px_#FFEC42]'>Events</p>
          <EventTile name='Loser' desc='Kuch bhi hota rehta hai... lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' src={'https://images3.alphacoders.com/108/1082567.jpg'}/>
          {/* <Presentations name='Aman Gupta' src="https://in.hellomagazine.com/images/0275-15363edb3486-b24656fba388-1000/horizontal-1200/aman-gupta-on-shark-tank-india.jpg" comp='boAt' tag='Galat Aadmi hun' time='12:00 AM' loc='Sri Lanka' desc={desc}/> */}
          
            <div className='flex flex-row w-[90vw] h-[50vh] m-14 bg-[#2B2B2B]'>
              <div className='w-1/3 bg-white h-full'>
                <img className='object-conatin h-full w-full' src={src} alt='enterpreneurship summit manipal academy of higher education Bangalore'/>
              </div>
              <div>
                <p>{name}</p>
                <p>{comp}</p>
              </div>
            </div>
         
        </div>
      </div>
    </div>
  )
}


