import { addNumbers, countriesCollection, johnDoe } from "../utilities";

describe ("Unit tests", () => {
    describe ("Testing strings", () => {
        test ("Find Substring", () => {
            expect("It's raining cats and dogs").toMatch(/dogs/);
        });
    });
    describe ("Testing numeric values", () => {
        test ("Check the addition of numbers", () => {
            expect(addNumbers(4, 5)).toEqual(9);
        });
        
        test ("Adding floating point numbers", () => {
            expect(addNumbers(0.4, 0.5)).toBeCloseTo(0.9);
        });
    });
    describe ("Testing arrays and objects", () => {
        test ("Check availabkle countries", () => {
            expect(countriesCollection).toContain("Nigeria");
        });
        
        test ("Check user info", () => {
            expect(johnDoe).toEqual(expect.objectContaining({
                age: 26,
                occupation: "Accountant",
            }));
        });
    });
});