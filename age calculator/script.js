
const inputDob = document.getElementById('dob');
const calcBtn = document.getElementById("calculate-btn");
const resultDiv = document.getElementById('result');

calcBtn.addEventListener('click', function(){

    const dob = new Date(inputDob.value);
    const ageinMs = Date.now() -dob.getTime();
    const ageDate = new Date(ageinMs);
    const age = Math.abs(ageDate.getFullYear()-1970);
    resultDiv.innerHTML = `Your age is ${age} years.`;

});

