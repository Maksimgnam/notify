import React from 'react'

const Column = () => {
    return (
        <div className='w-1/6 h-full bg-gray-100  border border-gray-300'>
            <div className='w-full h-10  flex items-center justify-between p-3 '>
                <h2 className='text-lg font-medium'>Day </h2>
                <button className='w-7 h-7 bg-gray-600 rounded'>
                    <p className='text-lg text-white font-medium'>+</p>
                </button>
            </div>
            <div className='w-full h-auto flex items-center justify-center'>

            </div>
        </div>
    )
}

export default Column