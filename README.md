# Description: Work Day Scheduler

This web application stores event information according to the time of day, from 9am - 5pm. 

# Link to Application and Repository

https://juliekim23.github.io/Challenge5 
https://github.com/juliekim23/Challenge5 

# Acknowledgments
day.js library was utilised. https://day.js.org/ 



# Screenshot

![Calendar App](/Assets/Screenshot%202023-06-28%20at%209.30.09%20pm.png?raw=true "Calendar App")


User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

Acceptance Criteria

GIVEN I am using a daily planner to create a schedule

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
- java and day.js

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
- use key - value pairs

WHEN I refresh the page
THEN the saved events persist
- how?


//WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
WHEN I click into a timeblock
THEN I can enter an event
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
- day.js
