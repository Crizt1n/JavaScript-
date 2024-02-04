var car={
    name: "Baleno",
    model: "Match Black",
    manufacturer: "Maruti Suzuki",
    price: "10 lakh"
}

// display car name and its manufacturer name

console.log('-----------CAR NAME AND ITS MANUFACTURER-------------');
console.log(`Car Name is ${car.name} \n Manufacturer Name is ${car.manufacturer}`);

// check model key is present in car, if yes then display its value

console.log('-------------MODEL KEY AND ITS VALUE----------------');
"model" in car? console.log(car.model): console.log('Not present');

// add "varient" key to car with value as "manual"

console.log('----------------ADDED VARIENT KEY-------------------');
car.varient=["manual"]
console.log(car);

// insert another value to "varient" key to car with value as " automatic"

console.log('---------------ADDED ANOTHER VARIENT-----------------');
car.varient.push("Automatic")
console.log(car);

// add "colour" key to car with values as "red" , "white","blue"

console.log('----------------COLOR KEY ADDED----------------------');
car.colour=["red","white","blue"]
console.log(car);
