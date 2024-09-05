// Car class definition
class Car {
    constructor(name) {
        this.name = name; // Set the name of the car
        this.speed = 0; // Initialize the speed to 0
    }

    // Method to accelerate the car
    accelerate() {
        this.speed += 10;
        this.displayStatus();
    }

    // Method to brake the car
    brake() {
        if (this.speed >= 10) {
            this.speed -= 10;
        } else {
            this.speed = 0;
        }
        this.displayStatus();
    }

    // Method to display the current status of the car
    displayStatus() {
        const carDiv = document.getElementById(this.name);
        carDiv.innerHTML = `${this.name} is going ${this.speed} km/h`;
    }
}

// Create an array to hold car objects
let cars = [];

// Function to create a new car
function createCar() {
    const carName = document.getElementById('carName').value;
    if (carName) {
        // Create a new car object
        const newCar = new Car(carName);
        cars.push(newCar);

        // Add the car to the HTML
        const carDiv = document.createElement('div');
        carDiv.setAttribute('id', carName);
        carDiv.innerHTML = `${carName} is created.`;
        document.getElementById('car-container').appendChild(carDiv);

        // Create control buttons for the car
        const accelerateButton = document.createElement('button');
        accelerateButton.innerHTML = 'Accelerate';
        accelerateButton.onclick = () => newCar.accelerate();
        document.getElementById('car-container').appendChild(accelerateButton);

        const brakeButton = document.createElement('button');
        brakeButton.innerHTML = 'Brake';
        brakeButton.onclick = () => newCar.brake();
        document.getElementById('car-container').appendChild(brakeButton);

        // Clear the input field
        document.getElementById('carName').value = '';
    } else {
        alert('Please enter a car name');
    }
}
