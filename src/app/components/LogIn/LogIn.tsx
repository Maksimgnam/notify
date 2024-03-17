"use client"
import React from 'react'
import { useState } from 'react';
import { signInWithEmailAndPassword, Auth, UserCredential, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { auth } from '../../../app/firebase/config';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LogIn = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter()

    const LogIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential: UserCredential) => {
                console.log(userCredential);
                router.push('/home')




            })
            .catch((error) => {
                console.log(error);
            });
    }
    const GoogleLogIn = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const res = signInWithPopup(auth, provider)
            if ((await res).user) {
                router.push('/home')
            } else {
                console.error('Google sign-in failed');
            }

        } catch (error) {
            console.error(error);
            alert('An error occurred during Google sign-in. Please try again later.');
        }

    }
    const FacebookLogIn = async () => {
        try {
            const provider = new FacebookAuthProvider();
            const res = signInWithPopup(auth, provider)
            if ((await res).user) {
                router.push('/home')
            } else {
                console.error('Google sign-in failed');
            }

        } catch (error) {
            console.error(error);
            alert('An error occurred during Google sign-in. Please try again later.');
        }

    }




    return (
        <div className='w-80 h-login  rounded-xl border-2 border-bg-gray-100 flex flex-col items-center justify-around pt-2'>
            <h3 className='text-2xl font-semibold'> Notify <span className='font-medium'>Log in</span> </h3>
            <div className='w-11/12 h-44 flex flex-col items-center justify-between'>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='w-full h-12 bg-slate-100 placeholder:text-lg   rounded-md border-2 border-gray-300 pl-1.5 outline-none  ' />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' className='w-full h-12 bg-slate-100 placeholder:text-lg   rounded-md  border-2 border-gray-300 pl-1.5 outline-none  ' />
                <button onClick={LogIn} className='w-10/12 h-12 bg-black rounded-md flex items-center justify-center'>
                    <p className='text-xl text-white font-medium '>Log in</p>
                </button>
            </div>

            <div className='w-28 h-6 flex justify-between'>
                <Link href="/registration"><p className='text-gray-500'>Sign up</p></Link>
                <Link href="/registration/login"><p className='text-gray-500'>Log in</p></Link>
            </div>
            <p className='text-xl text-black font-medium '>Or</p>
            <div className='w-full h-32 flex flex-col items-center justify-between'>
                <button onClick={GoogleLogIn} className='w-11/12 h-14 rounded-lg  bg-white flex items-center justify-center'>
                    <div className='w-11/12 h-9 flex items-center justify-center '>
                        <img className='w-9 h-9' src="https://cdn-teams-slug.flaticon.com/google.jpg" alt="" />
                        <p className='text-lg relative '>Continue with Google</p>
                    </div>
                </button>
                <button onClick={FacebookLogIn} className='w-11/12 h-14 rounded-lg  bg-white flex items-center justify-center'>
                    <div className='w-11/12 h-9 flex items-center justify-center '>
                        <img className='w-7 h-7' src="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png" alt="" />
                        <p className='text-lg relative left-1 '>Continue with Facebook</p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default LogIn