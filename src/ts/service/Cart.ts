import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items]; 
  }

  get totalSum(): number {
    return this._items.reduce((acc: number, item: Buyable) =>
    acc + item.price, 0)
  }

  totalSumDiscounted(discount: number): number {
    return (this._items.reduce((acc: number, item: Buyable) =>
    acc + item.price, 0)) - discount
  }

  removeItem(id: number): void {
    for(let i = 0; i < this._items.length; i++) {
      if (this._items[i].id === id) {
        this._items.splice(i, 1)
      }
    }
  }
}
