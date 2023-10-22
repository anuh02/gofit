document.getElementById('bmi-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get user input
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Check if inputs are valid numbers
    if (isNaN(height) || isNaN(weight)) {
        alert('Please enter valid numbers for height and weight.');
    } else {
        // Calculate BMI
        const bmi = weight / ((height / 100) ** 2);

        // Determine BMI category
        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal Weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        // Display the BMI and category
        const resultMessage = `Your BMI is: ${bmi.toFixed(2)} (${category})`;
        document.getElementById('bmi-result').textContent = resultMessage;

        // Display custom messages based on height and weight
        let customMessage = '';

        if (height > 240) {
            customMessage = 'Are you a pine tree?';
        } else if (height < 25) {
            customMessage = 'Are you a mushroom?';
        }

        if (weight > 200) {
            if (customMessage) {
                customMessage += ' Hello Elephant!';
            } else {
                customMessage = 'Hello Elephant!';
            }
        } else if (weight < 2) {
            if (customMessage) {
                customMessage += ' Go and get some food.';
            } else {
                customMessage = 'Go and get some food.';
            }
        }

        // Display the custom message
        document.getElementById('custom-message').textContent = customMessage;

        // Add a message and link to check exercises
        const exerciseMessage = `To find suitable exercises, <a href="exercise.html">click here</a>.`;
        document.getElementById('exercise-message').innerHTML = exerciseMessage;
    }
});
