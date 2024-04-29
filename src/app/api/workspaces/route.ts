import { NextResponse } from 'next/server';
import { db } from '../../../../database/config';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const snapshot = await db.collection('workspaces').get();
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error getting documents: ", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
