'use client'
import React, { FC, useState } from 'react';
import { useRouter } from 'next/navigation';


interface Params {
    params: { id: string, name: string }
}

const page: FC<Params> = ({ params }) => {
    const currentDate = new Date();
    const router = useRouter()
    const [reminderData, setReminderData] = useState({
        name: '',
        createdDate: `${currentDate.getDate()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear().toString().padStart(2, '0')}`,

    })

    const Submit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:8000/api/create-reminder/${params.name}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reminderData),
            });


            const result = await response.json();
            console.log(result);
            router.push(`/home/${params.id}/workspace/${params.name}`)

            setReminderData({
                name: '',
                createdDate: `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`,
            });


        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };
    const inputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setReminderData({
            ...reminderData,
            [name]: value,
        });
    };
    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setReminderData({
            ...reminderData,
            [name]: value,
        });
    };

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <form onSubmit={Submit} className='w-1/5 h-48  flex flex-col justify-around '>
                <div className='w-full h-auto flex'>
                    <div className='w-8 h-8 bg-orange-300 rounded flex items-center justify-center'>
                        <p className='text-md font-medium'>R</p>
                    </div>
                    <h3 className='text-xl font-medium  pl-2 relative top-1 '>Create Reminder</h3>

                </div>

                <input id='name' name='name' value={reminderData.name} onChange={inputChange} className='w-11/12 h-12 text-lg font-mono placeholder:text-gray-400 border rounded-md outline-none pl-1' type="text" placeholder='Name' />

                <button type='submit' className='w-72 h-12 bg-slate-200 rounded'>
                    <p className='text-xl font-medium'>Create</p>
                </button>
            </form>
        </div>
    )
}

export default page;