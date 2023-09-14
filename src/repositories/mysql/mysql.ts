import mysql from 'mysql2/promise';
import config from "./config";

async function getConnection() {
    return mysql.createConnection(config.db);
}

async function query(sql: string) {
    const connection = await getConnection();
    return queryWithConnection(connection, sql);
}

async function queryWithConnection(conn: mysql.Connection, query: string) {
    const [results,] = await conn.execute(query) 
    return results;
}
async function queryWithConnectionAndValues(conn: mysql.Connection, query: string, values:any) {
    const [results,] = await conn.execute(query, values);
    return results;
}

export { query, getConnection, queryWithConnection, queryWithConnectionAndValues };