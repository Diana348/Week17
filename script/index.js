// class Worker {
//   constructor(name, lastname, rate, days) {
//     this.name = name;
//     this.lastname = lastname;
//     this.rate = rate;
//     this.days = days;
//   }
//   getSalary() {
//     return this.rate * this.days;
//   }
// }

// let worker = new Worker("Иван", "Иванов", 10, 31);

// console.log(worker.name);
// console.log(worker.lastname);
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary());

const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image:
      "https://www.mercedes-benz-mena.com/en/passengercars/mercedes-benz-cars/models/e-class/sedan-w213-fl/explore/_jcr_content/notificationboxes/notificationbox/image.MQ6.12.20211013084329.jpeg",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image:
      "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
  },
];

class Transport {
  constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
  }

  getInfo() {
    return `${this.brand} ${this.type}`;
  }

  getPrice() {
    return `${this.price} руб.`;
  }
}

class Car extends Transport {
  constructor(type, price, brand, doors) {
    super(type, price, brand);
    this.doors = doors;
  }
  getDoorsCount() {
    return this.doors;
  }
}

class Bike extends Transport {
  constructor(type, price, brand, maxSpeed) {
    super(type, price, brand);
    this.maxSpeed = maxSpeed;
  }
  getMaxSpeed() {
    return this.maxSpeed;
  }
}

data.forEach((element) => {
  let transport;
  if (element.type == "car") {
    transport = new Car(
      element.type,
      element.price,
      element.brand,
      element.doors
    );
  } else if (element.type == "bike") {
    transport = new Bike(
      element.type,
      element.price,
      element.brand,
      element.maxSpeed
    );
  }
  console.log(`${transport.getInfo()} - цена ${transport.getPrice()}`);
  if (transport instanceof Car) {
    console.log(`Количество дверей - ${transport.getDoorsCount()}`);
  } else if (transport instanceof Bike) {
    console.log(`Максимальная скорость - ${transport.getMaxSpeed()} км/ч.`);
  }
});
