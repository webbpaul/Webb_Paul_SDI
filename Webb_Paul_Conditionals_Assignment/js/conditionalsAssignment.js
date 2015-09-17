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
//var ageToDrink = 21;

//figuring out if the user can enter into the concert.
//calulating to see if the user can enter the concert
if(age >= ageToEnter){
    //telling the user that they can enter the concert.
    console.log(name + ", you are old enough to enter the concert. Enjoy!")
//calculating to see if the user can enter with a parent.
}else if(age >= ageWithParent && age <=ageToEnter){
    //telling the user that they can enter with a parent.
    console.log(name + ", you can enter but you must be accompanied by a parent. Enjoy the concert!")
//Calculating to see if the user caan enter at all.
}else if(age < ageWithParent) {
    //telling the user thhat they can not enter the concert at all.
    console.log("Sorry " +name + ", you are not old enough to enter the concert. Have a good night!")
}

//making variable to see if the user can drink at the concert
var ageToDrink;
//calulating to see if the user can drink or not
ageToDrink = (age > 21) ? "You are allowed to drink. Enjoy the concert " + name + "!" : "You can not drink."
//letting the use know if they can drink or not.
console.log(ageToDrink);


/*
TESTS
1. Entered in year 1993 which makes me 22. tests confirmed that I can enter the concert and drink.
2. Entered in year 1998 which makes me 17.  Tests confirmed that I was able to enter the concert, but I needed to be with and adult.
I am not able to drink at the concert since I am 17.
3. Entered in year 2001 which makes me 14.  Tests confirms that I can not enter the concert at all.
 */