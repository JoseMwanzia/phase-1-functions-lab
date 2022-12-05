// Code your solution in this file!

const blocksFromHq = 42;
let num1;
let num2;
let amountPayable;

//THE DISTANCE IN BLOCKS.
function distanceFromHqInBlocks (valueInBlocks) {
    num1= Math.abs(valueInBlocks - blocksFromHq);
        return num1;
}
distanceFromHqInBlocks(43);
console.log(num1);

//THE DISTANCE IN FEET.
function distanceFromHqInFeet(valueInBlocks) {
    distanceFromHqInBlocks(valueInBlocks)
    num2 = num1*264;
    return num2;
}
distanceFromHqInFeet(50);
console.log(num2);

//CALCULATE DISTANCE TRAVELLED IN FEET.
function distanceTaveledInFeet(start, destination) {
    let num3 = Math.abs (destination-start)* 264;
    console.log(num3);
    return num3;
}
distanceTaveledInFeet(42, 45);

//CALCULATE FARE PRICES.