function calcBMI() {
    // makes sure the variable called from id 'weight' is a number
    let weight = parseFloat(document.getElementById('weight').value);
    // makes sure the variable called from id 'height' is a number
    let height = parseFloat(document.getElementById('height').value);
// weight or height has no value or it is smaller than or equal to 0 send an alert
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        alert('Please enter valid values for weight and height.');
        return;
    }
// creates variable that calculates via BMI formula
    let bmi = weight / (height * height);
    // makes sure new variable output is rounded off to 2 decimal places 
    let roundedBMI = bmi.toFixed(2);

    // fetches output from latest varible and adds it to the result id
    document.getElementById('result').value = roundedBMI;
}
