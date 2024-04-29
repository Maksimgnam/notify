import CreateSticker from '@/app/components/Jars/Jar/CreateSticker'
import React, { FC } from 'react'


interface Params{
  params: { id:string, jarId:string}
}
const page:FC<Params> = ({params}) => {
  return (
    <div className='w-full h-full'>
      <CreateSticker params={params}/>
    </div>
  )
}

export default page