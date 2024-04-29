'use client'
import React from 'react';
import { FC, useState } from 'react';
interface RemindProps{
    name:string,

}
const Remind:FC<RemindProps> = ({name}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
    return (
        <div className={`w-64 h-auto min-h-14 ${isChecked ? 'bg-green-200' : 'bg-white '}  rounded shadow-remind flex flex-wrap items-center justify-between  m-5 ml-0 p-3`}>
            <p className={`text-lg font-medium ${isChecked ? 'line-through text-green-500 shadow-none  ' : ''}`}>{name}</p>
            <input onChange={handleCheckboxChange} className='w-6 h-6 ml-2' type="checkbox" />
       
        </div>
    )
}

export default Remind