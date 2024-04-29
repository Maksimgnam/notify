import React, { FC, useState } from 'react'
import Task from '../Task/Task';
import { start } from 'repl';
import createTask from '../CeateTask/createTask';
import CreateTask from '../CeateTask/createTask';

interface ColumnProps {
    date: string,




}
const Column: FC<ColumnProps> = ({ date }) => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState<string>('')
    return (
        <div className='w-auto h-full    '>
            <div className='w-column h-10  flex items-center p-3 '>
                <h2 className='text-lg font-medium'>{date} </h2>
               

            </div>
            <div className='w-column h-auto flex  pt-1 pl-3 '>
                <div className='w-9/12 h-1px bg-gray-200 rounded-xl'></div>
            </div>

            <div className='w-column  h-auto flex flex-col items-center justify-center'>
                {/* <CreateTask /> */}
                <Task />



            </div>
        </div>
    )
}

export default Column