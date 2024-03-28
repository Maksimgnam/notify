'use client'
import React, { useState } from 'react'

const page = () => {
    const currentDate = new Date();
    const [workspaceData, setWorkspaceData] = useState({
        name: '',
        description: '',
        type: 'single',
        priority: 'low',
        createdDate: `${currentDate.getDate()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear().toString().padStart(2, '0')}`,

    })

    const Submit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/create-workspace', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(workspaceData),
            });

            const result = await response.json();
            console.log(result);

            setWorkspaceData({
                name: '',
                description: '',
                type: 'single',
                priority: 'low',
                createdDate: `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`,
            });


        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };
    const inputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setWorkspaceData({
            ...workspaceData,
            [name]: value,
        });
    };
    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setWorkspaceData({
            ...workspaceData,
            [name]: value,
        });
    };

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <form onSubmit={Submit} className='w-1/5 h-3/6  flex flex-col justify-around '>
                <div className='w-full h-auto flex'>
                    <div className='w-8 h-8 bg-slate-200 rounded flex items-center justify-center'>
                        <p className='text-md font-medium'>W</p>
                    </div>
                    <h3 className='text-xl font-medium  pl-2 relative top-1 '>Create Workspace</h3>

                </div>

                <input id='name' name='name' value={workspaceData.name} onChange={inputChange} className='w-11/12 h-12 text-lg font-mono placeholder:text-gray-400 border rounded-md outline-none pl-1' type="text" placeholder='Name' />
                <div className='w-8/12 h-12 flex justify-between '>
                    <select name="type" id="type" value={workspaceData.type} onChange={selectChange} className='w-20 h-10 text-center font-medium bg-slate-100  rounded outline-none '>
                        <option value="single">Single</option>
                        <option value="team">Team</option>

                    </select>
                    <select name="priority" id="priority" value={workspaceData.priority} onChange={selectChange} className='w-28 h-10 text-center font-medium bg-slate-100  rounded outline-none '>


                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="important">Important</option>


                    </select>
                </div>

                <textarea id='description' name='description' value={workspaceData.description} onChange={inputChange} className='w-11/12 h-28 text-lg font-mono placeholder:text-gray-400 border-2 rounded-md outline-none pl-1 resize-none' placeholder='Description' />
                <button type='submit' className='w-72 h-12 bg-slate-200 rounded'>
                    <p className='text-xl font-medium'>Create</p>
                </button>
            </form>
        </div>
    )
}

export default page;
