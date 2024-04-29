'use client'
import React, { FC, useState } from 'react';
import { useRouter } from 'next/navigation';


interface Params {
    params: { id: string, name: string }
}

const page: FC<Params> = ({ params }) => {
    const currentDate = new Date();
    const router = useRouter()
    const [tableData, setTableData] = useState({
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        createdDate: `${currentDate.getDate()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear().toString().padStart(2, '0')}`,

    })

    const Submit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:8000/api/create-table/${params.name}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tableData),
            });


            const result = await response.json();
            console.log(result);
            router.push(`/home/${params.id}/workspace/${params.name}`)

            setTableData({
                name: '',
                description: '',
                startDate: '',
                endDate: '',
                createdDate: `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`,
            });


        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };
    const inputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setTableData({
            ...tableData,
            [name]: value,
        });
    };
    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setTableData({
            ...tableData,
            [name]: value,
        });
    };

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <form onSubmit={Submit} className='w-1/5 h-3/5  flex flex-col justify-around '>
                <div className='w-full h-auto flex'>
                    <div className='w-8 h-8 bg-slate-200 rounded flex items-center justify-center'>
                        <p className='text-md font-medium'>T</p>
                    </div>
                    <h3 className='text-xl font-medium  pl-2 relative top-1 '>Create Table</h3>

                </div>

                <input id='name' name='name' value={tableData.name} onChange={inputChange} className='w-11/12 h-12 text-lg font-mono placeholder:text-gray-400 border rounded-md outline-none pl-1' type="text" placeholder='Name' />

                <input
                    id='startDate'
                    name='startDate'
                    value={tableData.startDate}
                    onChange={inputChange}
                    type="date"
                    placeholder='Start Date'
                    className='w-11/12 h-12 text-lg font-mono placeholder:text-gray-400 border rounded-md outline-none pl-1'
                />

                <input
                    id='endDate'
                    name='endDate'
                    value={tableData.endDate}
                    onChange={inputChange}
                    type="date"
                    placeholder='End Date'
                    className='w-11/12 h-12 text-lg font-mono placeholder:text-gray-400 border rounded-md outline-none pl-1'
                />
                <textarea id='description' name='description' value={tableData.description} onChange={inputChange} className='w-11/12 h-28 text-lg font-mono placeholder:text-gray-400 border-2 rounded-md outline-none pl-1 resize-none' placeholder='Description' />
                <button type='submit' className='w-72 h-12 bg-slate-200 rounded'>
                    <p className='text-xl font-medium'>Create</p>
                </button>
            </form>
        </div>
    )
}

export default page;