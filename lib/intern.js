// Requiring Employee constructor 
const Employee = require('./employee');

// Extending employee constructor to intern
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // Calling Parent (employee) constructor 
        super (name, id, email); 

        this.school = school; 
    }

    // Returning school input 
    getSchool () {
        return this.school;
    }

     // Overriding employee role to intern
     getRole () {
        return 'Intern';
    }
}

// What will be exported  
module.exports = Intern; 