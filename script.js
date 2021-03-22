


document.getElementById("currentDay").innerHTML = formatAMPM();

function formatAMPM() {
    var date = new Date();
    var hours = date.getHours();
    var days = date.getDay();
    var minutes = date.getMinutes();
    var ampm = hours >=12 ? 'pm' : 'am';
    hours = hours %12;
    hours = hours ? hours : 12;
    minutes = minutes <10 ? '0'+minutes : minutes;
    var strTime = date + ' ' + hours + ':' + minutes + ' ' + ampm;
    return strTime
}