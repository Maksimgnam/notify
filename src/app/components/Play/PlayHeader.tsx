import React from 'react';
import Image from 'next/image';

const PlayHeader = () => {
  return (
    <div className='w-full h-14 flex items-center justify-between p-10 pt-0 pb-0'>
        <div className='w-auto h-10 flex items-center '>
            <div className='text-xl  font-medium text-green-500 flex'>Jar 1's  <p className='text-white pl-3' >Stickers 😄</p></div>
        </div>
        <div className='w-32 h-10  flex items-center justify-end'>
       <div className='w-16 h-10 flex items-center justify-between'>

     
            <button className='w-8 h-8 hover:bg-stone-600 rounded flex items-center justify-center'>
            <Image
      src="/Images/settings.png"
      width={23}
      height={23}
      alt=""
    />
            </button>
            <button>
                <p className='text-2xl font-medium'>X</p>
            </button>
         </div>
        </div>
    </div>
  )
}

export default PlayHeader