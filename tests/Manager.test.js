const Manager = require('../lib/Manager.js')

test('Can create new Manager instance',()=>{
    const e = new Manager();
    expect(typeof(e)).toBe('object')
})
test('Can set a name',()=>{
    const name = 'Mario';
    const e = new Manager(name);
    expect(e.name).toBe(name)
});
test('Can set id', ()=>{
    const value = 100;
    const e = new Manager('Mario',value)
    expect(e.id).toBe(value)
});
test('Can set email', ()=>{
    const email = 'email';
    const e = new Manager('Mario',100, email)
    expect(e.email).toBe(email)
});
test('Can set officeNumber', ()=>{
    const officeNumber = 'officeNumber';
    const e = new Manager('Mario',100,'email',officeNumber)
    expect(e.officeNumber).toBe(officeNumber)
})