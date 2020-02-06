const time = document.getElementById('time');

// Show Time
function showTime() {
    let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(); 
  
    // Output Time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}`;
  
    setTimeout(showTime, 1000);
  }
  
//    Add Zeros - fixing a problem of shouTimeout()
//   who displays the our like this-> 22:9.
//   the function below add a zero when it's needed.
  function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
  }


function displaytDate() {

var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
var today  = new Date();
var day = today.toLocaleDateString("en-US", options);
  document.getElementById("date").innerHTML = day;
}

//Run the functions
  showTime();
  displaytDate();
