import Header from '@/components/Header'
import Presentations from '@/components/presentations'
import React from 'react'

const desc = "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "

export default function register() {
  return (
    <div>
        <div className='bg-[#1E1E1E] h-full flex-col flex'>
        <Header/>
        <p className='text-white bg-[#161616] p-1 px-3 w-fit text-[30pt] m-20 font-Playfair shadow-[3px_3px_0px_#FFEC42]'>Presentations</p>
        <Presentations name='Aman Gupta' src="https://in.hellomagazine.com/images/0275-15363edb3486-b24656fba388-1000/horizontal-1200/aman-gupta-on-shark-tank-india.jpg" comp='boAt' tag='Galat Aadmi hun' time='12:00 AM' loc='Sri Lanka' desc={desc}/>
        </div>
    </div>
  )
}
