function Intern(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
};

Intern.prototype.getName = function() {
    return {
        name: this.name
    };
};

Intern.prototype.getId = function() {
    return {
        id: this.id
    };
};

Intern.prototype.getEmail = function() {
    return {
        email: this.email
    };
};

Intern.prototype.getRole = function() {
    return 'Intern';
};

module.exports = Intern;