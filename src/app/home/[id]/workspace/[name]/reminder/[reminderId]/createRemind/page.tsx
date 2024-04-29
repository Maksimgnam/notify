'use client'
import { time } from 'console';
import React, { FC } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
interface ReminderProps {
  params: { id: string, name: string, reminderId:string}
}

const page:FC<ReminderProps> = ({params}) => {
  const router = useRouter();

  const [remindData, setRemindData] = useState({
    name: '',
    description: '',
    date:'',
    time:'',


})
const Submit = async (event: React.FormEvent) => {
  event.preventDefault();

  try {
      const response = await fetch(`http://localhost:8000/api/create-remind/${params.name}/${params.reminderId}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(remindData),
      });


      const result = await response.json();
      console.log(result);
      router.push(`/home/${params.id}/workspace/${params.name}/reminder/${params.reminderId}`)

     setRemindData ({
      name: '',
      description: '',
      date:'',
      time:'',
    
      });


  } catch (error) {
      console.error('Error submitting data:', error);
  }
};

const inputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
  const { name, value } = event.target;
  setRemindData({
      ...remindData,
      [name]: value,
  });
};
  return (
    <div className='w-full h-full  flex items-center justify-center'>
          <form onSubmit={Submit} className='w-1/5 h-44  flex flex-col justify-around '>
                <div className='w-full h-auto flex'>
                    <div className='w-8 h-8 bg-orange-300 rounded flex items-center justify-center'>
                        <p className='text-md font-medium'>R</p>
                    </div>
                    <h3 className='text-xl font-medium  pl-2 relative top-1 '>Create Remind</h3>

                </div>

                <input id='name' name='name' value={remindData.name} onChange={inputChange}  className='w-11/12 h-12 text-lg font-mono placeholder:text-gray-400 border-2 rounded-md outline-none pl-1' type="text" placeholder='Title' />
                <div className='w-11/12 h-auto flex justify-between'>
                <input type="date" id='date' name='date' value={remindData.date} onChange={inputChange} className='w-32 h-8  bg-orange-200 rounded p-1 text-sm font-medium ' />
                <input type="time" id='time' name='time' value={remindData.time} onChange={inputChange} className='w-20 h-8  bg-orange-200 rounded p-1 text-sm font-medium' />
                <button type='submit' className='w-8 h-8 bg-black  rounded'>
                    <p className='text-xl text-white font-medium'>+</p>
                </button>
                </div>
          
            
            </form>
    </div>
  )
}

export default page