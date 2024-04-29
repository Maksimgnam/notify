import Play from '@/app/components/Play/Play'
import React, { FC } from 'react';
interface Params {
  params: { id: string, jarId:string}
}

const page:FC<Params> = ({params}) => {
  return (
    <div className='w-full h-full bg-white '>
        <Play params={params}/>
    </div>
  )
}

export default page