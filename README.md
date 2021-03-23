# Work Day Scheduler

Objective was to create a simple daily scheduling application that is responsive, data persistent, and color dynamic based on past, present, and future timeblocks in relation to the current time within a 9a - 5p schedule. Data is saved to local storage on a click event allowing for data persistence. Timeblocks in the past are color coded gray, while the current hour timeblock is color coded red. Futute timeblocks are color coded green.

# HTML
html structure contains simple use of input fields for notes/schedule and buttons to save data. Current date is displayed at the top of the page. Scheduler is based on a 9a - 5p day.

# CSS
Bootstrap form control styling was used to format the layout of the application with hour of the workday on the left, an input container in the middle, and a save button on the right side

# Javascript
*Upon clicking save, user's notes are saved to local storage
*If timeblock is in the past, change the css of input box to gray
*if timeblock is in the present, change the css of input box to red
*if timeblock is in the future, change the css of input box to green
*Moment.js was implemented for date handling. The current date is displayed at the top of the application. Dynamic color coding of the timeblocks was implemented using Moment.js library

![daily_scheduler](/daily_scheduler.jpg)

# Link to live Application

https://dtoomey156.github.io/daily-scheduler/

# Repository 

https://github.com/dtoomey156/daily-scheduler

