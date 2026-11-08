import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { pool } from "@/lib/db";

export async function POST(request:Request) { try
    {const
        {name,email,password}=await request.json();
        if (
            typeof name !== "string" || typeof email !== "string" ||
            typeof password !== "string" || !name.trim()||
            !email.trim()||
            password.length <8 ) {
                return NextResponse.json({message:"Enter a name, valid email, and password with at least 8 characters."},{status:400});
            }
            const normalizedEmail = email.trim().toLowerCase();
            const existingUser = await pool.query("SELECT id FROM users WHERE email = $1", [normalizedEmail]);

            if 
            (existingUser.rows.length>0) {
                return NextResponse.json({message:"An account with this email already exists."}, {status:409});
            }

            const passwordHash = await bcrypt.hash(password,12);

            const result = await pool.query(`INSERT INTO users (name,email,password_hash) VALUES ($1,$2,$3) RETURNING id, name,email,created_at`,[name.trim(),normalizedEmail,passwordHash]);
        return NextResponse.json({message: "Account created successfully.",user:result.rows[0],},{status:201});
    }catch(error) {console.error("Signup error:",error);
        return NextResponse.json({message:"Unable to create account. Please try again."},
            {status:500}
        );
    }}
