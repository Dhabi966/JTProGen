// Using constructor 
const Employee = require('../lib/employee');

// Creating employee object 
test('creates an employee object', () => {
    const employee = new Employee('James', 52, 'James@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Getting names 
test('gets employee name', () => {
    const employee = new Employee('James', 52, 'James@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// Getting ID 
test('gets employee ID', () => {
    const employee = new Employee('James', 52, 'James@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// Getting Email
test('gets employee email', () => {
    const employee = new Employee('James', 52, 'James@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Getting Role
test('gets role of employee', () => {
    const employee = new Employee('James', 52, 'James@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
}); 

