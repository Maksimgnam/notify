import React, { FC } from 'react';

interface JarsHeaderData{
  
  searchName: string,
  setSearchName:React.Dispatch<React.SetStateAction<string>> 
}

const JarsHeader:FC<JarsHeaderData> = ({searchName, setSearchName}) => {
  return (
    <div className='w-full h-14  flex  items-center p-5 pt-0 pb-0'>
        <div className='w-9 h-9 bg-green-300 rounded flex items-center justify-center'>
            <p className='text-xl font-medium'>J</p>
        </div>
        <p className='text-xl font-medium pl-2'>My jars</p>
        <input value={searchName} onChange={(e)=> setSearchName(e.target.value)} type="text" className='w-52 h-8 border-2  rounded outline-none pl-1 ml-4' placeholder='Search...' />
    </div>
  )
}

export default JarsHeader