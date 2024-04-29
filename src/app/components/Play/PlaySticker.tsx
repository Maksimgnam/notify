"use client"
import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';


interface Sticker{
    id:string,
    title: string,
    createdDate:string,

}
interface Params {
    params: { id: string, jarId:string},
    setIsPagination:React.Dispatch<React.SetStateAction<boolean>> ,
    currentStickerIndex:number,
    stickers: Sticker[],
    setStickers:React.Dispatch<React.SetStateAction<Sticker[]>> 
}

const PlaySticker:FC<Params> = ({params, setIsPagination, currentStickerIndex, stickers, setStickers}) => {





useEffect(()=> {

    const fetchStickers = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/stickers/${params.jarId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setStickers(data);
            console.log(data)
        } catch (err) {
            console.error('Error fetching workspace:', err);

        }
    };
    fetchStickers()
}, [])



  return (
    <div  className='w-auto h-auto' >
  
    <div  className=' w-play-sticker  h-play-sticker bg-red-500 rounded-md flex items-center justify-center  p-5' >

        <p className='text-5xl font-mono'>
        {
            stickers[currentStickerIndex]?.title
        }
        </p>
       
        
     

    </div>
    <div className='w-play-sticker h-12  flex items-center justify-between mt-3 p-2 pt-0'>
    <div className='text-xl font-medium'>Sticker: <span className='text-green-500 text-2xl font-mono'> {currentStickerIndex}</span></div>
        <div className='w-auto h-10 flex items-center '>
            <div className='w-6 h-6 bg-green-500 rounded-sm flex items-center justify-center'>
            <Image
      src="/Images/time.png"
      width={14}
      height={14}
      alt=""/>
            </div>
        <p className='text-md  font-medium pl-2'>{stickers[currentStickerIndex]?.createdDate}</p>
        </div>


        <div className='w-auto h-10 flex items-center'>
        <Image
      src="/Images/like.png"
      width={29}
      height={29}
      alt=""
    />
        </div>
        
    </div>


   
    </div>
  )
}

export default PlaySticker