const Employee = require('../lib/Employee.js')

test('Can create new Employee instance',()=>{
    const e = new Employee();
    expect(typeof(e)).toBe('object')
})
test('Can set a name',()=>{
    const name = 'Mario';
    const e = new Employee(name);
    expect(e.name).toBe(name)
});
test('Can set id', ()=>{
    const value = 100;
    const e = new Employee('Mario',value)
    expect(e.id).toBe(value)
});
test('Can set email', ()=>{
    const email = 'email';
    const e = new Employee('Mario',100, email)
    expect(e.email).toBe(email)
})