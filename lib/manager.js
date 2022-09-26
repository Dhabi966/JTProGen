// Requiring Employee constructor 
const Employee = require('./employee');

// Extending employee constructor to manager
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // Calling Parent (employee) constructor 
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

     // Overriding employee role to manager
     getRole () {
        return 'Manager';
    }
}

// What will be exported  
module.exports = Manager; 