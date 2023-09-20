import { RowDataPacket } from "mysql2"


function emptyOrRow(rows: RowDataPacket) {
    if (!rows) {
        return []
    }
    return rows
}

function isNotEmptyArray<T>(arr: T[]): Boolean {
    return arr.length > 0;
}

function formatDateToYYYYMMDD(date: Date) {
    var month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export {
    emptyOrRow,
    isNotEmptyArray,
    formatDateToYYYYMMDD as formatDate
}