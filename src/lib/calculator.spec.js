const { sum } = require('./calculator')

it('should sum 2 and 2 and the result must be 4', () => {
    //expect tobe false but received true
    expect(sum(2, 2)).toBe(4);
})
it('should sum 2  and 2 even one of them is a string and the result must be 4 ', () => {
    expect(sum('2', '2')).toBe(4);
});

it('should throw an error if what is provided to the method cannot be numeric', () => {
    expect(() => {
        sum('', '2')
    }).toThrowError();

    expect(() => {
        sum([2.2])
    }).toThrowError();

    expect(() => {
        sum({})
    }).toThrowError();

    expect(() => {
        sum({ "numeric": 2, "numeric2": 2 })
    }).toThrowError();

    expect(() => {
        sum()
    }).toThrowError();
});