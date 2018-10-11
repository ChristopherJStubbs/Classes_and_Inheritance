class Animal {
	constructor(type, sound, description, num) {
		this.type = type
		this.sound = sound
		this.description = description
		this.numberOwned = num
		this.wagsPerSecond = 0
	}
	tailWags() {
		this.wagsPerSecond += 3
	}
}
let Dog = new Animal("Dog", "bark", "mans best friend", 4)

let Cat = new Animal("Cat", "Meow", "Satan", 0)

let Sheep = new Animal("Sheep", "Baahhhh", "Lamb chops", 1)

Dog.tailWags()
Dog.tailWags()
Dog.tailWags()

Cat.tailWags()

Sheep.tailWags()
Sheep.tailWags()
Sheep.tailWags()
Sheep.tailWags()
Sheep.tailWags()
console.log(Cat);
console.log(Dog);
console.log(Sheep);
