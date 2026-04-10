import { calculate } from "../../services/game/calculator.js";

const oneNumInput = document.getElementById("calculator-form-one-input");
const twoNumInput = document.getElementById("calculator-form-two-input");
const result = document.getElementById("calculator-form-result");
const textLits = document.querySelectorAll(".calculator__form__item__text");
const form = document.getElementById("calculator-form");

function onClicked(event) {
    textLits.forEach(el => el.classList.remove("calculator__form__item__text__active"));
    event.target.classList.add("calculator__form__item__text__active");
}

function onCalculation(event) {
    event.preventDefault();

    const oneNum = Number(oneNumInput.value);
    const twoNum = Number(twoNumInput.value);
    const operator = document.querySelector('input[name="radio"]:checked')?.value;

    const { result: calcResult, error } = calculate(oneNum, twoNum, operator);

    if (error) {
        result.value = "";
        result.placeholder = error;
    } else {
        result.value = calcResult;
    }
}

textLits.forEach(text => text.addEventListener("click", onClicked));
form.addEventListener("submit", onCalculation);