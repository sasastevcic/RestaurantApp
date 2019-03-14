import { Menu } from "./menu";

export class MenuList {
  count: number;
  results: Menu[];

  constructor(obj?: any) {
    this.count = obj && obj.count || 0;
    this.results = obj && obj.results.map(elem => { return new Menu(elem); }) || [];
  }
}