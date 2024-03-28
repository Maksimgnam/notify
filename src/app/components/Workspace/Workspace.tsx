'use client'
import React, { FC, useState, useEffect } from 'react';
import Header from '../Header/Header';
import Link from 'next/link';

interface WorkspaceParams {
    params: { id: any, name: string, }
}
interface Workspace {
    id: any,
    name: string,
    type: string,
    priority: string,
    description: string,
    createdDate: string
}

interface Table {
    id: any,
    name: string,
    description: string
}
const Workspace: FC<WorkspaceParams> = ({ params }) => {

    const [workspace, setWorkspace] = useState<Workspace | null>(null);
    const [tables, setTables] = useState<Table[]>([])
    useEffect(() => {
        const fetchWorkspace = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/workspaces/${params.name}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Workspace = await response.json();
                setWorkspace(data);
            } catch (err) {
                console.error('Error fetching workspace:', err);

            }
        };

        fetchWorkspace();
    }, []);
    useEffect(() => {
        const fetchTable = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/tables/${params.name}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTables(data);
            } catch (err) {
                console.error('Error fetching workspace:', err);

            }
        };

        fetchTable();
    }, []);
    const date = workspace?.createdDate;
    return (
        <div className='w-82% h-full  '>
            <Header date={date} />
            <div className='w-full h-container p-5 pt-3 '>
                <div className='w-full h-auto  flex justify-between'>
                    <div className='w-auto h-auto '>


                        <div className='w-full h-auto  flex items-center '>
                            <h3 className='text-5xl font-medium'>{workspace?.name}</h3>
                            <div className='w-auto h-8 flex justify-between items-center relative left-5 pt-1'>
                                <div className='w-16 h-8 bg-sky-300 rounded flex items-center justify-center m-1 '>         <p className='text-md  font-medium '>{workspace?.type}</p></div>
                                <div className='w-20 h-8 bg-green-300 rounded flex items-center justify-center m-1 '>         <p className='text-md  font-medium '>{workspace?.priority}</p></div>
                            </div>

                        </div>
                        <p className='text-lg text-gray-500  font-medium relative top-2 pl-1 '>{workspace?.description}</p>
                    </div>
                    <div className='w-1/5 h-20  flex  justify-end  pt-4 pr-5' >
                        <div className='w-48 h-9 flex justify-between '>
                            <button className='w-10 h-9 bg-slate-100 rounded'></button>
                            <button className='w-10 h-9 bg-slate-100 rounded'></button>

                            <Link href={`/home/${params.id}/workspace/${workspace?.id}/createTable`}>
                                <button className='w-24 h-9 bg-sky-300 rounded'>
                                    <p className='text-xl font-medium'>Add +</p>
                                </button>
                            </Link>
                        </div>
                    </div>


                </div>
                <div className='w-full h-5/6 flex flex-wrap pt-3'>
                    {tables.map((item) => (
                        <div>
                            <Link href={`/home/${params.id}/workspace/${params.name}/table/${item.id}`}>

                                <div key={item.id} className='w-72 h-20 bg-white rounded-md shadow-table  flex items-center justify-between m-2 pl-2 '>
                                    <div className='w-auto h-auto flex items-center'>


                                        <div className='w-14 h-14 bg-sky-300 rounded flex items-center justify-center'>
                                            <p className='text-4xl font-medium'>T</p>
                                        </div>
                                        <div className='w-auto h-16 flex flex-col relative left-2 pt-1'>
                                            <h2 className='text-xl font-medium'>{item.name}</h2>
                                            <p className='text-sm text-gray-500 font-medium'>{item.description}</p>

                                        </div>
                                    </div>
                                    <div className='w-20 h-16 flex items-center justify-center '>

                                    </div>


                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>






        </div>
    )
}

export default Workspace;






