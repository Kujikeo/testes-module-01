const { queryString } = require("./queryString");

describe("Object to query String", () => {
  it(" should create  a valid query string when an object is  provided", () => {
    const object = {
      name: "Guilherme",
      profession: "SoftwareEngineer",
    };
    expect(queryString(object)).toBe(
      "name=Guilherme&profession=SoftwareEngineer",
    );
  });
  it("should create a valid  query even when an array is passed as value ", () => {
    const object = {
      name: "Guilherme",
      abilities: ["JS", "TDD"],
    };
    expect(queryString(object)).toBe("name=Guilherme&abilities=JS,TDD");
  });

  it("should throw an error when an object is passed as value", () => {
    const object = {
      name: "Guilherme",
      abilities: { first: "JS", second: "TDD" },
    };
    expect(() => {
      queryString(object);
    }).toThrowError();
  });
});

describe("Query string to object", () => {});
