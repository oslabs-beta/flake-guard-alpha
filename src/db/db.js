import 'dotenv/config';
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URI;
const sql = postgres(connectionString);

export default sql;
