"use client"
import React, { FC } from 'react'
import Link from 'next/link';
import { useState } from 'react';
interface ReminderHeaderParams {
    params: { id: string, name: string, reminderId:string},
    title:string | undefined,
    searchName: string,
    setSearchName:React.Dispatch<React.SetStateAction<string>> 
}


const ReminderHeader:FC<ReminderHeaderParams> = ({ params, title , searchName, setSearchName}) => {
  

    return (
        <div className='w-full h-14 flex items-center justify-between   p-5 pr-7'>
            <div className='w-auto h-auto flex items-center'>

           
            <div className='w-9 h-9  bg-orange-300 rounded flex items-center justify-center'>
                <p className='text-xl text-black font-medium '>R</p>
            </div>
            <p className='text-xl font-medium  pl-2'>{title}</p>
            </div>
            <input value={searchName} onChange={(e)=> setSearchName(e.target.value)} type="text" placeholder='Search...' className='w-60 h-9 rounded border-2 border-bg-orange-400 outline-none pl-1 '/>
            <div className='w-auto h-auto'>


              <Link href={`/home/${params.id}/workspace/${params.name}/reminder/${params.reminderId}/createRemind`}>
            <button className='w-8 h-8  bg-black rounded flex items-center justify-center'>
                <p className='text-xl text-white font-medium '>+</p>
            </button>
            </Link>
         
            </div>
        </div>
    )
}

export default ReminderHeader