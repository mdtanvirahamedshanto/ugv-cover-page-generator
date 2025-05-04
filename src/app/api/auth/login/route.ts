import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/db';
import User from '@/models/User';

// login route
export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        const client = await clientPromise;
        const db = client.db();
        const user = await db.collection('users').findOne({ email });
        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        const isPasswordValid = await hash(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
        }
        return NextResponse.json(user);
    } catch (error) {
        console.log("Error logging in:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}