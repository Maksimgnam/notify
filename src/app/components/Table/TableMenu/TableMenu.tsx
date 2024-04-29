import React from 'react';
import { FC } from 'react';



interface TableMenuProps {
    name: string,
    date:string,
    days:string


}
const TableMenu:FC<TableMenuProps> = ({name, date, days}) => {
  return (
    <div className='w-table-menu h-full   p-2 '>
        <div className='w-full h-12  '>
            <div className='w-auto h-auto flex items-center pt-1'>
            <div className='w-8 h-8 bg-sky-200 rounded flex items-center justify-center m-1 mt-0 mb-0'>
                    <p className='text-lg font-medium'>T</p>

            </div>
            <p className='text-lg font-medium pl-1'>{name}</p>
            </div>
        </div>
      <div className='w-9/12 h-1px bg-slate-200 pl-2'></div>
  
        <div className='w-auto h-9 flex items-center pt-1'>
          
            <p className='text-xl font-medium pl-1'>Task</p>
            </div>
     
        <div className='w-full h-menu-tasks overflow-y-scroll  overflow-x-hidden'>
            <div className='w-full h-auto '>
            <div className='w-10/12 h-auto flex items-center justify-between m-2'>
                        <div className='w-auto h-auto flex items-center ' >

              
                    <div className='w-7 h-7 bg-green-200 rounded flex justify-center items-center'>D</div>
                    <h2 className='text-md font-medium pl-2'>Done</h2>
                        </div>
                 
                        <div className='w-6 h-6 bg-slate-200 rounded flex justify-center items-center'>
                        <p className='text-sm'>7</p>
                        </div>
                    </div>
            
                <div className='w-10/12 h-12 bg-green-200 rounded flex items-center  m-3 ml-2 pl-3'>
                    <p className='text-lg font-medium'>Coding</p>
                </div>
                <div className='w-10/12 h-12 bg-green-200 rounded flex items-center  m-3 ml-2 pl-3'>
                    <p className='text-lg font-medium'>Coding</p>
                </div>
                <div className='w-10/12 h-12 bg-green-200 rounded flex items-center  m-3 ml-2 pl-3'>
                    <p className='text-lg font-medium'>Coding</p>
                </div>
                <div className='w-10/12 h-12 bg-green-200 rounded flex items-center  m-3 ml-2 pl-3'>
                    <p className='text-lg font-medium'>Coding</p>
                </div>
            </div>
            <div className='w-full h-auto pt-1'>
                    <div className='w-10/12 h-auto flex items-center justify-between m-2'>
                        <div className='w-auto h-auto flex items-center ' >

              
                    <div className='w-7 h-7 bg-sky-200 rounded flex justify-center items-center'>In</div>
                    <h2 className='text-md font-medium pl-2'>In progress</h2>
                        </div>
                 
                        <div className='w-6 h-6 bg-slate-200 rounded flex justify-center items-center'>
                        <p className='text-sm'>1</p>
                        </div>
                    </div>
                    <div className='w-10/12 h-12 bg-sky-200 rounded flex items-center  m-3 ml-2 pl-3'>
                        <p className='text-lg font-medium'>Write letter</p>
                    </div>
                    <div className='w-10/12 h-12 bg-sky-200 rounded flex items-center  m-3 ml-2 pl-3'>
                        <p className='text-lg font-medium'>Write letter</p>
                    </div>
                    <div className='w-10/12 h-12 bg-sky-200 rounded flex items-center  m-3 ml-2 pl-3'>
                        <p className='text-lg font-medium'>Write letter</p>
                    </div>
                    <div className='w-10/12 h-12 bg-sky-200 rounded flex items-center  m-3 ml-2 pl-3'>
                        <p className='text-lg font-medium'>Write letter</p>
                    </div>
              
            </div>
            <div className='w-full h-auto pt-1'>
                <div className='w-10/12 h-auto flex items-center justify-between m-2'>
                    <div className='w-auto h-auto flex items-center ' >

              
                    <div className='w-7 h-7 bg-red-200 rounded flex justify-center items-center'>N</div>
                    <h2 className='text-md font-medium pl-2'>None</h2>
                    </div>
                 
                    <div className='w-6 h-6 bg-slate-200 rounded flex justify-center items-center'>
                        <p className='text-sm'>10</p>
                    </div>
                </div>
                <div className='w-10/12 h-12 bg-red-200 rounded flex items-center  m-3 ml-2 pl-3'>
                    <p className='text-lg font-medium'>Do homework</p>
                </div>
                <div className='w-10/12 h-12 bg-red-200 rounded flex items-center  m-3 ml-2 pl-3'>
                    <p className='text-lg font-medium'>Do homework</p>
                </div>
            
                <div className='w-10/12 h-12 bg-red-200 rounded flex items-center  m-3 ml-2 pl-3'>
                    <p className='text-lg font-medium'>Do homework</p>
                </div>
                
            </div>
        </div>


    </div>
  )
}

export default TableMenu