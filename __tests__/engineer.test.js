// Using constructor 
const Engineer = require('../lib/Engineer');

// Creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('James', 52, 'James@gmail.com', 'Dhabi966');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// Getting Github
test('gets engineer github value', () => {
    const engineer = new Engineer('James', 52, 'James@gmail.com', 'Dhabi966');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Getting Roles
test('gets role of employee', () => {
    const engineer = new Engineer('James', 52, 'James@gmail.com', 'Dhabi966');

    expect(engineer.getRole()).toEqual('Engineer');
});