import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <div className='w-full h-16 flex justify-between pl-8 pr-8 '>
            <div className='w-28 h-full flex items-center justify-between'>
                <div className='w-8 h-8 bg-black rounded-md flex items-center justify-center '>
                    <p className='text-xl text-white font-medium '>N</p>
                </div>
                <p className='text-2xl font-medium'>Notify</p>
            </div>
            <div className='w-52 h-full flex  items-center justify-between '>
                <Link href="/registration">
                    <button className='w-24 h-10 text-md font-mono text-white bg-stone-700 rounded-md'>sign up</button>
                </Link>
                <Link href="/registration/login">
                    <button className='w-24 h-10  text-md font-mono text-white bg-stone-700 rounded-md'>log in</button>
                </Link>


            </div>
        </div>
    )
}

export default Header