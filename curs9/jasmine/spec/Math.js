//This is the test
describe("helloWorld", () => {
    it("returns hello world", () => {
        var actual = yes();
        expect(actual).toBe("hello world");
    });
});

describe("Suma", () => {
    it("return sum 14.2 si 14.3 = 28.5", () => {
        expect(add(14.2, 14.3)).toEqual(28.5);
    });
});