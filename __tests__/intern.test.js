// Using constructor 
const Intern = require('../lib/intern');

// Creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('James', 52, 'James@gmail.com', 'BYU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// Getting School
test('gets employee school', () => {
    const intern = new Intern('James', 52, 'James@gmail.com', 'BYU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Getting Role 
test('gets role of employee', () => {
    const intern = new Intern('James', 52, 'James@gmail.com', 'BYU');

    expect(intern.getRole()).toEqual('Intern');
}); 