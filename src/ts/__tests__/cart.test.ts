import Cart from "../service/Cart";
import Movie from "../domain/Movie";

const cart = new Cart;
const item1 = new Movie(
  1,
  'Мстители',
  1000,
  'The Avengers',
  'IMAX',
  2012,
  'США',
  '«Avengers Assemble!»',
  ['фантастика', 'боевик', 'фэнтези', 'приключения'],
  137
)
const item2 = new Movie(
  2,
  'Мстители',
  1500,
  'The Avengers',
  'IMAX',
  2012,
  'США',
  '«Avengers Assemble!»',
  ['фантастика', 'боевик', 'фэнтези', 'приключения'],
  137
)

cart.add(item1)
cart.add(item2)

test('get total sum', () => {
  expect(cart.totalSum).toBe(2500)
})

test('get total sum with discount', () => {
  expect(cart.totalSumDiscounted(500)).toBe(2000)
})

test('remove item', () => {
  cart.removeItem(1)
  expect(cart.items.length).toBe(1)
})
