'use strict';
//Global Vars
let tipPercent, tipTotal, tipPP, total, totalPP, bill;
let people = 1;

//DOM Elements
const inputs = document.querySelectorAll('input');
const tipButtons = document.querySelectorAll('.tip-percent-input');
const billEl = document.getElementById('bill');
const tipsDiv = document.getElementById('btn-grid');
const peopleEl = document.getElementById('people');
const resetBtn = document.querySelector('.reset');
const tipDisplay = document.getElementById('tip-pp');
const totalDisplay = document.getElementById('total-pp');
const customTip = document.getElementById('custom-tip');
console.log(tipButtons);

function reply_click(clicked_id) {
  tipPercent = Number(clicked_id);
  calcTip();
  console.log(tipPercent);
}

function calcTip() {
  bill = Number(billEl.value);
  people = peopleEl.value ? Number(peopleEl.value) : 1;
  tipTotal = Number(bill * tipPercent);
  tipPP = tipTotal / people;
  total = bill + tipTotal;
  totalPP = total / people;
  if (bill && tipTotal && people) {
    tipDisplay.textContent = `$${tipPP.toFixed(2)}`;
    totalDisplay.textContent = `$${totalPP.toFixed(2)}`;
  }
}

tipButtons.forEach(input =>
  input.addEventListener('click', function () {
    for (const e of tipButtons) {
      e.classList.remove('btn-selected');
    }
    input.classList.add('btn-selected');
  })
);

inputs.forEach(input => input.addEventListener('input', calcTip));
customTip.addEventListener('input', function () {
  tipPercent = Number(this.value) / 100;
  console.log(tipPercent);
});

function reset() {
  bill = 0;
  people = 1;
  tipPercent = 0;
  tipDisplay.textContent = `$0.00`;
  totalDisplay.textContent = `$0.00`;
  inputs.forEach(input => (input.value = ''));
  document.querySelector('.btn-selected').classList.remove('btn-selected');
}

resetBtn.addEventListener('click', reset);
