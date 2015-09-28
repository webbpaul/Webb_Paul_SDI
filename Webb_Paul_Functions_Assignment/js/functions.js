/*
Paul Webb
SDI Section 1
Functions Assignment
9-27-15
 */


//console.log what we are doing
console.log("--------Volume of a box--------")

//Asking the user for the length of their box.
var boxLength = prompt("We are trying to calculate the volume of a box. \nPlease enter the height of the box.");

//Asking the user for the width of their box
var boxWidth = prompt("Please enter the width of the box.");

//Asking the user for the height of their box
var boxHeight = prompt("Please enter the height of the box.");

//Calling the function
var boxVolume = calcVolume(boxLength, boxWidth, boxHeight);

//Sending the calculated volume to the console.
console.log(boxVolume)

//Alerting the user with the volume of their box.
alert("The volume of your box is " + boxVolume + ".");

//Function for calculating volume.
function calcVolume(length, width, height){ // parameters for the calculation.
    var volume = length * width * height;  // calculation for volume.
    return volume; //returning the function.
}

//console.log what we are doing
console.log("----------Perimeter of a triangle-----------")

//Asking the user for the length of side 1 of their triangle
var side1 = prompt("Now lets find the perimeter of a trianlgle. \nPlease enter the length of side one of the triangle.");

//Asking the user for the length of side 2 of their triangle.
var side2 = prompt("Please enter the length of side two of the triangle.");

//Asking the user for the length of side 3 of their triangle.
var side3 = prompt("Please enter the length of side three of the triangle.");

//Setting up the anonomous function for the calculation of the perimeter of the triangle.
var calcPerimeter = function(firstSide, secondSide, thirdSide){ //parameters for the calculation/
    var perimeter = Number(firstSide) + Number(secondSide) + Number(thirdSide);  //calculation for perimeter
    return perimeter  //returning the function
}

//calling out the anonomous funtion.
var p = calcPerimeter(side1, side2, side3)
//sending the calculation of the perimeter to the console.
console.log(p)
//Alerting the user with their result.
alert("The perimeter of your trianlge is " + p + ".")




/*
TESTS
entered the number 4 for the boxWidth, boxLength and boxHeight and the result came back as 64.
entered the number 2 for all three sides of the triangle and the result came back as 6.
 */