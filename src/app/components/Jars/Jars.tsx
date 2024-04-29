"use client"
import React, { FC, useEffect, useState } from 'react'
import JarsToolBar from './JarsToolBar'
import JarsHeader from './JarsHeader'
import Link from 'next/link';
interface Params {
    params: { id: string, jarId:string}
}


interface Jar{
    id:string,
    title: string,
    createdDate:string
}
const Jars:FC<Params> = ({params}) => {

    const [jars, setJars]=useState<Jar[]>([]);
    const [searchName, setSeachName] = useState<string>('');


    useEffect(()=>{
        const fetchJars = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/jars`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setJars(data);
            } catch (err) {
                console.error('Error fetching workspace:', err);

            }
        };

        fetchJars()
    }, [])

    const filteredJars = jars.filter(item =>
        item.title.toLocaleLowerCase().includes(searchName.toLowerCase())
    )
    
  return (
    <div className='w-full h-full  flex'>
        <div className=' w-jars-container h-full  '>
            <JarsHeader  searchName={searchName} setSearchName={setSeachName}/>
            <div className='w-full h-auto flex flex-wrap '>



          {filteredJars.map((item)=>(
                    <Link key={item.id} href={`/home/${params.id}/jars/jar/${item.id}`}>
                    <div key={item.id} className='w-56 min-h-60 m-5'>
                        <div className='w-11/12 h-48 bg-green-300 rounded-lg flex items-center justify-center'>
                            <img className='w-32 h-32' src="https://emojical.net/wp-content/uploads/2023/02/jar-2.png" alt="" />
                        </div>
                        <div className=' w-10/12 pt-2 flex items-center justify-between'>
                            <h2 className='text-xl font-medium'>{item.title}</h2>
                            <div className='w-7 h-7  flex items-center justify-center'>
                                <img className='w-6 h-6' src="https://icons.veryicon.com/png/o/miscellaneous/ui-basic-linear-icon/like-106.png" alt="" />
                            </div>
                        </div>
                        <div className=' w-10/12 pt-1 flex items-center '>
                            
                        
                                <img className='w-4 h-4' src="https://cdn-icons-png.flaticon.com/512/826/826165.png" alt=""  />
                        
                            <h2 className='text-sm font-medium  pl-1'>{item.createdDate}</h2>
                        </div>
                    </div>
                    </Link>
                ))}


              


                
             
              
              
                
              
              
            </div>
        </div>
        <div className='w-1px h-full bg-slate-300'></div>
        <JarsToolBar params={params}/>
    </div>
  )
}

export default Jars