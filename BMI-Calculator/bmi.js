
function bmiCalc() {
    // Get input values and convert to numbers
    const weight = parseFloat(document.getElementById('weight').value);
    const heightInCm = parseFloat(document.getElementById('height').value);
    const message= document.getElementById('message')
    const score = document.getElementById('score');
    const height = heightInCm / 100
    
    // Calculate BMI
    const bmi = weight / (height * height);

    if(isNaN(bmi)|| bmi<=0 || height<=0 || weight<=0 ){
        message.hidden = false; // Show the error message
        message.textContent = "Please enter valid positive numbers."; // Set error message
        score.textContent = "0"; // Clear the BMI result 
        return  
    }
    else if (bmi<18.5) {
        document.getElementById('score').textContent=0;
        message.hidden = false; // Show the  message
        message.textContent = "you are underweight"; // Set the  message
    }
    else if (bmi>=18.5 && bmi<=24.9) {
        document.getElementById('score').textContent=0;
        message.hidden = false; // Show the message
        message.textContent = "you are normal"; // Set the message
    }
    else if (bmi >=25 && bmi<=29.9) {
        document.getElementById('score').textContent=0;
        message.hidden = false; // Show the message
        message.textContent = "you are overweight"; // Set the  message
    }
    else if (bmi>29.9) {
        document.getElementById('score').textContent=0;
        message.hidden = false; // Show the message
        message.textContent = "You are obese"; // Set the message
    }
    
     else {
        message.hidden = true;
        // Display the result, rounded to 3 decimal places
         // Limits the BMI to 3 decimal places

     }
     
     score.textContent = bmi.toFixed(3);
    
    
    return bmi;
    

}


