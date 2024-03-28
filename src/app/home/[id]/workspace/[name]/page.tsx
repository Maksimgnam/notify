

import Workspace from '@/app/components/Workspace/Workspace';
import React, { FC } from 'react'
interface WorkspaceParams {
    params: { id: any, name: string, description: string, createdDate: string }
}
const page: FC<WorkspaceParams> = ({ params }) => {


    return (
        <div className='w-full h-full'>
            <Workspace params={params} />
        </div>
    )
}

export default page;
// 'use client'
// import React, { useState, useEffect } from 'react';

// interface Workspace {
//     id: string;
//     name: string;
//     description: string;
//     // Add other workspace properties as needed
// }
// interface WorkspaceParams {
//     params: { id: any, name: string }
// }
// const WorkspaceDetail: React.FC<WorkspaceParams> = ({ params }) => {
//     const [workspace, setWorkspace] = useState<Workspace | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchWorkspace = async () => {
//             try {
//                 const response = await fetch(`http://localhost:8000/api/workspaces/${params.name}`);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data: Workspace = await response.json();
//                 setWorkspace(data);
//                 setLoading(false);
//             } catch (err) {
//                 console.error('Error fetching workspace:', err);
//                 setError('Error fetching workspace');
//                 setLoading(false);
//             }
//         };

//         fetchWorkspace();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     if (!workspace) {
//         return <div>Workspace not found</div>;
//     }

//     return (
//         <div>
//             <h1>Workspace Detail</h1>
//             <h2>{workspace.name}</h2>
//             <p>ID: {workspace.id}</p>
//             <p>Description: {workspace.description}</p>
//         </div>
//     );
// };

// export default WorkspaceDetail;



















// 'use client'
// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// async function getWorkspace(workspaceName: string) {
//     const res = await fetch(`http://localhost:8000/api/workspaces/${workspaceName}`);
//     const result = await res.json();
//     return result;
// }

// interface WorkspaceProps {
//     params: {

//         workspaceName: string;
//     };
// }

// const Workspace: React.FC<WorkspaceProps> = ({ params: { workspaceName } }) => {
//     const [workspace, setWorkspace] = useState<any>(null);

//     useEffect(() => {
//         const fetchWorkspaceData = async () => {
//             const fetchedWorkspace = await getWorkspace(workspaceName);
//             setWorkspace(fetchedWorkspace);
//         };

//         fetchWorkspaceData();
//     }, [workspaceName]);

//     return (
//         <div className='w-full h-full'>
//             <div className='w-full h-14 flex items-center justify-center'>
//                 <h2 className='text-2xl font-medium'>Workspace Information</h2>
//             </div>
//             <div className='w-full h-5/6 '>
//                 {workspace && (
//                     <div className='flex'>
//                         <div key={workspace.id} className="w-post h-auto border-2 border-slate-100 rounded-xl m-6 mt-1 p-2 relative left-2 ">
//                             <h2 className="text-2xl font-medium">{workspace.name}</h2>
//                             <div className="w-full h-auto p-1">
//                                 <p className="text-xl">{workspace.description}</p>
//                             </div>
//                             <div className="w-full h-10 flex justify-end pl-2">
//                                 <button className="w-24 h-10 bg-sky-400 rounded-2xl relative right-3 ">
//                                     <Link href="/">
//                                         <p className="text-md font-medium text-white">Назад</p>
//                                     </Link>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Workspace;




// "use client"
// import React, { FC } from 'react';

// import { useState, useEffect } from 'react';


// async function getWorkspace(id: any) {
//     const res = await fetch(`http://localhost:8000/api/workspaces/${id}`);
//     const result = await res.json();
//     console.log(result)

//     return result;

// }
// interface WorkspaceProps {
//     params: {
//         id: any;
//     };
// }

// const page: FC<WorkspaceProps> = ({ params: { id } }) => {
//     const [workspace, setWorkspace] = useState<any>(null);
//     useEffect(() => {
//         const fetchPost = async () => {
//             const fetchedPost = await getWorkspace((id));
//             setWorkspace(fetchedPost);
//         };

//         fetchPost();
//     }, [id]);
//     return (

//         <div>
//             dd
//             {workspace && (
//                 <div className='flex'>

//                     <div key={workspace.id} className="w-post h-auto border-2 border-slate-100 rounded-xl m-6 mt-1 p-2 relative left-2 ">
//                         <h2 className="text-2xl font-medium">{workspace.name}</h2>
//                         <div className="w-full h-auto p-1">
//                             <p className=" text-xl"></p>
//                         </div>
//                         <div className="w-full h-10 flex justify-end pl-2">

//                             <button className="w-24 h-10 bg-sky-400 rounded-2xl  relative right-3 ">




//                             </button>
//                         </div>





//                     </div>

//                 </div>
//             )}
//         </div>
//     )
// }

// export default page