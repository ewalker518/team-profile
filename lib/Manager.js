// Constructor function for the manager role
function Manager(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber
};

Manager.prototype.getName = function() {
    return {
        name: this.name
    };
};

Manager.prototype.getId = function() {
    return {
        id: this.id
    };
};

Manager.prototype.getEmail = function() {
    return {
        email: this.email
    };
};

Manager.prototype.getRole = function() {
    return 'Manager';
};

module.exports = Manager;