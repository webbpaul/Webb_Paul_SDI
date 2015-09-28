/*
Paul Webb
SDI Section 1
Functions Assignment
9-27-15
 */

var boxLength = prompt("We are trying to calculate the volume of a box. \nPlease enter the height of the box.")


var boxWidth = prompt("Please enter the width of the box.")


var boxHeight = prompt("Please enter the height of the box.")


var boxVolume = calcVolume(boxLength, boxWidth, boxHeight)


console.log(boxVolume)
alert("The volume of your box is " + boxVolume + ".")


function calcVolume(l,w, h){
    var volume = l * w * h;
    return volume;
}



