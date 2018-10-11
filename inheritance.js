// NOTE:  Story: As a programmer, I can make a car.
// Hint: Create a class called Car, and create a variable called myCar which contains an object of class Car.
// Story: As a programmer, I can tell how many wheels a car has; default is four.
// Story: As a programmer, I can make a Tesla car.
// Hint: Create an variable called myTesla which is of class Tesla which inherits from class Car.
// Story: As a programmer, I can make a Tata car.
// Story: As a programmer, I can make a Toyota car.
// Story: As a programmer, I can tell which model year a vehicle is from. Model years never change.
// Hint: Make model year part of the initialization.
// Story: As a programmer, I can turn on and off the lights on a given Car.
// Hint: Create method(s) to allow programmer to turn lights on and off. Which class are the methods in?
// Story: As a programmer, I can determine if the lights are on or off. Lights start in the off position.
// Story: As a programmer, I can signal left and right. Turn signals starts off.
// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 km/h.
// Story: As a programmer, I can speed my Teslas up by 10 per acceleration.
// Story: As a programmer, I can speed my Tatas up by 2 per acceleration.
// Story: As a programmer, I can speed my Toyotas up by 7 per acceleration.
// Story: As a programmer, I can slow my Teslas down by 7 per braking.
// Story: As a programmer, I can slow my Tatas down by 1.25 per braking.
// Story: As a programmer, I can slow my Toyotas down by 5 per braking.
// Story: As a programmer, I can call upon a car to tell me all it's information.
// Hint: Implement carInfo method on one or more classes. You can call a super class's carInfo with super.
// Story: As a programmer, I can keep a collection of two of each kind of vehicle, all from different years.
// Hint: Create two of each vehicles, all from different model years, and put them into an Array.
// Story: As a programmer, I can sort my collection of cars based on model year.
//
// Story: As a programmer, I can sort my collection of cars based on model.
// Hint: Sort based on class name.
// Story: As a programmer, I can sort my collection of cars based on model and then year.


class Car {
	constructor(modYear, make, color, wheels = 4) {
		this.wheels = wheels
		this.modelYear = modYear
		this.lightsOn = false
		this.signal = "off"
		this.speed = 0
		this.color = color
		this.make = make
	}

	toggleLights() {
		this.lightsOn = !this.lightsOn
	}

	signalSwitch(direction) {
		if 	(direction === "right")	{
	 		this.signal = "right"
		} else if (direction === "left") {
			this.signal = "left"
		} else {
			this.signal = "off"
		}
	}

	getInfo() {
		return `This is a ${this.color} ${this.modelYear} ${this.make} with ${this.wheels} wheels. Whose current speed is ${this.speed}.`
	}
}


class Tesla extends Car {
	constructor(modYear, color, wheels) {
		super(modYear, "Tesla", color, wheels)
		this.wheels = wheels
	}

	accelerateCar() {
		this.speed+=10
	}

	brakeCar() {
		this.speed-=7
	}

}


class Tata extends Car {
	constructor(modYear, color) {
		super(modYear, "Tata", color)

	}
	accelerateCar() {
		this.speed+=2
	}

	brakeCar() {
		this.speed-=1.25
	}
}

class Toyota extends Car {
	constructor(modYear, color) {
		super(modYear, "Toyota", color)
	}
	accelerateCar() {
		this.speed+=7
	}

	brakeCar() {
		this.speed-=5
	}
}

// let myCar = new Car(2013)
// console.log(myCar);

let teslaCar = new Tesla(2011, "white", 5)
teslaCar.toggleLights()
teslaCar.signalSwitch("left")
teslaCar.accelerateCar()
teslaCar.accelerateCar()
teslaCar.brakeCar()
// console.log(teslaCar.getInfo());
// console.log(teslaCar);

let teslaCar2 = new Tesla(2001, "black", 5)
// console.log(teslaCar2.getInfo());


let tataCar = new Tata(2007, "blue")

tataCar.toggleLights()
tataCar.signalSwitch("right")
tataCar.accelerateCar()
tataCar.brakeCar()
// console.log(tataCar.getInfo());
// console.log(tataCar);

let tataCar2 = new Tata(2017, "red")
// console.log(tataCar2.getInfo());


let toyotaCar = new Toyota(1999, "green")
toyotaCar.signalSwitch("left")
toyotaCar.accelerateCar()
toyotaCar.brakeCar()
// console.log(toyotaCar.getInfo());
// console.log(toyotaCar);

let toyotaCar2 = new Toyota(2009, "purple")
// console.log(toyotaCar2.getInfo());

// test version

// garage.sort();
// console.log(garage)
let garage = [toyotaCar, toyotaCar2, teslaCar, teslaCar2, tataCar, tataCar2]

// function compareYear (a, b) {
// 	let comparison = 0;
// 	if (a.modelYear > b.modelYear) {
// 		comparison = 1;
// 	} else if (a.modelYear < b.modelYear) {
// 		comparison = -1;
// 	}
// 	return comparison;
// }

// garage.sort(compareYear);


// this would be the same
garage.sort((a,b) =>  a.modelYear > b.modelYear);


// function compareMake (a, b) {
//
// 	let comparison = 0;
// 	if (a.make > b.make) {
// 		comparison = 1;
// 	} else if (a.make < b.make) {
// 		comparison = -1;
// 	}
// 	return comparison;
// }
// console.log(garage.sort(compareMake));

console.log(garage.sort((a,b) => a.make > b.make), "VIA ARROW FUNCTION");
















// // NOTE: class Garage {
// 	constructor() {
// 		this.cars = []
// 	}
//
// 	addCar() {
//
