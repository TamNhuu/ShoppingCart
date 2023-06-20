export class Product {
  public id: number;
  public name: string;
  public description: string;
  public thumbnail: string;
  public price: number;
  public quantity: number;

  constructor(
    id: number,
    name: string,
    description: string,
    thumbnail: string,
    price: number,
    quantity: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.thumbnail = thumbnail;
    this.price = price;
    this.quantity = quantity;
  }
}
