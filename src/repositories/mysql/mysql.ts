import mysql from 'mysql2/promise';
import config from "./config";
 
async function query(sql:string) {
    const connection = await mysql.createConnection(config.db);
    
    const [results, ] = await connection.execute(sql);

    return results;
}

export {query};