function displayTime() {
    var currentDay = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");
    var $currentT = $("#currentDay");
    $currentT.text(currentDay);
}

setInterval(displayTime, 1000);

const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
    let
        rowIdString = row.id,
        rowHour;
    if (rowIdString) {
        rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
        if (currentHour === rowHour) {
            setColor(row, "red");
        }
        else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
            setColor(row, "green")
        }
        else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
            setColor(row, "lightgrey");
        }
        else {
            setColor(row, "white");
        }
    }
});

function setColor(element, color) {
    element.style.backgroundColor = color;
}

// var plannerItems = [];
// var getLocalStorageData = JSON.parse(localStorage.getItem("planner-items"));
// 
// plannerContent = getLocalStorageData;
//     if (getLocalStorageData !== null) {
// }
// 
// $("button").on("click", function() {
//   
// });