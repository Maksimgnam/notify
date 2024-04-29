import React, { FC } from 'react';

interface  PlayPaginationData{
  nextSticker: ()=> void,
  previousSticker: ()=> void
}

const PlayPagination:FC<PlayPaginationData> = ({nextSticker, previousSticker}) => {
  return (
    <div className='w-full h-full flex items-center justify-between absolute top-0 p-32 '>
     
     <p onClick={previousSticker} className='text-9xl font-mono mb-24'>{`<`}</p>
     <p onClick={nextSticker} className='text-9xl font-mono mb-24'>{`>`}</p>
             
          


               
            
      
    </div>
  )
}

export default PlayPagination