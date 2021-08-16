const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('Rutherford', 8675312, 'bossman@corpy.com', '555-BOSS-MAN');

    expect(manager.name).toBe('Rutherford');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});