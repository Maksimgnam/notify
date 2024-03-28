import React, { FC } from 'react'


interface TableHeaderProps {
    date: string,
    name: string
}
const TableHeader: FC<TableHeaderProps> = ({ name, date }) => {
    return (
        <div className='w-full h-14  flex items-center '>
            <div className='w-1/5 h-11 flex pl-2'>
                <div className='w-9 h-9 bg-yellow-300 rounded flex items-center justify-center'>
                    <p className='text-xl font-medium'>T</p>

                </div>
                <div className='w-auto h-10 flex items-center pl-1'>
                    <p className='text-xl font-medium'>{name}</p>
                </div>
            </div>


        </div>
    )
}

export default TableHeader