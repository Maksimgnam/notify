import React from 'react'

const CreateTask = () => {
    return (
        <div className='w-10/12 h-28  flex flex-col items-center justify-center'>
            <input type="text" className='w-11/12 h-12 bg-slate-100 rounded-md' />
            <div className='w-11/12 h-14 flex items-center justify-between'>
                <select className='w-9/12 h-10 bg-slate-300' ></select>
                <button className='w-12 h-10 bg-slate-600 rounded'></button>

            </div>
        </div>
    )
}

export default CreateTask;