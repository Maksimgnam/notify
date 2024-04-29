import Jars from '@/app/components/Jars/Jars'
import React, { FC } from 'react';
interface Params {
  params: { id: string, jarId:string}
}

const page:FC<Params>= ({params}) => {
  return (
    <div className='w-full h-full '>
        <Jars params={params}/>
    </div>
  )
}

export default page