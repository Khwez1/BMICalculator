        function calculateBMI() {
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);

            if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
                alert('Please enter valid values for weight and height.');
                return;
            }

            const bmi = weight / (height * height);
            const roundedBMI = bmi.toFixed(2);

            document.getElementById('result').value = roundedBMI;
        }
