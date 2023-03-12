function convert() {
    const meters = document.getElementById("meters").value;
    const feet = meters * 3.28084;
    const result = document.getElementById("result");
    let FinalFeet = feet.toFixed(2)
    result.innerHTML = `${meters} meters = ${FinalFeet} feet`;
  }