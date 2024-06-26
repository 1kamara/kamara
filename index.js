const menuIcon = document.getElementById("menu__icon");
const menu = document.getElementById("menu");

menuIcon?.addEventListener("click",  () => {
    if(menu?.className === "hidden") {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
});

/* calculate ate */

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
