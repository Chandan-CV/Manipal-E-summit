import React from 'react'


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
    <div className='bg-[#2B2B2B] p-14 h-[33.3vh] w-[5/6vw]'>
        <div className='w-[25vw] h-[25vw]'>
            <img src={src}/>
            <p className='text-amber-500'>LOSER</p>
        </div>
    </div>
  )
}
