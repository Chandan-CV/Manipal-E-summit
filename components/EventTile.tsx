import React from 'react'

interface Props{
    name: string
    desc: string
    src: string
}

export default function EventTile({name,desc,src}:Props) {
  return (
    <div className='h-[20vw] m-10 w-[20vw] shadow-black overflow-hidden shadow-2xl flex bg-slate-700 flex-col justify-end'>
        <img className='bg-white h-full w-full' src={src} alt={''}/>
        <div className='w-[20vw] absolute text-white bg-black bg-opacity-60 backdrop-blur-lg h-[10vw] flex justify-center items-center flex-col'>
            <p className='font-Playfair py-2 text-[15pt]'>{name}</p>
            <p className='text-center mx-10 font-Playfair text-[10pt] text-[#939393]'>{desc}</p>
            <button className='my-3 px-2 py-0.5 text-[8pt] text-black font-Playfair bg-[#FFEC42]'>Register -{'>'}</button>
        </div>
    </div>
  )
}
