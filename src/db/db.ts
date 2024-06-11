import 'dotenv/config';
import postgres from 'postgres';

const connectionString: string = process.env.DATABASE_URI;
const sql = postgres(connectionString);

export default sql;
