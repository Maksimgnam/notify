import Reminder from '@/app/components/Reminder/Reminder'
import React from 'react';
import { FC } from 'react';
interface ReminderProps {
    params: { id: string, name: string, reminderId:string}
}

const page:FC<ReminderProps> = ({params}) => {
    return (
        <div className='w-full h-full' ><Reminder params={params}  /></div>
    )
}

export default page