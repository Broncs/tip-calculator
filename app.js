const billAmount = document.querySelector("#billamt");
const peopleAmt = document.querySelector("#peopleamt");
const optionTip = document.querySelector("#option");
const btn = document.querySelector(".btn");
const results = document.querySelector("#totalTip");
const tip = document.querySelector("#tip");
const each = document.querySelector("#each");

results.style.display = "none";
each.style.display = "none";

btn.addEventListener("click", calcular);

function calcular() {
  //  validate bill
  if (billAmount.value === "" || optionTip.value == 0) {
    alert("por favor , verifique os valores");
    return;
  }

  //   check to see if this input is empty or less than or equal to 1
  if (peopleAmt.value == "" || peopleAmt.value <= 1) {
    peopleAmt.value = 1;
    each.style.display = "none";
  } else {
    each.style.display = "block";
  }

  //   calculate
  let totalTip = (billAmount.value * optionTip.value) / peopleAmt.value;

  total = Math.round(totalTip * 100) / 100;

  //  putting the value in the div
  tip.innerHTML = totalTip.toFixed(2);

  //   Show results
  results.style.display = "block";
}
