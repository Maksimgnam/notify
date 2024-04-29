'use client'
import React, { FC, useState, useEffect } from 'react';
import Link from 'next/link'
import TableHeader from './TableHeader/TableHeader'
import Column from '../Column/Column'
import TableMenu from './TableMenu/TableMenu';


interface TableParams {
    params: {
        id: any
        tableId: any,
        name: string
    }


}
interface Table {
    id: any,
    name: string,
    description: string,
    createdDate: string,
    startDate: string,
    endDate: string,
    dates: { date: string, formattedDate: string }[]

}
const Table: FC<TableParams> = ({ params }) => {
    const [table, setTable] = useState<Table | null>(null);
    const name = `${table?.name}`;
    const date = `${table?.createdDate}`;
    const endDate = `${table?.endDate}`;
    const startDate = `${table?.startDate}`;
    const days = `${table?.dates.length}`


    const datesOptions = table?.dates.map((item)=>(
        <option value={item.formattedDate}>{item.formattedDate}</option>
    )) || null


    useEffect(() => {
        const fetchTable = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/table/${params.name}/${params.tableId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Table = await response.json();
                setTable(data);
            } catch (err) {
                console.error('Error fetching workspace:', err);

            }
        };

        fetchTable();
    }, []);
    return (
        <div className='w-full h-full flex'>
            <TableMenu name={name}  date={date} days={days}/>
            <div className='w-1px h-full bg-slate-200'></div>

            <div className='w-table-columns h-full '>
               <TableHeader  date={date} days={days} datesOptions={datesOptions}  />


            <div className='w-full h-container  flex overflow-x-scroll'>
                {table?.dates.map((item, index) => (
                    <Column key={index} date={item.formattedDate} />
                ))}

            </div>
           
            </div>

            <div className='w-1px h-full bg-slate-200'></div>

            <div className='w-table-bar h-full flex flex-col justify-between pt-1  '>
         
                <div className='w-full h-auto flex flex-col  items-center '>
                <button className='w-10 h-10 bg-slate-200 rounded flex items-center justify-center  m-2 ml-0 mr-0'>
                <p className='text-lg font-medium'>T</p>
            </button>

            <div className='h-3px w-6/12 bg-black rounded-lg'></div>
            <button className='w-9 h-9 bg-sky-300 rounded flex items-center justify-center  m-2 ml-0 mr-0'>
                <p className='text-xl font-medium '>+</p>
                </button>
                <Link href={`/home/${params.id}/workspace/${params.name}`}>
                <button className='w-9 h-9 bg-black rounded flex items-center justify-center  m-2 ml-0 mr-0'>
                <p className='text-xl text-white font-mono '>{`<`}</p>
                </button>
                </Link>
                </div>
                {/* <div className='w-full h-auto flex flex-col items-center  justify-center pb-14'>
                <button className='w-11 h-11 bg-sky-300 rounded flex items-center justify-center  m-2 ml-0 mr-0'>
                <p className='text-2xl font-medium '>+</p>
                </button>
                <button className='w-11 h-11 bg-black rounded flex items-center justify-center  m-2 ml-0 mr-0'>
                <p className='text-xl text-white font-mono '>{`<`}</p>
                </button>
                </div> */}
            
         
            </div>
           
        

          

        </div>
    )
}

export default Table