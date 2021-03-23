
// print current date to CurrentDay id paragraph container

//document.getElementById("currentDay").innerHTML = formatAMPM();

//function formatAMPM() {
    //var date = new Date();
    //var hours = date.getHours();
    //var days = date.getDay();
    //var minutes = date.getMinutes();
    //var ampm = hours >=12 ? 'pm' : 'am';
    //hours = hours %12;
    //hours = hours ? hours : 12;
    //minutes = minutes <10 ? '0'+minutes : minutes;
    //var strTime = date + ' ' + hours + ':' + minutes + ' ' + ampm;
    //return strTime
//}

//commented out javascript date function above. below is Moment.js

$(document).ready(function () {
    var date = moment().format("dddd MMMM Do");
    var nowHour = moment().format("HH");
    $("#currentDay").text(date);
})

//set up timeblock variables
var timeBlock9a = document.getElementById("9am");
var timeBlock10a = document.getElementById("10am");
var timeBlock11a = document.getElementById("11am");
var timeBlock12pm = document.getElementById("12pm");
var timeBlock1pm = document.getElementById("1pm");
var timeBlock2pm = document.getElementById("2pm");
var timeBlock3pm = document.getElementById("3pm");
var timeBlock4pm = document.getElementById("4pm");
var timeBlock5pm = document.getElementById("5pm");
var Button9 = document.getElementById("9btn")
var Button10 = document.getElementById("10btn")
var Button11 = document.getElementById("11btn")
var Button12 = document.getElementById("12btn")
var Button1 = document.getElementById("1btn")
var Button2 = document.getElementById("2btn")
var Button3 = document.getElementById("3btn")
var Button4 = document.getElementById("4btn")
var Button5 = document.getElementById("5btn")


//clicking save button commits to local storage

Button9.onclick = function() {
    var nine = timeBlock9a.value;
    localStorage.setItem("9a", timeBlock9a)
    console.log(nine)
}
Button10.onclick = function() {
    var ten = timeBlock10a.value;
    localStorage.setItem("10a", timeBlock10a)
    console.log(ten);
}

Button11.onclick = function() {
    var eleven = timeBlock11a.value;
    localStorage.setItem("11a", timeBlock11a)
    console.log(eleven);
}

Button12.onclick = function() {
    var twelve = timeBlock12pm.value;
    localStorage.setItem("12p", timeBlock12pm)
    console.log(twelve);
}
    
Button1.onclick = function() {
    var one = timeBlock1pm.value;
    localStorage.setItem("1p", timeBlock1pm)
    console.log(one);
}

Button2.onclick = function() {
    var two = timeBlock2pm.value;
    localStorage.setItem("2p", timeBlock2pm)
    console.log(two);
}
    
Button3.onclick = function() {
    var three = timeBlock3pm.value;
    localStorage.setItem("3p", timeBlock3pm)
    console.log(three);
}

Button4.onclick = function() {
    var four = timeBlock4pm.value;
    localStorage.setItem("4p", timeBlock4pm)
    console.log(four);
}

Button5.onclick = function() {
    var five = timeBlock5pm.value;
    localStorage.setItem("5p", timeBlock5pm)
    console.log(five);
}
    
    
    



