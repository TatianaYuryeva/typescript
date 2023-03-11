import Cart from '../service/Cart';
import Movie from '../domain/Movie';

const cart = new Cart;
const item = new Movie(
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

test('add item to cart', () => {
  cart.add(item);
  expect(cart.items.length).toBe(1);
});