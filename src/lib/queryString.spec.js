const { queryString } = require('./queryString')


describe('Object to query String', () => {
    it(' should create  a valid query string when an object is  provided', () => {
        
        const object = {
            name: 'Guilherme',
            profession: "SoftwareEngineer"
        }
        expect(queryString(object)).toBe('name=Guilherme&profession=SoftwareEngineer');
    });
});

describe('Query string to object', () => {
    
});