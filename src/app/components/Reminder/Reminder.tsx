'use client'
import React, { FC, useState, useEffect } from 'react'
import ReminderHeader from './ReminderHeader/ReminderHeader'
import DoneReminds from './DoneReminds/DoneReminds'
import Remind from './Remind/Remind';
import { title } from 'process';
interface ReminderProps {
    params: { id: string, name: string, reminderId:string}
}


interface ReminderData{
    name: string,
    createdDate: string
}
interface RemindData{
    id:string,
    name: string,
    time:string,
    date:string,
    
}


const Reminder:FC<ReminderProps> = ({ params }) => {
    const [reminder, setReminder] = useState<ReminderData | null>(null);
    const [reminds, setReminds] = useState<RemindData[]>([])
    const [searchName, setSeachName] = useState<string>('')
    const title  = reminder?.name

    const filteredReminds = reminds.filter(item =>
        item.name.toLocaleLowerCase().includes(searchName.toLowerCase())
    )

    useEffect(() => {
        const fetchReminder = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/reminders/${params.name}/${params.reminderId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: ReminderData = await response.json();
                setReminder(data);
            } catch (err) {
                console.error('Error fetching workspace:', err);

            }
        };
        const fetchReminds = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/reminds/${params.name}/${params.reminderId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: RemindData[] = await response.json();
                setReminds(data);
            } catch (err) {
                console.error('Error fetching workspace:', err);
    
            }
        };

    fetchReminder();
    fetchReminds();



    }, []);
    return (
        <div className='w-full h-full flex'>

            <div className='w-10/12 h-full'>
               
                <ReminderHeader params={params} title={title} searchName={searchName} setSearchName={setSeachName} />
                <div className='w-full h-1px bg-slate-200'></div>


                {
                reminds.length > 0 ?(
                    <div>
                           {
                    filteredReminds.length > 0 ? (
                        <div className='w-full h-auto flex flex-wrap pl-5 '>
                        {filteredReminds.map((item)=>(
                            <Remind key={item.id} name={item.name} />
                   
                        ))}
                    </div>
                    ):(
                        <div className='w-full h-container flex items-center justify-center   '>
                            <p className='text-3xl font-medium'>Not found reminds</p>
                        </div>
                    )
                }
                    </div>
                ):(
                    <div className='w-full h-container flex items-center justify-center   '>
                    <p className='text-3xl font-medium'>No created reminds</p>
                </div>

                )

                }
             
             

            </div>
            <div className='w-1px h-full bg-slate-200'></div>
            <DoneReminds />
        
        </div>
    )
}

export default Reminder