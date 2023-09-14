import { jsDateToMysqlDate, formatDDMMYYYYToMySQLDate, formatDateToDDMMYYY, isNotEmptyArray } from "../../src/utils/helper";

describe("it should perform all operations related to heper function", () => {

    it("it should convert date in format DD/MM/YYYY to mysql date YYYY-MM-DD", () => {
        const inputDate = '31/08/2023';
        const expectedOutput = '2023-08-31';
        const formattedDate = formatDDMMYYYYToMySQLDate(inputDate);
        expect(formattedDate).toBe(expectedOutput);
    })

    it('should format a date to DD/MM/YYYY format', () => {
        const inputDate = '2023-08-31'; // Format: YYYY-MM-DD
        const expectedOutput = '31/08/2023';
        const formattedDate = formatDateToDDMMYYY(inputDate);

        expect(formattedDate).toBe(expectedOutput);
    });

    // it('should add a year to the given date', () => {
    //     const inputDate = '31/08/2023';
    //     const expectedOutput = '31/08/2024';
    //     const newDate = addYearToDate(inputDate);

    //     expect(newDate).toBe(expectedOutput);
    // });

    it('should convert a js Date to mysql date type', () => {

        const jsDate = '2023-09-25';
        const result = jsDateToMysqlDate(jsDate);
        expect(result).toBe('2023-09-25');
    });

});

describe('isNotEmptyArray', () => {
    it('should return true for a non-empty array', () => {
        const nonEmptyArray = [1, 2, 3];
        const result = isNotEmptyArray(nonEmptyArray);

        expect(result).toBe(true);
    });

    it('should return false for an empty array', () => {
        const emptyArray: any[] = [];
        const result = isNotEmptyArray(emptyArray);

        expect(result).toBe(false);
    });
});