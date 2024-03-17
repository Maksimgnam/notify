
// "use client"
// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { auth } from '../../../app/firebase/config';

// const Registration = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setName(e.target.value);
//     };

//     const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(e.target.value);
//     };

//     const handleSignUp = async () => {
//         try {
//             const res = await createUserWithEmailAndPassword(auth, email, password);
//             if (res && res.user) {
//                 await updateProfile(res.user, { displayName: name });
//                 setEmail('');
//                 setPassword('');
//                 setName('');
//                 alert('Successfully signed up');
//             } else {
//                 console.error('Authentication failed');
//                 alert('Authentication failed. Please check your credentials.');
//             }
//         } catch (error) {
//             console.error(error);
//             alert('An error occurred during sign up. Please try again later.');
//         }
//     };

//     return (
//         <div className='w-80 h-registration   rounded-xl border-2 border-bg-gray-100 flex flex-col items-center justify-around pt-2'>
//             <h3 className='text-2xl font-semibold'> Notify <span className='font-medium'>SignUp</span> </h3>
//             <div className='w-11/12 h-44 flex flex-col items-center justify-between'>
//                 <input value={name} onChange={handleNameChange} type="text" placeholder='Name' className='w-full h-12 bg-slate-100 placeholder:text-lg   rounded-md border-2 border-gray-300 pl-1.5 outline-none  ' />
//                 <input value={password} onChange={handlePasswordChange} type="password" placeholder='Password' className='w-full h-12 bg-slate-100 placeholder:text-lg   rounded-md border-2 border-gray-300 pl-1.5 outline-none  ' />
//                 <input value={email} onChange={handleEmailChange} type="email" placeholder='Email' className='w-full h-12 bg-slate-100 placeholder:text-lg   rounded-md  border-2 border-gray-300 pl-1.5 outline-none  ' />
//                 <button onClick={handleSignUp} className='w-10/12 h-12 bg-black rounded-md flex items-center justify-center'>
//                     <p className='text-xl text-white font-medium '>Sign up</p>
//                 </button>
//             </div>
//             <p className='text-xl text-black font-medium '>Or</p>
//             <div className='w-full h-16 flex justify-center'>
//                 <button className='w-11/12 h-14 rounded-lg  bg-white flex items-center justify-center'>
//                     <div className='w-11/12 h-9 flex items-center justify-center '>
//                         <img className='w-9 h-9' src="https://cdn-teams-slug.flaticon.com/google.jpg" alt="" />
//                         <p className='text-lg relative '>Continue with Google</p>
//                     </div>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Registration;


"use client"
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { auth } from '../../../app/firebase/config';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSignUp = async () => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            if (res && res.user) {
                await updateProfile(res.user, { displayName: name });
                setEmail('');
                setPassword('');
                setName('');
                alert('Successfully signed up');
                const uid = res.user.uid;
                router.push(`/home/${uid}`)
            } else {
                console.error('Authentication failed');
                alert('Authentication failed. Please check your credentials.');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred during sign up. Please try again later.');
        }
    };

    const GoogleSignUp = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const res = signInWithPopup(auth, provider)
            if ((await res).user) {
                const uid = (await res).user.uid;
                router.push(`/home/${uid}`)
            } else {
                console.error('Google sign-in failed');
            }

        } catch (error) {
            console.error(error);
            alert('An error occurred during Google sign-in. Please try again later.');
        }

    }
    const FacebookSignUp = async () => {
        try {
            const provider = new FacebookAuthProvider();
            const res = signInWithPopup(auth, provider)
            if ((await res).user) {
                const uid = (await res).user.uid;
                router.push(`/home/${uid}`)
            } else {
                console.error('Google sign-in failed');
            }

        } catch (error) {
            console.error(error);
            alert('An error occurred during Google sign-in. Please try again later.');
        }

    }

    return (
        <div className='w-80 h-registration   rounded-xl border-2 border-bg-gray-100 flex flex-col items-center justify-around pt-2'>
            <h3 className='text-2xl font-semibold'> Notify <span className='font-medium'>Sign up</span> </h3>
            <div className='w-11/12 h-60 flex flex-col items-center justify-between'>
                <input value={name} onChange={handleNameChange} type="text" placeholder='Name' className='w-full h-12 bg-slate-100 placeholder:text-lg   rounded-md border-2 border-gray-300 pl-1.5 outline-none  ' />
                <input value={password} onChange={handlePasswordChange} type="password" placeholder='Password' className='w-full h-12 bg-slate-100 placeholder:text-lg   rounded-md border-2 border-gray-300 pl-1.5 outline-none  ' />
                <input value={email} onChange={handleEmailChange} type="email" placeholder='Email' className='w-full h-12 bg-slate-100 placeholder:text-lg   rounded-md  border-2 border-gray-300 pl-1.5 outline-none  ' />
                <button onClick={handleSignUp} className='w-10/12 h-12 bg-black rounded-md flex items-center justify-center'>
                    <p className='text-xl text-white font-medium '>Sign up</p>
                </button>
            </div>

            <div className='w-28 h-6 flex justify-between'>
                <Link href="/registration/login"><p className='text-gray-500'>Log in</p></Link>
                <Link href="/registration"><p className='text-gray-500'>Sign up</p></Link>
            </div>

            <p className='text-xl text-black font-medium '>Or</p>
            <div className='w-full h-32 flex flex-col items-center justify-between'>
                <button onClick={GoogleSignUp} className='w-11/12 h-14 rounded-lg  bg-white flex items-center justify-center'>
                    <div className='w-11/12 h-9 flex items-center justify-center '>
                        <img className='w-9 h-9' src="https://cdn-teams-slug.flaticon.com/google.jpg" alt="" />
                        <p className='text-lg relative '>Continue with Google</p>
                    </div>
                </button>
                <button onClick={FacebookSignUp} className='w-11/12 h-14 rounded-lg  bg-white flex items-center justify-center'>
                    <div className='w-11/12 h-9 flex items-center justify-center '>
                        <img className='w-7 h-7' src="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png" alt="" />
                        <p className='text-lg relative left-1 '>Continue with Facebook</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Registration;

