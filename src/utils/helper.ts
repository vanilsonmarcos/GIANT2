import { RowDataPacket } from "mysql2"


function emptyOrRow(rows: RowDataPacket) {
    if (!rows) {
        return []
    }
    return rows
}

function formatDateToDDMMYYY(current_date: string): string {
    return new Date(current_date).toLocaleDateString("en-GB");
}

function formatDDMMYYYYToMySQLDate(ddmmyyyyDate: string): string {
    const [day, month, year] = ddmmyyyyDate.split("/");
    const mysqlDate = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    return mysqlDate;
}


function isValidDateFormatDDMMYYYY(dateString: string): boolean {
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!datePattern.test(dateString)) {
        return false;
    }

    const [day, month, year] = dateString.split('/').map(Number);

    // Check day, month, and year validity
    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1000 || year > 9999) {
        return false;
    }

    return true;
}

function addYearToDate(dateString:String) {
    const [day, month, year] = dateString.split('/').map(Number);
    const originalDate = new Date(year, month - 1, day); // Month is zero-indexed

    const newYear = year + 1;
    const newDate = new Date(newYear, month - 1, day);

    const newDay = newDate.getDate();
    const newMonth = newDate.getMonth() + 1; // Adjust for zero-based month index
    const newDateString = `${newDay}/${newMonth}/${newYear}`;
    return newDateString;
}


function isNotEmptyArray<T>(arr: T[]): Boolean {
    return arr.length > 0; 
}

export { 
    emptyOrRow, 
    formatDateToDDMMYYY, 
    formatDDMMYYYYToMySQLDate, 
    isValidDateFormatDDMMYYYY, 
    addYearToDate,
    isNotEmptyArray
}