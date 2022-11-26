'use strict';

// Start by creating an object “perfectDate” and adding the properties “location”, “day”, “duration” with values of your liking

const perfectDate = {
  location: "Maldives",
  day: "Saturday",
  duration: 2
}

// Access the value of the property “location” and log the sentence “The date will be in “ + the location of your date.

console.log("The date will be in " + perfectDate.location);

//Add the following properties to your perfect date object: “activity,” “music,” “romantic" and set some values.

perfectDate.activity = "swimming";
perfectDate.music = "alternative-rock";
perfectDate.romantic = "true";

//check the table
console.table(perfectDate)

//You have decided to change your mind about the music you would like to hear. Change the existing property "music" to a different value. 
perfectDate.music = "pop";
// or perfectDate["music"] = "rock";

//check the table 
console.table(perfectDate)

delete perfectDate.day;

//In hindsight, you don’t mind on which day you would like to have a date. Delete the property “day”

//check the table 
console.table(perfectDate)








