const Intern = require('../lib/Intern.js')

test('Can create new Intern instance',()=>{
    const e = new Intern();
    expect(typeof(e)).toBe('object')
})
test('Can set a name',()=>{
    const name = 'Mario';
    const e = new Intern(name);
    expect(e.name).toBe(name)
});
test('Can set id', ()=>{
    const value = 100;
    const e = new Intern('Mario',value)
    expect(e.id).toBe(value)
});
test('Can set email', ()=>{
    const email = 'email';
    const e = new Intern('Mario',100, email)
    expect(e.email).toBe(email)
});
test('Can set school', ()=>{
    const school = 'school';
    const e = new Intern('Mario',100,'email',school)
    expect(e.school).toBe(school)
})