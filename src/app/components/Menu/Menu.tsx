"use client"
import React, { FC, useState, useEffect } from 'react';
import { auth } from '../../../app/firebase/config';
import { useRouter } from 'next/navigation';
interface User {
    uid: any,
    displayName: string,
    email: string
}
interface MenuProps {
    menuWidth: number,
    isHide: boolean,
    isArrow: boolean,
    widthChange: () => void
}
const Menu: FC<MenuProps> = ({ menuWidth, isHide, isArrow, widthChange }) => {

    const [user, setUser] = useState<User | null>(null);
    const name = user?.displayName.slice(0, 1);
    const router = useRouter()
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {

                const newUser: User = {
                    uid: authUser.uid,
                    displayName: authUser.displayName || '', // Handle cases where displayName is null
                    email: authUser.email || '', // Handle cases where email is null
                };
                setUser(newUser);
            } else {
                setUser(null);
            }
            console.log(authUser)
        });

        return () => unsubscribe();

    }, []);

    const LogOut = async () => {
        try {
            await auth.signOut();
            router.push('/registration/login')

        } catch (error) {
            console.error('Error signing out:', error);

        }

    }


    return (
        <div style={{ width: `${menuWidth}%` }} className='h-full  bg-menu flex flex-col items-center  '>
            {
                isArrow && (
                    <div className='w-full h-11 flex items-center justify-center '>
                        <div onClick={widthChange} className='w-10 h-10 hover:bg-gray-200 rounded flex items-center justify-center'>
                            <p className='text-xl font-mono'>{`>`}</p>
                        </div>
                    </div>
                )
            }


            <div className='w-full h-14  flex items-center justify-between p-1.5'>
                {
                    user === null ? (
                        <div className='w-auto h-full flex items-center justify-between'>
                            <div className='w-10 h-10 bg-slate-200 rounded-md flex items-center justify-center '>

                            </div>

                            <div className='w-40 h-8 flex flex-col justify-between pl-1  '>
                                <div className='w-7/12 h-3 bg-slate-200 rounded '></div>
                                <div className='w-11/12 h-3 bg-slate-200 rounded '></div>

                            </div>

                        </div>

                    ) : (
                        <div className='w-auto h-full flex items-center'>


                            <div className='w-10 h-10 bg-red-400 rounded-md flex items-center justify-center '>
                                <p className='text-xl font-medium'> {name}</p>
                            </div>
                            {
                                isHide && (
                                    <div className='w-auto h-11 flex flex-col pl-2 '>
                                        <p className='text-xl font-medium'>{user && user.displayName}</p>
                                        <p className='text-sm font-mono relative bottom-1'>{user && user.email}</p>

                                    </div>
                                )

                            }


                        </div >
                    )
                }

                {
                    isHide && (
                        <div onClick={widthChange} className='w-8 h-8 hover:bg-gray-200 rounded flex items-center justify-center'>
                            <p className='text-lg font-mono'>{`<`}</p>
                        </div>
                    )
                }





            </div >
            <div className='w-full h-48  pl-2 '>
                <div className='w-11/12 h-11 flex items-center'>
                    <div className='w-9 h-9 rounded-md flex items-center justify-center '>
                        <img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/512/82/82121.png" alt="" />
                    </div>
                    <h2 className='text-xl font-mono relative '>Tools</h2>
                </div>
                <div className='w-full h-36  flex flex-col justify-between pt-1 '>
                    <div className='w-11/12 h-12 rounded-md'></div>
                    <div className='w-11/12 h-12  rounded-md'></div>
                    <div className='w-11/12 h-12  rounded-md'></div>
                </div>
            </div>
            <div className='w-full h-2/6  pl-2 pt-2 '>
                <div className='w-11/12 h-11 flex items-center'>
                    <div className='w-9 h-9  rounded-md flex items-center justify-center '>
                        <img className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/512/301/301811.png" alt="" />
                    </div>
                    <h2 className='text-xl font-mono relative left-1'>Workspaces</h2>
                </div>

                <div className='w-full h-40  flex flex-col justify-between pt-1 '>
                    <div className='w-11/12 h-12  rounded-md'></div>
                    <div className='w-11/12 h-12  rounded-md'></div>
                    <div className='w-11/12 h-12 0 rounded-md'></div>
                </div>
            </div>
            <div className='w-full h-1/6 flex items-end pl-3 '>
                <button onClick={LogOut} className='w-9/12 h-12 bg-gray-200 rounded-md flex items-center pl-3'>
                    <img className='w-7 h-6' src="https://cdn-icons-png.flaticon.com/512/126/126467.png" alt="" />
                    <p className='text-xl font-mono relative left-1'>Log out</p>
                </button>
            </div>



        </div >
    )
}

export default Menu