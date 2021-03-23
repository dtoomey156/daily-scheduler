
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
    var date = moment().format('dddd MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(date);
})

//set up timeblock variables
var timeBlock9a = document.getElementById("9");
var timeBlock10a = document.getElementById("10");
var timeBlock11a = document.getElementById("11");
var timeBlock12pm = document.getElementById("12");
var timeBlock1pm = document.getElementById("13");
var timeBlock2pm = document.getElementById("14");
var timeBlock3pm = document.getElementById("15");
var timeBlock4pm = document.getElementById("16");
var timeBlock5pm = document.getElementById("17");
var Button9 = document.getElementById("9btn")
var Button10 = document.getElementById("10btn")
var Button11 = document.getElementById("11btn")
var Button12 = document.getElementById("12btn")
var Button1 = document.getElementById("1btn")
var Button2 = document.getElementById("2btn")
var Button3 = document.getElementById("3btn")
var Button4 = document.getElementById("4btn")
var Button5 = document.getElementById("5btn")


//clicking save button saves to local storage

Button9.onclick = function() {
    var nine = timeBlock9a.value;
    localStorage.setItem('9a', JSON.stringify(nine));
    console.log(nine)
}
Button10.onclick = function() {
    var ten = timeBlock10a.value;
    localStorage.setItem('10a', JSON.stringify(ten));
    console.log(ten);
}

Button11.onclick = function() {
    var eleven = timeBlock11a.value;
    localStorage.setItem('11a', JSON.stringify(eleven));
    console.log(eleven);
}

Button12.onclick = function() {
    var twelve = timeBlock12pm.value;
    localStorage.setItem('12p', JSON.stringify(twelve));
    console.log(twelve);
}
    
Button1.onclick = function() {
    var one = timeBlock1pm.value;
    localStorage.setItem('1p', JSON.stringify(one));
    console.log(one);
}

Button2.onclick = function() {
    var two = timeBlock2pm.value;
    localStorage.setItem('2p', JSON.stringify(two));
    console.log(two);
}
    
Button3.onclick = function() {
    var three = timeBlock3pm.value;
    localStorage.setItem('3p', JSON.stringify(three));
    console.log(three);
}

Button4.onclick = function() {
    var four = timeBlock4pm.value;
    localStorage.setItem('4p', JSON.stringify(four));
    console.log(four);
}

Button5.onclick = function() {
    var five = timeBlock5pm.value;
    localStorage.setItem('5p', JSON.stringify(five));
    console.log(five);
}

//retrieving from local storage

var lastSaved9 = JSON.parse(localStorage.getItem('9a'));
document.getElementById('9').value = lastSaved9;

var lastSaved10 = JSON.parse(localStorage.getItem('10a'));
document.getElementById('10').value = lastSaved10;

var lastSaved11 = JSON.parse(localStorage.getItem('11a'));
document.getElementById('11').value = lastSaved11;

var lastSaved12 = JSON.parse(localStorage.getItem('12p'));
document.getElementById('12').value = lastSaved12;

var lastSaved1 = JSON.parse(localStorage.getItem('1p'));
document.getElementById('13').value = lastSaved1;

var lastSaved2 = JSON.parse(localStorage.getItem('2p'));
document.getElementById('14').value = lastSaved2;

var lastSaved3 = JSON.parse(localStorage.getItem('3p'));
document.getElementById('15').value = lastSaved3;

var lastSaved4 = JSON.parse(localStorage.getItem('4p'));
document.getElementById('16').value = lastSaved4;

var lastSaved5 = JSON.parse(localStorage.getItem('5p'));
document.getElementById('17').value = lastSaved5;

//dynamically change color of boxes based on time

var currentTime = moment().format("HH");

$("input").each(function () {

    if (parseInt($(this).attr("id")) > parseInt(currentTime)) { $(this).attr('class', 'future form-control h-100 description'); }

    else if (parseInt($(this).attr("id")) < parseInt(currentTime)) { $(this).attr("class", "past form-control h-100 description"); }

    else if (parseInt($(this).attr("id")) == parseInt(currentTime)) {
        $(this).attr("class", "present form-control h-100 description");
    }
});



