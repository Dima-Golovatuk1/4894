// js/services/calculator.js

export function calculate(oneNum, twoNum, operator) {
    if (isNaN(oneNum) || isNaN(twoNum) || !operator) {
        return { error: "Сталася помилка поле не заповнене" };
    }

    switch (operator) {
        case "addition":
            return { result: oneNum + twoNum };

        case "multiplication":
            return { result: oneNum * twoNum };

        case "subtraction":
            return { result: oneNum - twoNum };

        case "division":
            if (twoNum === 0) {
                return { error: "На нуль ділити не можна" };
            }
            return { result: oneNum / twoNum };

        default:
            return { error: "Невідомий оператор" };
    }
}