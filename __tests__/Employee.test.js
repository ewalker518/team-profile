const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Eustace', 8675309, 'eustace@corpy.com');

    expect(employee.name).toBe('Eustace');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});