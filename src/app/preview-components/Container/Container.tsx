import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Picture from '../Image/picture.png'


const Container = () => {
    return (
        <div className='w-full h-preview-container flex  flex-wrap justify-center '>

            <div className='w-7/12 h-5/6   relative top-12'>
                <Image src={Picture} fill alt='' />
            </div>
            <div className='w-5/12 h-full flex items-center '>

                <div className='w-11/12 h-4/5 flex flex-col  justify-around'>

                    <div className='w-full'>
                        <h3 className='text-5xl font-mono' >Notify</h3>
                        <p className='text-lg text-gray-600 font-mono pl-1 pt-2'>Way how to improve you rythem of life</p>
                    </div>

                    <div className='w-full h-72 flex flex-col justify-between relative bottom-2'>
                        <div className='w-12/12 h-16 flex items-center '>
                            <div className='w-72 h-14 rounded-md  shadow flex items-center pl-2'>
                                <div className='w-10 h-10 bg-green-100 rounded-md flex items-center justify-center'>
                                    <img className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/512/826/826165.png" alt="" />
                                </div>

                                <p className='text-lg font-medium relative left-2'>Your Time, Your Rules</p>
                            </div>
                            <div className='w-36 h-14 bg-orange-200 rounded-md flex items-center justify-center relative left-4'>
                                <p className='text-2xl  font-mono'>  Happy!</p>
                            </div>

                        </div>
                        <div className='w-9/12 h-16 flex items-center justify-between'>
                            <div className='w-36 h-14 bg-green-200 rounded-md flex items-center justify-center '>
                                <p className='text-2xl  font-mono'>  Nice!</p>
                            </div>
                            <div className='w-72 h-14 rounded-md  shadow flex items-center pl-2'>
                                <div className='w-10 h-10 bg-orange-100 rounded-md flex items-center justify-center'>
                                    <img className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/512/1491/1491200.png" alt="" />
                                </div>

                                <p className='text-lg font-medium relative left-2'>From Chaos to Calm</p>
                            </div>

                        </div>
                        <div className='w-10/12 h-16  flex items-center justify-start'>
                            <div className='w-72 h-14 rounded-md  shadow flex items-center pl-2'>
                                <div className='w-10 h-10 bg-red-100 rounded-md flex items-center justify-center'>
                                    <img className='w-6 h-6 ' src="https://cdn-icons-png.flaticon.com/512/1470/1470893.png" alt="" />
                                </div>

                                <p className='text-lg font-medium relative left-2'> Control Time is Success</p>
                            </div>
                            <div className='w-36 h-14 bg-sky-200 rounded-md flex items-center justify-center relative left-4'>
                                <p className='text-2xl  font-mono'>  Great!</p>
                            </div>
                        </div>
                        <div className='w-9/12 h-16 flex items-center justify-between'>
                            <div className='w-36 h-14 bg-red-200 rounded-md flex items-center justify-center '>
                                <p className='text-2xl  font-mono'>  Cool!</p>

                            </div>
                            <div className='w-72 h-14 rounded-md  shadow flex items-center pl-2'>
                                <div className='w-10 h-10 bg-sky-100 rounded-md flex items-center justify-center'>
                                    <img className='w-6 h-6 ' src="https://cdn-icons-png.flaticon.com/512/2949/2949568.png" alt="" />
                                </div>

                                <p className='text-lg font-medium relative left-2'> Manage Time Wisely</p>
                            </div>
                        </div>

                    </div>
                    <Link href="/registration">
                        <button className='w-60 h-16 bg-black rounded-md'>
                            <p className='text-2xl text-white font-mono '>Get started</p>

                        </button>
                    </Link>


                </div>
            </div>
        </div>
    )
}

export default Container