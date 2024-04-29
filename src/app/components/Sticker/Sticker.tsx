import React, { FC } from 'react'


interface StickerData{
    title:string,
    createdDate:string

}
const Sticker:FC<StickerData> = ({title, createdDate}) => {
  return (
     <div  className='w-56 h-56 bg-purple-300 rounded-lg m-3 p-5 flex flex-col justify-between '>
        <p className='text-3xl font-mono'>{title}</p>
        <div className='w-full h-auto  flex items-center justify-between pr-2'>
            <div className='flex items-center'>
                    <p className='text-md font-medium'>{createdDate}</p>
            </div>
            <div className='w-7 h-7  flex items-center justify-center'>
                    <img className='w-6 h-6' src="https://icons.veryicon.com/png/o/miscellaneous/ui-basic-linear-icon/like-106.png" alt="" />
            </div>
        </div>
                   
    </div>
  )
}

export default Sticker