// // ------ Задание 1 ------ //
class Worker {
  constructor(name, lastname, rate, days) {
    this.name = name;
    this.lastname = lastname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
}

let worker = new Worker("Иван", "Иванов", 10, 31);

console.log(worker.name);
console.log(worker.lastname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

// // ------ Задание 2 ------ //
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
