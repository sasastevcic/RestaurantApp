export class Menu {
  _id: number;
  restaurants: number;
  items: MenuItem[]

  constructor(obj?: any) {
    this._id = obj && obj._id || null;
    this.restaurants = obj && obj.restaurants || null;
    this.items = obj && obj.items.map(elem => { return new MenuItem(elem); }) || [];
  }
}

class MenuItem {
  name: string;
  price: number;

  constructor(obj?: any) {
    this.name = obj && obj.name || '';
    this.price = obj && obj.price || 0;
  }
}