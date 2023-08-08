const {sum,duplicateObject} = require('./function')

test('should sum two numbers',()=>{
  expect(sum(2,2)).toBe(4)
  expect(sum(50,4)).toBe(54)
})

test('Should be an object',()=>{
  const obj = {
  name:'Luan',
  age:23
  }
  const str = 'Olá'
  expect(duplicateObject(obj))
})