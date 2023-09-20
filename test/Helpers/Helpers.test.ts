import { isNotEmptyArray } from "../../src/utils/helper";

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
    })
});
