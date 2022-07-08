import { queryString, parse } from "./queryString";

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

describe("Query string to object", () => {
  it("should convert a query string to object", () => {
    const qs = "name=Guilherme&profession=developer";
    expect(parse(qs)).toEqual({
      name: "Guilherme",
      profession: "developer",
    });
  });
  it("should convert a query string of a single key-value pair to object", () => {
    const qs = "name=Guilherme";
    expect(parse(qs)).toEqual({
      name: "Guilherme",
    });
  });
  it("should convert a query string to an object taking care of comma separated values", () => {
    const qs = "name=Guilherme&abilities=JS,TDD";
    expect(parse(qs)).toEqual({
      name: "Guilherme",
      abilities: ["JS", "TDD"],
    });
  });
});
