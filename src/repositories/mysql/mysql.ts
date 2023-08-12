import mysql from 'mysql2/prmise';
import config from "./config";
 
async function query(sql, params) {
    const connection = await mysql.createConnection(config.db);
    
    const results = await connection.execute(sql, params);

    return results;
}


export {query};