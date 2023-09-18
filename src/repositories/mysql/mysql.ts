import mysql from 'mysql2/promise';
import config from "./config";

async function getConnection() {
    return mysql.createConnection(config.db);
}

async function query(query: string) {
    const conn = await getConnection();
    return queryWithConnection(conn, query);
}

async function queryWithValues(query: string, values:any) {
    const conn = await getConnection();
    const [results,] = await conn.execute(query, values);
    return results;
}

async function queryWithConnection(conn: mysql.Connection, query: string) {
    const [results,] = await conn.execute(query) 
    return results;
}
async function queryWithConnectionAndValues(conn: mysql.Connection, query: string, values:any) {
    const [results,] = await conn.execute(query, values);
    return results;
}

export { getConnection, query, queryWithValues, queryWithConnection, queryWithConnectionAndValues };