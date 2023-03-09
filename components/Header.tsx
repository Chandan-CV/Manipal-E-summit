import React from 'react'

export default function Header() {
  return (
    <div className='flex h-[8vh] border-b-[1px] justify-center items-center border-b-white'>
          <p className='font-Monoton text-white text-[30pt]'>VEBS</p>
          <div className='absolute right-11 bg-black text-white shadow-[3px_3px_0px_#FFEC42] font-Playfair text-lg p-1 px-4'>My Pass</div>
    </div>
  )
}
