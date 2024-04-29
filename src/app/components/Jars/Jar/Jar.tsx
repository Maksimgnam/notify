"use client"
import React, { useState, useEffect, FC } from 'react'
import JarHeader from './JarHeader'
import Sticker from '../../Sticker/Sticker'


interface Params {
    params: { id:string, jarId:string}
}
interface Jar{
    id:string,
    title: string,
    createdDate:string,
    params: { id:string, jarId:string}
}
interface Sticker{
    id:string,
    title: string,
    createdDate:string,
}
const Jar:FC<Params> = ({params}) => {

    const [jar, setJar] = useState<Jar | null>(null);
    const [stickers, setStickers] = useState<Sticker[]>([]);
    const [isJar, setIsJar] = useState<boolean>(true);
    const [isStickers, setIsStickers] = useState<boolean>(false);
    const title =jar?.title;
    const createdDate = jar?.createdDate;


    useEffect(() => {
        const fetchJar = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/jar/${params.jarId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Jar = await response.json();
                setJar(data);
            } catch (err) {
                console.error('Error fetching workspace:', err);

            }
        };

      
        const fetchStickers = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/stickers/${params.jarId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStickers(data);
            } catch (err) {
                console.error('Error fetching workspace:', err);

            }
        };
        fetchJar();

        fetchStickers();
    }, []);
  return (
    <div className='w-full h-full bg-green-100 '>
        
        <JarHeader title={title} createdDate={createdDate} params={params}/>
     


            {
                isStickers && (
                    <div className='w-full h-auto flex flex-wrap p-7 pt-0'>
                    {
                        stickers.map((item)=>(
                    
                            <Sticker key={item.id} title={item.title} createdDate={item.createdDate}/>
                        ))
                    }
                    </div> 
                )

            }
  {
    isJar && (
        
   <div className='w-full h-5/6 flex flex-col justify-center items-center' onClick={()=> {
    setIsJar(false);
    setIsStickers(true)
   }}>
            <div className=' w-full h-full   flex flex-col items-center justify-center bg '>

            <div className='w-4/12 h-9 bg-black relative   rounded-xl shadow-2xl'></div>
            {/* <div className='w-4/12 h-auto flex  p-4 relative top-6 '>
                <div>

                <div className='w-32 h-16 bg-yellow-300 rounded-md shadow-xl m-2  rotate-6 relative right-3 bottom-2'></div>
                <div className='w-32 h-20 bg-green-300 rounded-md shadow-xl m-2 relative top-2 -rotate-2'></div>
                </div>
                <div>
                    
                </div>
                <div className='w-40 h-28 bg-orange-300 rounded-md shadow-xl m-3 -rotate-12 relative top-4'></div>
                <div>

                <div className='w-32 h-32 bg-purple-300 rounded-md shadow-xl m-2 -rotate-6  relative bottom-6'></div>
                <div className='w-32 h-14 bg-green-300 rounded-md shadow-xl m-2 rotate-6 '></div>
                </div>              
            </div> */}
         
            <div className='w-4/12 h-5/6 bg-white  border-2 rounded-t-3xl rounded-b-lg shadow-xl flex  items-end  z-50 '>
            {
                stickers.map((item)=>(
                    <div key={item.id} className='w-full h-2 bg-red-300 '>
                      
                        </div>
                
                ))
            }
            </div>
             </div>
          
            </div> 
                   
    )
}   
          

    
        </div>
  
  )
}

export default Jar
