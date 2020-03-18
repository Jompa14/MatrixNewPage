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
//   who displays the hour like this-> 22:9.
//   the function below add a zero when it's needed.
  function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
  }


function displayDate() {

var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
var today  = new Date();
var day = today.toLocaleDateString("en-US", options);
  document.getElementById("date").innerHTML = day;
}

//prevent Enter to create a break at contenteditable
document.getElementById('name').addEventListener('keydown', (evt) => {
  if (evt.keyCode === 13) {
      evt.preventDefault();
  }
});


// save edits at localStorage
const editables = document.querySelectorAll("[contenteditable]");

editables.forEach(el => {
  el.addEventListener("blur", () => {
    localStorage.setItem("dataStorage-" + el.id, el.innerHTML);
  })
});

// once on load
for (var key in localStorage) {
  if (key.includes("dataStorage-")) {
    const id = key.replace("dataStorage-","");
    document.querySelector("#" + id).innerHTML = localStorage.getItem(key);
  }
}

//Run the functions
  showTime();
  displayDate();
