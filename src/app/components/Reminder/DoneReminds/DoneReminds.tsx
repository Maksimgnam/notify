import React from 'react'


const DoneReminds = () => {
    return (
        <div className='w-3/12 h-full bg-gray-50 flex flex-col items-center   '>
          <div className='w-full h-14 flex items-center justify-between p-3 '>
            <div className='w-auto h-auto flex items-center'>
            <div className='w-7 h-7  bg-green-300 rounded flex items-center justify-center'>
                <p className='text-sm text-black font-medium '>D</p>
            </div>
            <p className='text-md font-medium pl-1'>Done remind</p>
            </div>
            <div className='w-auto h-auto pr-3 flex items-center'>
       <input type="text" placeholder='Search..' className='w-40 h-8  rounded border-2  outline-none pl-1' />
            </div>
       
          </div>
          <div className='w-full h-auto flex flex-wrap '>
            <div className=' w-auto min-w-36 h-auto min-h-14 bg-white rounded shadow-done-remind flex items-center  m-2 p-2'>
            <p className='text-lg font-medium'>dddddddddddee 
            fffffe

            efwjrjrh
            fgr4tgr
            dddd</p>
            </div>
            <div className='w-5/12 h-14 shadow-done-remind  bg-white rounded m-2'></div>
            <div className='w-5/12 h-14 shadow-done-remind  bg-white rounded m-2'></div>
     
            
        </div>

        </div>
    )
}

export default DoneReminds