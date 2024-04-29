"use client"
import { title } from 'process';
import React, { FC } from 'react';
import { useState } from 'react';


interface Params{
    params: { id:string, jarId:string}
  }




const CreateSticker:FC<Params> = ({params}) => {

    const currentDate = new Date();
    const [stickerData, setStickerData] = useState({
        title: '',

        createdDate: `${currentDate.getDate()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear().toString().padStart(2, '0')}`,

    })

    
    const Submit = async (event: React.FormEvent) => {
      event.preventDefault();

      try {
          const response = await fetch(`http://localhost:8000/api/create-sticker/${params.jarId}`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(stickerData),
          });

          const result = await response.json();
          console.log(result);

          setStickerData({
              title: '',

              createdDate: `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`,
          });


      } catch (error) {
          console.error('Error submitting data:', error);
      }
  };
  const inputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setStickerData({
          ...stickerData,
          [name]: value,
      })
    }
    
  return (
    <div className='w-full h-full bg-green-100 flex items-center justify-center'>
        <div className='w-72 h-48  rounded-md flex flex-col justify-around '>
            <h2 className='text-2xl font-medium'>Create Sticker 👌</h2>
           <input id='title' name='title' value={stickerData.title} onChange={inputChange} className='w-11/12 h-12 bg-transparent rounded outline-none border-2 pl-2' type="text" placeholder='New Sticker 😄' />
           <button onClick={Submit}  className='w-11/12 h-12 bg-green-300 rounded '>
            <p className='text-lg font-medium'>Create</p>
           </button>
        </div>
    </div>
  )
}

export default CreateSticker;