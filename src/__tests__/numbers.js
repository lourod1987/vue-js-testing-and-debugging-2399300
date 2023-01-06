import { addNumbers } from "../utilities";

test ("Check the addition of numbers", () => {
    expect(addNumbers(4, 5)).toEqual(9);
});

test ("Adding floating point numbers", () => {
    expect(addNumbers(0.4, 0.5)).toBeCloseTo(0.9);
});