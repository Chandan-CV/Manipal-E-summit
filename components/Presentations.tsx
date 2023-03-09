import React from 'react'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props{
    name: string,
    time: string,
    tag: string,
    loc: string,
    desc: string,
    lmtSeat?: boolean,
    src:string
    comp?:string
}

export default function presentations({name,time,tag,loc,desc,lmtSeat,src,comp}:Props) {
  return (
    <div className='flex flex-row w-[90vw] h-[50vh] m-14 bg-[#2B2B2B] shadow-black shadow-[0px_0px_20px_2px_#00000] '>
    <div className='w-1/2 bg-white h-full'>
      <img className='object-conatin h-full w-full' src={src}/>
    </div>
    <div className='flex flex-col w-full h-1/5'>
      <div className='flex flex-row justify-end w-full '>
        <p className='font-Oswald w-32 text-center bg-[#FFEC42] '>LIMITED SEATS!</p>
      </div>                  
      <div className='flex flex-row p-10 pt-5 px-16 w-full'>
        <p className='font-Playfair text-[30pt] text-white'>{name} </p> 
        <p className='font-Playfair text-[30pt] font-bold text-white'>, {comp}</p>
      </div>
      <div className='flex flex-row w-full h-10  '>
        <div className='flex flex-col w-[300pt] border-r-[1px] border-[#D9D9D9] px-16 h-fit'>
          <p className='text-center bg-black text-white text-[16pt]  shadow-[3px_3px_0px_#FFEC42] font-Playfair py-2'>{tag}</p>
          <div className='flex flex-row  py-7 mt-8'>
          <FontAwesomeIcon className='text-[#FFEC42] text-[15pt] pt-1 mr-3 ' icon={faClock}/>
          <p className='text-transparent bg-clip-text bg-gradient-to-l font-bold from-white via-white  font-Oswald text-[15pt] '>{time}</p>
          </div>
          <div className='flex flex-row'>
          <FontAwesomeIcon className='text-[#FFEC42] text-[15pt] pt-1 mr-3'   icon={faLocationDot} />
          <p className='font-Oswald text-[15pt] text-transparent bg-clip-text bg-gradient-to-l font-bold from-white via-white'>{loc}</p>
          </div>                      
        </div>
        <div className=' S right-0 flex flex-col w-1/2 pl-16 '>
          <p className='text-[10pt] font-Oswald  text-white '>DESCRIPTION</p>
          <p className='font-Playfair pt-3 text-white opacity-75'>{desc}</p>
        </div>
      </div>
    </div>
    
  </div>
  )
}
