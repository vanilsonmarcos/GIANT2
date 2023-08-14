import { RowDataPacket } from "mysql2"


function emptyOrRow(rows:RowDataPacket) {
    if (!rows) {
        return []
    }
    return rows
}

function formatDateToDDMMYYY(current_date: string ): string {
   return new Date(current_date).toLocaleDateString("en-GB");
}

function formatDDMMYYYYToMySQLDate(ddmmyyyyDate: string): string {
    const [day, month, year] = ddmmyyyyDate.split("/");
    const mysqlDate = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    return mysqlDate;
  }




export { emptyOrRow, formatDateToDDMMYYY, formatDDMMYYYYToMySQLDate}