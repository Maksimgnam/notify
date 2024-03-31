import React, { FC } from 'react'
interface HeaderProps {
    date: any,
    searchTable: string,
    setSearchTable: React.Dispatch<React.SetStateAction<string>>;
}
const Header: FC<HeaderProps> = ({ date, searchTable, setSearchTable }) => {
    return (
        <div className='w-full h-14 flex items-center justify-between '>


            <div className='w-40 h-9 flex justify-around pl-3'>
                <div className='w-9 h-9 bg-slate-100 rounded-md flex items-center justify-center'>
                    <img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/512/826/826165.png" alt="" />
                </div>
                <div className=' w-auto h-9 flex items-center '>


                    <p className='text-lg  font-mono'>{date}</p>
                </div>


            </div>
            <div className='w-2/6 h-10  flex items-center'>
                <input value={searchTable} onChange={(e) => setSearchTable(e.target.value)} type="text" placeholder='Search...' className='w-3/5 h-10 border-2 border-gray-200  rounded-md pl-1 outline-none' />
                <button className='w-12 h-10 bg-slate-200 rounded-sm flex items-center justify-center relative right-4 '>
                    <img className='w-6 h-6' src="https://cdn-icons-png.freepik.com/256/711/711319.png" alt="" />
                </button>
            </div>
            <div className='w-1/6  h-full flex items-center justify-between '>
                <div className='w-36 h-10  flex justify-end'>
                    <div className='w-10 h-10 bg-slate-100 rounded relative right-2'></div>
                    <div className='w-10 h-10 bg-slate-100 rounded'></div>
                </div>
                <div className='w-9 h-9 hover:bg-gray-200 rounded-md flex items-center justify-center relative right-6'>
                    <div className='w-5  h-full  flex justify-between items-center '>
                        <div className='w-1 h-1 bg-black rounded-full'></div>
                        <div className='w-1 h-1 bg-black rounded-full'></div>
                        <div className='w-1 h-1 bg-black rounded-full'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header