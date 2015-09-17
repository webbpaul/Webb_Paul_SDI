/*
Paul Webb
SDI Section 1
Conditionals Assignment
9/16/15
 */

//Asking for the users name.
var name = prompt("Hello. Let's figure out if you're old enough to enter the concert. \nPlease enter your name.");

//Asking for the users birth year.
var yearBorn = prompt("Hello " +name+ ".  What year were you born?")

//Setting the variable current year to 2015
var currentYear = 2015;

//Figuring out the users age.
var oldEnough= currentYear - yearBorn;

//Putting the users age into the console. 
console.log(oldEnough)