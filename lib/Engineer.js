// Constructor function for the engineer role
function Engineer(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
};

Engineer.prototype.getName = function() {
    return {
        name: this.name
    };
};

Engineer.prototype.getId = function() {
    return {
        id: this.id
    };
};

Engineer.prototype.getEmail = function() {
    return {
        email: this.email
    };
};

Engineer.prototype.getRole = function() {
    return 'Engineer';
};

module.exports = Engineer;