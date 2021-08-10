//Process where one class acquires properties from another class

class Car{

    setName(name) {
        this.name = name
    }

    startEngine() {
        console.log(`Engine Started for ${this.name}`)
    }

    stopEngine() {
        console.log(`Engine stopped for ${this.name}`)
    }
}

class Toyota extends Car{
    topSpeed(speed) {
        console.log(`Top speed for ${this.name} is ${speed}`)
    }
}

let myCar = new Toyota();
myCar.setName("Camry")
myCar.startEngine()
myCar.stopEngine()
myCar.topSpeed(200)