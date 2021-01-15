function entryScroll() {
document.getElementById('entryPoint').scrollIntoView({
    behavior: "smooth"
});
}

function updateClock(){
    var currentTime = new Date ();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    var currentTimeString = currentHours + ":"+ currentMinutes + ":" + currentSeconds;

    document.getElementById("hours").textContent = (currentHours);
    document.getElementById("mins").textContent = (currentMinutes);
    document.getElementById("secs").textContent = (currentSeconds);


}

function getDate(){
    var currentDate = new Date ();
    var currentDay = currentDate.getDay();
    var currentDayNum = currentDate.getUTCDate();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();

    var days = ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    var months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
    var currentDayString = days[(currentDay-1)];
    var currentMonthString = months[currentMonth];
    var currentDateSting = currentDayString+' the '+ currentDayNum + " of "+ currentMonthString+', '+currentYear;

    document.getElementById("date").firstChild.nodeValue = (currentDayString);
    document.getElementById("num").firstChild.nodeValue = currentDayNum;
    document.getElementById("month").firstChild.nodeValue = currentMonthString;
    document.getElementById("year").firstChild.nodeValue = currentYear;
}