import { ImageProps } from 'next/image'
import React from 'react'

interface Props{
    name: string
    desc: string
    src: string
}

export default function EventTile({name,desc,src}:Props) {
  return (
    <div className='h-[20vw] w-[20vw] flex bg-slate-700 flex-col justify-end'>
        <img className='bg-white h-full w-full' src={src} alt={''}/>
        <div className='w-[20vw] absolute text-white bg-black bg-opacity-60 backdrop-blur-lg h-1/6 flex justify-center items-center flex-col'>
            <p>{name}</p>
            <p>{desc}</p>
        </div>
    </div>
  )
}
