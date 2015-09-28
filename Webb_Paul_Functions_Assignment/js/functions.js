/*
Paul Webb
SDI Section 1
Functions Assignment
9-27-15
 */

//Asking the user for the length of their box.
var boxLength = prompt("We are trying to calculate the volume of a box. \nPlease enter the height of the box.")

//Asking the user for the width of their box
var boxWidth = prompt("Please enter the width of the box.")

//Asking the user for the height of their box
var boxHeight = prompt("Please enter the height of the box.")

//Calling the function
var boxVolume = calcVolume(boxLength, boxWidth, boxHeight)

//Sending the calculated volume to the console.
console.log(boxVolume)

//Alerting the user with the volume of their box.
alert("The volume of your box is " + boxVolume + ".")

//Function for calculating volume.
function calcVolume(length, width, height){ // parameters for the calculation.
    var volume = length * width * height;  // calculation for volume.
    return volume; //returning the function.
}



