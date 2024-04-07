'use client'
import React, { FC, useState, useEffect, useRef } from 'react';
import Header from '../Header/Header';
import Link from 'next/link';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

interface WorkspaceParams {
    params: { id: string, name: string, }
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
    description: string,
    createdDate: string
}
interface Schedule {
    id: any,
    name: string,
    createdDate: string
}
interface Reminder {
    id: any,
    name: string,
    createdDate: string

}
const Workspace: FC<WorkspaceParams> = ({ params }) => {

    const [workspace, setWorkspace] = useState<Workspace | null>(null);
    const [tables, setTables] = useState<Table[]>([]);
    const [reminders, setReminders] = useState<Reminder[]>([]);
    const [schedules, setSchedules] = useState<Schedule[]>([])
    const [searchTable, setSearchTable] = useState<string>('');
    const date = workspace?.createdDate;
    const tableRef = useRef(null);
    const reminderRef = useRef(null);
    const scheduleRef = useRef(null);


    useEffect(() => {

        if (reminderRef.current) {
            tippy(reminderRef.current, {
                content: 'Create Reminder',
            });
        }

    }, []);
    useEffect(() => {

        if (scheduleRef.current) {
            tippy(scheduleRef.current, {
                content: 'Create Schedule',
            });
        }

    }, []);
    useEffect(() => {
        if (tableRef.current) {
            tippy(tableRef.current, {

                content: 'Create Table',
            });
        }


    }, []);
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
        const fetchTables = async () => {
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
        const fetchReminders = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/reminders/${params.name}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setReminders(data);
            } catch (err) {
                console.error('Error fetching workspace:', err);

            }
        };
        const fetchSchedules = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/schedules/${params.name}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSchedules(data);
            } catch (err) {
                console.error('Error fetching workspace:', err);

            }
        };

        fetchTables();
        fetchReminders();
        fetchSchedules()
    }, []);

    const filteredTables = tables.filter(table =>
        table.name.toLowerCase().includes(searchTable.toLowerCase())
    )
    return (
        <div className='w-82% h-full '>
            <div className='w-full h-container p-5 pt-5 '>
                <div className='w-full h-auto  flex justify-between'>
                    <div className='w-auto h-auto '>


                        <div className='w-full h-auto  flex items-center '>
                            <h3 className='text-4xl font-medium'>{workspace?.name}</h3>
                            <div className='w-auto h-8 flex justify-between items-center  pt-1 pl-2'>
                                <div className='w-16 h-7 bg-sky-300 rounded flex items-center justify-center m-1 '>         <p className='text-md  font-medium '>{workspace?.type}</p></div>
                                <div className='w-20 h-7 bg-green-300 rounded flex items-center justify-center m-1 '>         <p className='text-md  font-medium '>{workspace?.priority}</p></div>
                            </div>

                            <div className='w-auto h-11  flex items-center justify-around pl-2.5 pt-1'>
                                <div className='w-7 h-7 bg-slate-200 rounded-md flex items-center justify-center'>
                                    <img className='w-4 h-4' src="https://cdn-icons-png.flaticon.com/512/826/826165.png" alt="" />
                                </div>
                                <div className=' w-auto h-8 flex items-center pl-2 '>


                                    <p className='text-md font-medium'>{date}</p>
                                </div>


                            </div>

                        </div>
                        <p className='text-md text-gray-500  font-medium relative top-2 pl-1 '>{workspace?.description}</p>
                    </div>
                    <div className='w-auto h-20  flex  justify-between  pt-2 pr-5' >
                        <div className='w-auto h-10  flex items-center mr-3 '>
                            <input value={searchTable} onChange={(e) => setSearchTable(e.target.value)} type="text" placeholder='Search...' className='w-48 h-9 border-2 border-gray-200  rounded-md pl-1 outline-none' />

                        </div>
                        <div className='w-32  h-10 bg-slate-100 rounded-md flex items-center justify-around '>


                            <Link href={`/home/${params.id}/workspace/${workspace?.id}/createReminder`}>
                                <button ref={reminderRef} className='w-8 h-8 bg-orange-300 rounded'>
                                    <p className='text-xl font-medium'>+</p>
                                </button>
                            </Link>
                            <Link href={`/home/${params.id}/workspace/${workspace?.id}/createSchedule`}>
                                <button ref={scheduleRef} className='w-8 h-8 bg-green-300 rounded'>
                                    <p className='text-xl font-medium'>+</p>
                                </button>
                            </Link>
                            <Link href={`/home/${params.id}/workspace/${workspace?.id}/createTable`}>
                                <button ref={tableRef} className='w-8 h-8 bg-sky-300 rounded'>
                                    <p className='text-xl font-medium'>+</p>
                                </button>
                            </Link>
                        </div>
                    </div>


                </div>


                {
                    filteredTables.length > 0 ? (
                        <div className='w-full h-5/6 flex flex-wrap pt-3'>
                            {
                                reminders.map((item) => (
                                    <div>
                                        <Link href={`/home/${params.id}/workspace/${params.name}/table/${item.id}`}>

                                            <div key={item.id} className='w-72 h-card bg-white rounded-md shadow-table  flex items-center justify-between m-2 pl-2 '>
                                                <div className='w-auto h-auto flex items-center'>


                                                    <div className='w-12 h-12 bg-orange-300 rounded flex items-center justify-center'>
                                                        <p className='text-3xl font-medium'>R</p>
                                                    </div>
                                                    <div className='w-auto h-12 flex flex-col   relative left-2 '>
                                                        <h2 className='text-xl font-medium'>{item.name}</h2>
                                                        <p className='text-sm text-gray-400 font-medium'>{item.createdDate}</p>


                                                    </div>
                                                </div>
                                                <div className='w-24 h-12 flex justify-end items-center    '>
                                                    <div className='w-9 h-9 hover:bg-gray-100 rounded-md flex items-center justify-center relative right-4'>
                                                        <div className='w-5  h-full  flex justify-between items-center '>
                                                            <div className='w-1 h-1 bg-black rounded-full'></div>
                                                            <div className='w-1 h-1 bg-black rounded-full'></div>
                                                            <div className='w-1 h-1 bg-black rounded-full'></div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }


                            {
                                schedules.map((item) => (
                                    <div>
                                        <Link href={`/home/${params.id}/workspace/${params.name}/table/${item.id}`}>

                                            <div key={item.id} className='w-72 h-card bg-white rounded-md shadow-table  flex items-center justify-between m-2 pl-2 '>
                                                <div className='w-auto h-auto flex items-center'>


                                                    <div className='w-12 h-12 bg-green-300 rounded flex items-center justify-center'>
                                                        <p className='text-3xl font-medium'>S</p>
                                                    </div>
                                                    <div className='w-auto h-12 flex flex-col   relative left-2 '>
                                                        <h2 className='text-xl font-medium'>{item.name}</h2>
                                                        <p className='text-sm text-gray-400 font-medium'>{item.createdDate}</p>


                                                    </div>
                                                </div>
                                                <div className='w-24 h-12 flex justify-end items-center    '>
                                                    <div className='w-9 h-9 hover:bg-gray-100 rounded-md flex items-center justify-center relative right-4'>
                                                        <div className='w-5  h-full  flex justify-between items-center '>
                                                            <div className='w-1 h-1 bg-black rounded-full'></div>
                                                            <div className='w-1 h-1 bg-black rounded-full'></div>
                                                            <div className='w-1 h-1 bg-black rounded-full'></div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                            {filteredTables.map((item) => (
                                <div>
                                    <Link href={`/home/${params.id}/workspace/${params.name}/table/${item.id}`}>

                                        <div key={item.id} className='w-72 h-card bg-white rounded-md shadow-table  flex items-center justify-between m-2 pl-2 '>
                                            <div className='w-auto h-auto flex items-center'>


                                                <div className='w-12 h-12 bg-sky-300 rounded flex items-center justify-center'>
                                                    <p className='text-3xl font-medium'>T</p>
                                                </div>
                                                <div className='w-auto h-12 flex flex-col   relative left-2 '>
                                                    <h2 className='text-xl font-medium'>{item.name}</h2>
                                                    <p className='text-sm text-gray-400 font-medium'>{item.createdDate}</p>


                                                </div>
                                            </div>
                                            <div className='w-24 h-12 flex justify-end items-center    '>
                                                <div className='w-9 h-9 hover:bg-gray-100 rounded-md flex items-center justify-center relative right-4'>
                                                    <div className='w-5  h-full  flex justify-between items-center '>
                                                        <div className='w-1 h-1 bg-black rounded-full'></div>
                                                        <div className='w-1 h-1 bg-black rounded-full'></div>
                                                        <div className='w-1 h-1 bg-black rounded-full'></div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className='w-full h-5/6 flex items-center justify-center'>
                            <p className='text-4xl text-gray-400 font-medium'>Don't find tables</p>
                        </div>

                    )
                }



            </div>






        </div>
    )
}

export default Workspace;






