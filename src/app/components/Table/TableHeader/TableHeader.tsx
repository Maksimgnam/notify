import React, { FC, useState } from 'react'


interface TableHeaderProps {
    date: string,
 
    days: string,
    datesOptions:JSX.Element[] | null

  

}

const TableHeader:FC<TableHeaderProps> = ({date, days, datesOptions}) => {
   

    return (
        <div className='w-full  h-14 shadow  flex items-center justify-between p-4 '>
            {/* <div className='w-auto   h-11 flex items-center justify-around pl-2'>
                <div className='w-8 h-8 bg-sky-300 rounded flex items-center justify-center m-1 mt-0 mb-0'>
                    <p className='text-xl font-medium'>T</p>

                </div>
                <div className=' h-10 w-auto flex justify-between items-center '>


                    <p className='text-xl font-medium'>{name}</p>
                    <div className='w-16 h-6 rounded bg-green-300  flex items-center justify-center relative left-2'>
                        <p className='text-sm font-medium'>single</p>

                    </div>
                </div>
                <div className='w-auto h-9  ml-5'>
                    <select name="" id="" className='w-28 h-8  border border-gray-100 bg-gray-50 text-center  outline-none  m-1 ml-2 mt-0 rounded-md'>
                        <option value="">Done</option>
                        <option value="">In progress</option>
                        <option value="">None</option>
                        <option value="">Rejected</option>
                    </select>
                    <select name="" id="" className='w-28 h-8  border border-gray-100 bg-gray-50 text-center  outline-none  m-1 ml-2 mt-0 rounded-md'>
                        <option value="">Low</option>
                        <option value="">Medium</option>
                        <option value="">Important</option>
                    </select>
                </div>




            </div>
            <div className='w-auto h-10  flex items-center relative right-5'>

                <input type="text" placeholder='Search...' className='w-52 h-9 border border-gray-200 bg-slate-50 rounded-md outline-none  m-1 mt-0 mb-0 pl-1' />
                <div className='w-20 h-8  bg-sky-200 rounded  flex items-center justify-center pt-1 m-1 mt-0  mb-0'>
                    <p className='text-sm font-medium'>{days} days</p>
                </div>
                <div className='w-9 h-9 hover:bg-gray-200 rounded-md flex items-center justify-center '>
                    <div className='w-5  h-full  flex justify-between items-center '>
                        <div className='w-1 h-1 bg-black rounded-full'></div>
                        <div className='w-1 h-1 bg-black rounded-full'></div>
                        <div className='w-1 h-1 bg-black rounded-full'></div>
                    </div>
                </div>

            </div> */}
                <div className='w-auto h-auto  flex items-center'>
            <div className='w-auto h-auto flex items-center'>
                <div className='w-7 h-7 bg-sky-200 rounded flex items-center justify-center'>
                    <p className='text-sm font-medium'>D</p>
                </div>
             
                <p className='text-sm font-medium pl-1 '>Created: {date} </p>
            </div>
          
            
         
            </div>
             <input placeholder='Search...' className='w-64 h-9 rounded border-2 outline-none pl-1 '/>
        
         
         <select name="" id="" className='w-auto h-12 outline-none'>
            {datesOptions}
         </select>

           

        </div>
    )
}

export default TableHeader