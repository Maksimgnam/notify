import Table from '@/app/components/Table/Table'
import React, { FC } from 'react'
interface TableParams {
    params: { tableId: any, name: string }


}
const page: FC<TableParams> = ({ params }) => {
    return (
        <div><Table params={params} /></div>
    )
}

export default page