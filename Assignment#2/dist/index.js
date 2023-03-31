"use strict";
// Vehicle class
class Vehicle {
    constructor(_make, _model, _year, _rented) {
        this._make = _make;
        this._model = _model;
        this._year = _year;
        this._rented = _rented;
    }
    // Accessor Methods (getters)
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rented() {
        return this._rented;
    }
    // Mutator Methods (setters)
    set make(makeVal) {
        if (!makeVal) {
            throw new Error("Make cannot be empty .. !");
        }
        this._make = makeVal;
    }
    set model(modelVal) {
        if (!modelVal) {
            throw new Error("Model cannot be empty .. !");
        }
        this._model = modelVal;
    }
    set year(yearVal) {
        if (!yearVal) {
            throw new Error("Year cannot be empty .. !");
        }
        this._year = yearVal;
    }
    set rented(rentedVal) {
        if (rentedVal == null) {
            throw new Error("Rented value cannot be empty.");
        }
        this._rented = rentedVal;
    }
    // Rent Method
    rent() {
        if (this.rented) {
            console.log("This vehicle is already rented.");
        }
        else {
            this.rented = true;
            console.log("This vehicle has been rented.");
        }
    }
    // Return Method
    return() {
        if (this.rented) {
            this.rented = false;
            console.log("This vehicle has been returned.");
        }
        else {
            console.log("This vehicle has not been rented.");
        }
    }
}
// Car subclass
class Car extends Vehicle {
    constructor(make, model, year, rented, _mileAge, _seatingCapacity) {
        super(make, model, year, rented);
        this._mileAge = _mileAge;
        this._seatingCapacity = _seatingCapacity;
    }
    // Accessor Methods (getters)
    get mileAge() {
        return this._mileAge;
    }
    get seatingCapacity() {
        return this._seatingCapacity;
    }
    // Mutator Methods (setters)
    set mileAge(mileAgeVal) {
        if (!mileAgeVal) {
            throw new Error("Mileage cannot be empty .. !");
        }
        this._mileAge = mileAgeVal;
    }
    set seatingCapacity(seatingCapacityVal) {
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
    constructor(make, model, year, rented, _payloadCapacity, _towingCapacity) {
        super(make, model, year, rented);
        this._payloadCapacity = _payloadCapacity;
        this._towingCapacity = _towingCapacity;
    }
    // Accessor Methods (getters)
    get payloadCapacity() {
        return this._payloadCapacity;
    }
    get towingCapacity() {
        return this._towingCapacity;
    }
    // Mutator Methods (setters)
    set payloadCapacity(payloadCapacityVal) {
        if (!payloadCapacityVal) {
            throw new Error("Mileage cannot be empty .. !");
        }
        this._payloadCapacity = payloadCapacityVal;
    }
    set towingCapacity(towingCapacityVal) {
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
    constructor(make, model, year, rented, _engineDisplacement, _fuelEfficiency) {
        super(make, model, year, rented);
        this._engineDisplacement = _engineDisplacement;
        this._fuelEfficiency = _fuelEfficiency;
    }
    // Accessor Methods (getters)
    get engineDisplacement() {
        return this._engineDisplacement;
    }
    get fuelEfficiency() {
        return this._fuelEfficiency;
    }
    // Mutator Methods (setters)
    set engineDisplacement(engineDisplacementVal) {
        if (!engineDisplacementVal) {
            throw new Error("Mileage cannot be empty .. !");
        }
        this._engineDisplacement = engineDisplacementVal;
    }
    set fuelEfficiency(fuelEfficiencyVal) {
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
const motorcycle1 = new Motorcycle("Harley Davidson", "Road King", 2020, false, 1600, 35);
// Testing rent() and return() methods
console.log("Testing rent() method:");
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
//# sourceMappingURL=index.js.map