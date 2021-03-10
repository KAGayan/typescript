const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

const cart = carMakers[0];
const myCar = carMakers.pop();

carMakers.push(100);

carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});

const importantDates: (string | Date)[] = [new Date()];
importantDates.push(new Date());
importantDates.push("2030-10-20");
