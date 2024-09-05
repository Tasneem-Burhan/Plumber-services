'use server';

import { sql } from '@vercel/postgres';
import { z } from "zod";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';

export default function CreateTable() {
    try{
        await sql `
        CREATE TABLE User (
            id INT PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255) UNIQUE KEY,
            password VARCHAR(255),
            role VARCHAR(255)
          );`
    } catch(error) {
        return {
            message: "Database error : failed to create TAble User"
        };
    }
    
} 