'use client'
import React, { FC } from 'react'
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Workspace {
    id: any,
    name: string,

};
interface Params {
    params: { id: string, }
}
const page: FC<Params> = ({ params }) => {
    const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
    const [searchWorkspace, setSearchWorkspace] = useState<string>('');
    useEffect(() => {

        const fetchWorkspaces = async () => {
            const response = await fetch('http://localhost:8000/api/workspaces');
            const workspaces = await response.json();
            setWorkspaces(workspaces)
        }

        fetchWorkspaces()

    }, [])

    const filteredWorkspace = workspaces.filter(workspace =>
        workspace.name.toLowerCase().includes(searchWorkspace.toLowerCase())
    )

    return (
        <div className='w-full h-full flex justify-center  '>


            <div className='w-1/5 h-auto max-h-80 rounded-xl shadow-table  flex justify-center relative top-4 '>
                <div className='w-11/12 h-auto   rounded-lg '>
                    <div className='w-full h-16 flex justify-center items-center  '>
                        <input value={searchWorkspace} onChange={(e) => setSearchWorkspace(e.target.value)} placeholder='Search workspace...' type='text' className='w-72 h-11 text-md font-medium  bg-slate-100 rounded-md  outline-none pl-1.5 ' />
                    </div>
                    <div className='w-full h-auto flex flex-col '>
                        {filteredWorkspace.map((item) => (
                            <div className='w-10/12 h-12 m-2 ml-0 mt-0'>

                                <Link href={`/home/${params.id}/workspace/${item.id}`}>
                                    <div key={item.id} className='w-full  h-full rounded flex items-center pl-1   '>
                                        <div className='w-9 h-9 bg-slate-200 rounded-md flex items-center justify-center'>
                                            <p className='text-lg font-medium'>W</p>
                                        </div>
                                        <p className='text-xl font-mono relative left-1.5' >  {item.name}</p>

                                    </div>
                                </Link>
                            </div>
                        ))}

                    </div>
                </div>

            </div>

        </div>
    )
}

export default page