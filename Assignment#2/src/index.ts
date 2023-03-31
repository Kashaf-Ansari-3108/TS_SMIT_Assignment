// Vehicle class
abstract class Vehicle {
  constructor(
    private _make: string,
    private _model: string,
    private _year: number,
    private _rented: boolean
  ) {}

  // Accessor Methods (getters)
  get make(): string {
    return this._make;
  }
  get model(): string {
    return this._model;
  }
  get year(): number {
    return this._year;
  }
  get rented(): boolean {
    return this._rented;
  }

  // Mutator Methods (setters)
  set make(makeVal: string) {
    if (!makeVal) {
      throw new Error("Make cannot be empty .. !");
    }
    this._make = makeVal;
  }
  set model(modelVal: string) {
    if (!modelVal) {
      throw new Error("Model cannot be empty .. !");
    }
    this._model = modelVal;
  }
  set year(yearVal: number) {
    if (!yearVal) {
      throw new Error("Year cannot be empty .. !");
    }
    this._year = yearVal;
  }
  set rented(rentedVal: boolean) {
    if (rentedVal == null) {
      throw new Error("Rented value cannot be empty.");
    }
    this._rented = rentedVal;
  }

  // Abstract Method
  abstract rentalRate(): number;

  // Rent Method
  rent() {
    if (this.rented) {
      console.log("This vehicle is already rented.");
    } else {
      this.rented = true;
      console.log("This vehicle has been rented.");
    }
  }

  // Return Method
  return() {
    if (this.rented) {
      this.rented = false;
      console.log("This vehicle has been returned.");
    } else {
      console.log("This vehicle has not been rented.");
    }
  }
}

// Car subclass
class Car extends Vehicle {
  constructor(
    make: string,
    model: string,
    year: number,
    rented: boolean,
    private _mileAge: number,
    private _seatingCapacity: number
  ) {
    super(make, model, year, rented);
  }

  // Accessor Methods (getters)
  get mileAge(): number {
    return this._mileAge;
  }
  get seatingCapacity(): number {
    return this._seatingCapacity;
  }

  // Mutator Methods (setters)
  set mileAge(mileAgeVal: number) {
    if (!mileAgeVal) {
      throw new Error("Mileage cannot be empty .. !");
    }
    this._mileAge = mileAgeVal;
  }
  set seatingCapacity(seatingCapacityVal: number) {
    if (!seatingCapacityVal) {
      throw new Error("Model cannot be empty .. !");
    }
    this._seatingCapacity = seatingCapacityVal;
  }

  // Abstract Method
  rentalRate() {
    return 50; // rental rate for a car is $50 per day
  }
}

// Truck subclass
class Truck extends Vehicle {
  constructor(
    make: string,
    model: string,
    year: number,
    rented: boolean,
    private _payloadCapacity: number,
    private _towingCapacity: number
  ) {
    super(make, model, year, rented);
  }

  // Accessor Methods (getters)
  get payloadCapacity(): number {
    return this._payloadCapacity;
  }
  get towingCapacity(): number {
    return this._towingCapacity;
  }

  // Mutator Methods (setters)
  set payloadCapacity(payloadCapacityVal: number) {
    if (!payloadCapacityVal) {
      throw new Error("Mileage cannot be empty .. !");
    }
    this._payloadCapacity = payloadCapacityVal;
  }
  set towingCapacity(towingCapacityVal: number) {
    if (!towingCapacityVal) {
      throw new Error("Model cannot be empty .. !");
    }
    this._towingCapacity = towingCapacityVal;
  }

  // Abstract Method
  rentalRate() {
    return 100; // rental rate for a truck is $100 per day
  }
}

// Motorcycle subclass
class Motorcycle extends Vehicle {
  constructor(
    make: string,
    model: string,
    year: number,
    rented: boolean,
    private _engineDisplacement: number,
    private _fuelEfficiency: number
  ) {
    super(make, model, year, rented);
  }

  // Accessor Methods (getters)
  get engineDisplacement(): number {
    return this._engineDisplacement;
  }
  get fuelEfficiency(): number {
    return this._fuelEfficiency;
  }

  // Mutator Methods (setters)
  set engineDisplacement(engineDisplacementVal: number) {
    if (!engineDisplacementVal) {
      throw new Error("Mileage cannot be empty .. !");
    }
    this._engineDisplacement = engineDisplacementVal;
  }
  set fuelEfficiency(fuelEfficiencyVal: number) {
    if (!fuelEfficiencyVal) {
      throw new Error("Model cannot be empty .. !");
    }
    this._fuelEfficiency = fuelEfficiencyVal;
  }

  // Abstract Method
  rentalRate() {
    return 25; // rental rate for a motorcycle is $25 per day
  }
}

// Creating instances of each type of vehicle
const car1 = new Car("Honda", "Civic", 2021, false, 15000, 5);
const truck1 = new Truck("Ford", "F-150", 2022, false, 3000, 10000);
const motorcycle1 = new Motorcycle(
  "Harley Davidson",
  "Road King",
  2020,
  false,
  1600,
  35
);

// Testing rent() and return() methods
car1.rent(); // should display "This vehicle has been rented."
car1.rent(); // should display "This vehicle is already rented."
car1.return(); // should display "This vehicle has been returned."
car1.return(); // should display "This vehicle has not been rented."
truck1.rent(); // should display "This vehicle has been rented."
truck1.rent(); // should display "This vehicle is already rented."
truck1.return(); // should display "This vehicle has been returned."
truck1.return(); // should display "This vehicle has not been rented."
motorcycle1.rent(); // should display "This vehicle has been rented."
motorcycle1.rent(); // should display "This vehicle is already rented."
motorcycle1.return(); // should display "This vehicle has been returned."
motorcycle1.return(); // should display "This vehicle has not been rented."
