import Jar from '@/app/components/Jars/Jar/Jar'
import React, { FC } from 'react';

interface Params {
  params: { id:string, jarId:string}
}

const page:FC<Params> = ({params}) => {
  return (
    <div className='w-full h-full'>
      <Jar params={params}/>
    </div>
  )
}

export default page