const Engineer = require('../lib/Engineer.js')

test('Can create new Engineer instance',()=>{
    const e = new Engineer();
    expect(typeof(e)).toBe('object')
})
test('Can set a name',()=>{
    const name = 'Mario';
    const e = new Engineer(name);
    expect(e.name).toBe(name)
});
test('Can set id', ()=>{
    const value = 100;
    const e = new Engineer('Mario',value)
    expect(e.id).toBe(value)
});
test('Can set email', ()=>{
    const email = 'email';
    const e = new Engineer('Mario',100, email)
    expect(e.email).toBe(email)
});
test('Can set github', ()=>{
    const github = 'github';
    const e = new Engineer('Mario',100,'email',github)
    expect(e.github).toBe(github)
})