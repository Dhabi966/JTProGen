// Requiring employee constructor 
const Employee = require('./employee');

// Extending employee constructor to engineer
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // Calling Parent (employee) constructor 
        super (name, id, email);

        this.github = github; 
    }

    // Returning github from input 
    getGithub () {
        return this.github;
    }

     // Overriding employee role to engineer
    getRole () {
        return 'Engineer';
    }
}

// What will be exported
module.exports = Engineer; 