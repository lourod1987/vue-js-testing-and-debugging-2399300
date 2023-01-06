import { countriesCollection, johnDoe } from "../utilities";

test ("Check availabkle countries", () => {
    expect(countriesCollection).toContain("Nigeria");
});

test ("Check user info", () => {
    expect(johnDoe).toEqual(expect.objectContaining({
        age: 26,
        occupation: "Accountant",
    }));
});