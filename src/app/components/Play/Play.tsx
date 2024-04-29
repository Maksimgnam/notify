"use client"
import React, { FC, useState } from 'react'
import PlayHeader from './PlayHeader'
import PlayPagination from './PlayPagination'
import PlaySticker from './PlaySticker';
interface Params {
  params: { id: string, jarId:string}
}
interface Sticker{
  id:string,
  title: string,
  createdDate:string,

}

const Play:FC<Params> = ({params}) => {
const [isPagination, setIsPagination] = useState<boolean>(false);
const [currentStickerIndex, setCurrentStickerIndex] = useState<number>(0);

const [stickers, setStickers] = useState<Sticker[]>([]);

const nextSticker = () => {
  setCurrentStickerIndex((prevIndex) => {
      console.log('Previous Index:', prevIndex);
      const nextIndex = (prevIndex + 1) % stickers.length;
      console.log('Next Index:', nextIndex);
      return nextIndex;
    });
  
};

const previousSticker = () => {
  setCurrentStickerIndex((prevIndex) => {
      console.log('Previous Index:', prevIndex);
      const nextIndex = (prevIndex - 1 + stickers.length) % stickers.length;
      console.log('Next Index:', nextIndex);
      return nextIndex;
    });
};
  return (
    <div className='w-full  h-full  bg-black-shadow '>
      <PlayHeader/>
      
      <div  onClick={()=> setIsPagination(true)}  className='w-full h-5/6    flex items-center justify-center'>
        {
          stickers.length > 0 ? (
            <PlaySticker params={params} setIsPagination={setIsPagination} currentStickerIndex={currentStickerIndex} stickers={stickers} setStickers={setStickers}/>
          ):(
            <p>Wait</p>
          )
        }

      </div>
      {
        isPagination &&(
          <PlayPagination nextSticker={nextSticker} previousSticker={previousSticker}/>
        )
      }
 
    </div>
  )
}

export default Play