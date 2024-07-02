import dotenv from 'dotenv';
import postgres from 'postgres';

dotenv.config();
const connectionString = process.env.DATABASE_URI;
const sql = postgres(connectionString);

export default sql;
