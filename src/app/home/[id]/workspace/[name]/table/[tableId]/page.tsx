import Table from '@/app/components/Table/Table'
import React, { FC } from 'react'
interface TableParams {
    params: {id:any, tableId: any, name: string }


}
const page: FC<TableParams> = ({ params }) => {
    return (
        <div className='w-full h-full'><Table params={params} /></div>
    )
}

export default page