/*
 Paul Webb
 SDI Section 1
 Expressions Assignment
 9/11/15
 */

//alert("Test to see if connected");

//Using prompt to ask the user for their name
var name = prompt("We are trying to figure out how often you do your favorite activity. \nPlease enter your name.");

/*Using the variable "name" to alert the user and say hello.
alert("Hello " +name+ ".");
*/

//Asking the user what their favorite activity is
var favoriteActivity = prompt("Hello " +name+ ", what is your favorite activity?");

//Asking the user how many times a month they do this activity.
var howOftenWeekly = prompt("How many times a week do you do your favorite activity " +name+ "?");

//console.log the user's favorite activity.  (Checked to see if the favorite activity was logged.)
console.log(howOftenWeekly);

//set the month variable to 4
var month = 4

//calculating how many times a month the user does their favorite activity
var howOftenMonthly = howOftenWeekly * month


//Alerted the user how many times they do their favorite activity
alert(name+ ", you do your favorite activity " +howOftenMonthly+ " times a month.");

//logged how many times the use does their favorite activity a month.
console.log(howOftenMonthly)

//setting the variable "year" to 12
var year = 12

//Asking the user how much they will be doing their hobby in a certain amount of years.
var inHowManyYears = prompt(name+ ", would you like to know how many times you will do your favorite activity in a certain amount of years? \nEnter the amount of years you would like to know.");

//logging the users amount of years they would like to know
console.log(inHowManyYears)

//using the variable "howMuchYearly" for the calculation on the certain amount of years the user wants to know.
var howMuchYearly = howOftenWeekly * month * year

//Giving the user their final result
alert(name+ ", in " +inHowManyYears+ " years you will have done your favorite activity " +howMuchYearly+ " times.")

//logging the users final resuly.
console.log(howMuchYearly)

