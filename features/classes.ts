class Vehicle {
  //color: string;
  constructor(private color: string) {
    //this.color = color;
  }

  private drive(): void {
    console.log("chugga chugga");
  }

  honk(): void {
    console.log("beep");
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

class Car extends Vehicle {
  constructor(color: string, private wheel: number) {
    super(color);
  }
  trunk(): void {
    console.log("open");
  }
}

const vehicle = new Vehicle("blue");
vehicle.startDrivingProcess();
vehicle.honk();

const car = new Car("black", 4);
car.trunk();
car.startDrivingProcess();
