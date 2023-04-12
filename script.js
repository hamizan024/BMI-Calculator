const calculateButton = document.getElementById("calculate");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultDiv = document.getElementById("result");

function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100;
    const bmi = weight / (height ** 2)
    const bmiStatus = getBMIStatus(bmi);
    resultDiv.innerHTML = `Your <b>BMI</b> is <b>${bmi.toFixed(1)}</b> which means you are <b>${bmiStatus}</b>.`;
}

function getBMIStatus(bmi) {
    if (bmi < 18.5){
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal weight";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}

calculateButton.addEventListener("click", calculateBMI);