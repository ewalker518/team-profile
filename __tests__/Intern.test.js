const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Chauncey', 8675311, 'underling@corpy.com', 'Crazy Go Nuts University');

    expect(intern.name).toBe('Chauncey');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});