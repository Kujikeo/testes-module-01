export default class Cart {
  items = [];

  getTotal() {
    return 0;
  }

  add(item) {
    this.items.push(item);
  }
}
