import Link from 'next/link'
import React, { FC } from 'react'


interface JarHeader{
    title: string | undefined,
    createdDate:string  | undefined,
    params: { id:string, jarId:string},

}
const JarHeader:FC<JarHeader> = ({title, createdDate, params}) => {
  return (
    <div className='w-full h-12  flex items-center justify-between p-10 pt-8'>
        <div className='w-auto h-auto flex items-center'>

     
          <div className='w-8 h-8 bg-green-400 rounded flex items-center justify-center'>
            <p className='text-lg font-medium'>J</p>
        </div>
        <p className='text-lg font-medium pl-2'>{title}</p>
        <div className='w-auto flex items-center ml-2'>
            
        {/* <div className='w-6 h-6 bg-green-300 rounded flex items-center justify-center'>
            <p className='text-sm font-medium'>C</p>
        </div>
        <p className='text-md font-medium pl-1' >{createdDate}</p> */}
        </div>

    
     
        </div>
        <div className='w-auto min-w-40 h-auto flex justify-between'>
         
            <Link href={`/home/${params.id}/jars/jar/${params.jarId}/play`}>
            <button className='w-24 h-9 bg-black rounded '>
                <p className='text-md text-green-300 font-medium'>Play</p>
            </button>
            </Link>
                 
            <Link href={`/home/${params.id}/jars/jar/${params.jarId}/createSticker`}>
            <button className='w-9 h-9 bg-black rounded'>
                <p className='text-lg text-green-300 font-medium'>+</p>
            </button>
            </Link>
        </div>
    </div>
  )
}

export default JarHeader