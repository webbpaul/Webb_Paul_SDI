/*
Paul Webb
SDI Section 1
Conditionals Assignment
9/16/15
 */

//Asking for the users name.
var name = prompt("Hello. Let's figure out if you're old enough to enter the concert. \nPlease enter your name.");

//Test to see if user left the prompt blank.
if(name === ""){
    //user left blank.  prompt again.
    name = prompt("Please do not leave blank information. \nPlease enter your name.")
}

//Asking for the users birth year.
var yearBorn = prompt("Hello " +name+ ".  What year were you born?")

if(isNaN(yearBorn)){
    //Making sure the user enters in a number
    yearBorn = prompt("Please only enter numbers here. \nPlease enter the year you were born.")
}

//Setting the variable current year to 2015
var currentYear = 2015;

//Figuring out the users age.
var age= currentYear - yearBorn;

//Putting the users age into the console.
console.log(age);

//Setting the age to enter the concert to 18.
var ageToEnter = 18;

//Setting the age to enter with parent to 16.
var ageWithParent = 16;

//Setting the age to drink at the concert to 21.
var ageToDrink = 21;

