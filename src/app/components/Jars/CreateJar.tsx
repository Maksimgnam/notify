"use client"
import { title } from 'process';
import React from 'react';
import { useState } from 'react';






const CreateJar = () => {

    const currentDate = new Date();
    const [jarData, setJarData] = useState({
        title: '',

        createdDate: `${currentDate.getDate()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear().toString().padStart(2, '0')}`,

    })

    
    const Submit = async (event: React.FormEvent) => {
      event.preventDefault();

      try {
          const response = await fetch('http://localhost:8000/api/create-jar', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(jarData),
          });

          const result = await response.json();
          console.log(result);

          setJarData({
              title: '',

              createdDate: `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`,
          });


      } catch (error) {
          console.error('Error submitting data:', error);
      }
  };
  const inputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setJarData({
          ...jarData,
          [name]: value,
      })
    }
    
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className='w-72 h-48  rounded-md flex flex-col justify-around '>
            <h2 className='text-2xl font-medium'>Create Jar 👌</h2>
           <input id='title' name='title' value={jarData.title} onChange={inputChange} className='w-11/12 h-12 rounded outline-none border-2 pl-2' type="text" placeholder='New Jar 😎' />
           <button onClick={Submit}  className='w-11/12 h-12 bg-green-300 rounded '>
            <p className='text-lg font-medium'>Create</p>
           </button>
        </div>
    </div>
  )
}

export default CreateJar