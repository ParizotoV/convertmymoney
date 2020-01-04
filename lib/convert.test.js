const convert = require('./convert')

test('converts 4 and quantidade 4', () => {
  expect(convert.convert(4,4)).toBe(16)
})

test('converts 0 and quantidade 4', () => {
  expect(convert.convert(0,4)).toBe(0)
})
test('toMoney converts float', () => {
  expect(convert.toMoney(2)).toBe('2.00')
})