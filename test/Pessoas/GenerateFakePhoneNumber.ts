import { faker } from "@faker-js/faker";

function generateFakePhoneNumber(): string {
    const countryCode = '+244';
    const areaCode = faker.number.int({ min: 911, max: 999 });
    const firstGroup = faker.number.int({ min: 100, max: 999 });
    const secondGroup = faker.number.int({ min: 100, max: 999 });
    const thirdGroup = faker.number.int({ min: 100, max: 999 });
  
    return `${countryCode} ${areaCode} ${firstGroup} ${secondGroup} ${thirdGroup}`;
}


export default generateFakePhoneNumber;
  