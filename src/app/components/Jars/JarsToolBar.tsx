import Link from 'next/link'
import React, { FC } from 'react'
interface Params {
  params: { id: string, jarId:string}
}

const JarsToolBar:FC<Params> = ({params}) => {

  return (
    <div className=' w-jars-tool-bar h-full pt-4'>
      <div className='w-full  min-h-24 flex flex-col items-center justify-between '>

   
      <Link href={`/home/${params.id}/jars/createJar`}>
      <button className='w-9 h-9 bg-green-300 rounded'>
        <p className='text-lg font-mono'>+</p>
      </button>
      </Link>
      <button className='w-9 h-9 bg-green-300 rounded flex items-center justify-center '>
      <img className='w-5 h-5' src="https://icons.veryicon.com/png/o/miscellaneous/ui-basic-linear-icon/like-106.png" alt="" />

      </button>
      </div>
    </div>
  )
}

export default JarsToolBar