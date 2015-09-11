/*
 Paul Webb
 SDI Section 1
 Expressions Assignment
 9/11/15
 */

//alert("Test to see if connected");

//Using prompt to ask the user for their name
var name = prompt("We are trying to figure out how often you do your favorite activity. \nPlease enter your name.");

//Using the variable "name" to alert the user and say hello.
alert("Hello " +name+ ".");

//Asking the user what their favorite activity is
var favoriteActivity = prompt("What is your favorite activity " +name+ "?");

//Asking the user how many times a month they do this activity.
var howOftenWeekly = prompt("How many times a week do you do your favorite activity?");

//console.log the user's favorite activity.  (Checked to see if the favorite activity was logged.)
console.log(howOftenWeekly);

//set the month variable to 4
var month = 4

//calculating how many times a month the user does their favorite activity
var howOftenMonthly = howOftenWeekly * month

/*
notes: console.log to see if the multiplication worked.

console.log(howOftenMonthly)
    */

alert("You do your favorite activity " +howOftenMonthly+ " times a month.");