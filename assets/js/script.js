function displayTime() {
    var currentTime = moment().format("MM/DD/YYYY hh:mm:ss a");
    document.getElementById("current-time").innerText = currentTime;
  }
  
  setInterval(displayTime, 1000);