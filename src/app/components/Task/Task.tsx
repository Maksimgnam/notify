import React from 'react'

const Task = () => {
    return (
        <div className='w-11/12 h-auto bg-white rounded-md shadow flex flex-wrap items-center  justify-between pl-2 m-2 p-2 '>
            <p className='text-lg font-medium break-words'>Task 1 for my kid Koe he was a great child  that I never forget</p>
            <div className='w-full h-auto flex justify-end'>
           

                <div className='w-auto min-w-20 h-8 rounded-lg bg-green-200 flex items-center p-1'>
                    <div className='w-5 h-5 bg-green-500 rounded-full'></div>
                    <p className='text-sm font-medium pl-1'>Done</p>
                </div>
                {/* <div className='w-auto min-w-20 h-8 rounded-lg bg-sky-200 flex items-center p-1'>
                    <div className='w-5 h-5 bg-sky-500 rounded-full'></div>
                    <p className='text-sm font-medium pl-1'>In progress</p>
                </div>
                <div className='w-auto min-w-20 h-8 rounded-lg bg-rose-200 flex items-center p-1'>
                    <div className='w-5 h-5 bg-rose-500 rounded-full'></div>
                    <p className='text-sm font-medium pl-1'>None</p>
                </div> */}
            </div>

        </div>
    )
}

export default Task