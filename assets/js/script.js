function displayTime() {
    var currentDay = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");
    var $currentT = $("#currentDay");
    $currentT.text(currentDay);
}

setInterval(displayTime);

const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

// Manage time block color coding
var timeBlocks = "9 10 11 12 13 14 15";
var timeBlock = timeBlocks.split("");

function setColor() {
    for (var i = 0; i < timeBlock.length; i++) {
        var timeInt = parseInt(timeBlock[i]);

        if (timeInt < currentHour) {
            $("#" + timeInt).attr("style", "background-color: gray");
        }
        else if (timeInt === currentHour) {
            $("#" + timeInt).attr("style", "background-color: red");
        }
        else {
            $("#" + timeInt).attr("style", "background-color: green");
        }
    }
}

setColor();

// task function
var newTask = function (description, date, list) {
    
}

var plannerItems = [];
var getLocalStorageData = JSON.parse(localStorage.getItem("planner-items"));

var $9 = $("#9");
var $10 = $("#10");
var $11 = $("#11");
var $12 = $("#12");
var $13 = $("#13");
var $14 = $("#14");
var $15 = $("#15");
var $16 = $("#16");
var $17 = $("#17");

var history9 = JSON.parse(localStorage.getItem("9"));
$("#9").val(history9);

var history10 = JSON.parse(localStorage.getItem("10"));
$("#10").val(history10);

var history11 = JSON.parse(localStorage.getItem("11"));
$("#11").val(history11);

var history12 = JSON.parse(localStorage.getItem("12"));
$("#12").val(history12);

var history13 = JSON.parse(localStorage.getItem("13"));
$("#13").val(history13);

var history14 = JSON.parse(localStorage.getItem("14"));
$("#").val(history10);

var history15 = JSON.parse(localStorage.getItem("15"));
$("#").val(history15);

var history16 = JSON.parse(localStorage.getItem("16"));
$("#").val(history16);

var history17 = JSON.parse(localStorage.getItem("17"));
$("#17").val(history17);
