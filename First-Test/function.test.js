const {sum,duplicateObject, modulus, sayHelloTo,addProduct} = require('./function')

test('should sum two numbers',()=>{
  expect(sum(2,2)).toBe(4)
  expect(sum(50,4)).toBe(54)
})

test('should return the absolute value of a number',()=>{
  expect(modulus(4)).toBe(4)
  expect(modulus(-5)).toBe(5)
})

test('should say hello to someone',()=>{
  expect(sayHelloTo()).toMatch(/^Hello, .+\!$/)
})

test('should duplicate an object',()=>{
  const obj = {species:'Cat' , color:'Black'}

  const clone = duplicateObject(obj)

  expect(clone).toStrictEqual(obj)
})


test('should add product to cart', () => {
  const cart = []

  addProduct('notebook', cart)
  addProduct('blue pen', cart)
  addProduct('red pen', cart)

  expect(cart).toContain('notebook')
  expect(cart).toContain('blue pen')
  expect(cart).not.toContain('pencil')
})