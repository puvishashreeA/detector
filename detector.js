function calculateBAC() {
    // Get the input values
    var weight = document.getElementById('weight').value;
    var drinks = document.getElementById('drinks').value;
    var gender = document.getElementById('gender').value;

    // Validation
    if (!weight || !drinks) {
        document.getElementById('result').innerHTML = '<p class="alert">Please fill in all fields.</p>';
        return;
    }

    // Constants
    var alcoholConsumed = drinks * 14; // Each drink contains 14g of pure alcohol
    var alcoholDistributionRatio = (gender === "male") ? 0.68 : 0.55;

    // BAC Calculation
    var bac = (alcoholConsumed / (weight * alcoholDistributionRatio)) * 100;

    // Display the result
    var resultText = "Your estimated BAC is: " + bac.toFixed(4);
    if (bac >= 0.08) {
        resultText += "<br><strong>Warning: You are legally intoxicated!</strong>";
    } else {
        resultText += "<br><strong>You are within safe limits.</strong>";
    }

    document.getElementById('result').innerHTML = resultText;
}
