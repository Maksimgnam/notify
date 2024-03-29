'use client'
import React, { FC, useState, useEffect } from 'react'
import Header from '../Header/Header'
import TableHeader from './TableHeader/TableHeader'

interface TableParams {
    params: {
        tableId: any,
        name: string
    }


}
interface Table {
    id: any,
    name: string,
    description: string,
    createdDate: string

}
const Table: FC<TableParams> = ({ params }) => {
    const [table, setTable] = useState<Table | null>(null);
    const name = `${table?.name}`;
    const date = `${table?.createdDate}`;

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
        <div className='w-full h-full'>
            <TableHeader name={name} date={date} />
            <div className='w-full h-container  flex flex-wrap'>
                <div className='w-1/6 h-full bg-gray-100  border border-gray-300'></div>
                <div className='w-1/6 h-full bg-gray-100  border border-gray-300'></div>
                <div className='w-1/6 h-full bg-gray-100  border border-gray-300'></div>
                <div className='w-1/6 h-full bg-gray-100  border border-gray-300'></div>
                <div className='w-1/6 h-full bg-gray-100  border border-gray-300'></div>
                <div className='w-1/6 h-full bg-gray-100  border border-gray-300'></div>
            </div>

        </div>
    )
}

export default Table