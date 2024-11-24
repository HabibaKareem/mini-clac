let v=0;
function appendToDisplay(value) {

    document.getElementById("display").value += value;
  }

  function calc() {
    var display = document.getElementById("display");
  
    try {

      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }

  function clearDisplay() {
    v=0;
    document.getElementById("display").value = "";
  }

