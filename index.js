let submit = document.getElementById("submit")
let userTemp;
let ctoF = document.getElementById("ctoF");
let ftoC = document.getElementById("ftoC");
let result = document.getElementById ("result")

submit.onclick = function(){
    userTemp = document.getElementById("userTemp").value;
    console.log(userTemp);

    if(isNaN(userTemp)){
        result.textContent = `${userTemp} is not an number`
    }
    else if(ctoF.checked){
        result.textContent = (userTemp * 9/5) + 32 + "°F"
    }
    else if (ftoC.checked){
        result.textContent = (userTemp - 32) * 5/9 + "°C"
    }
    else if (!ftoC.checked && !ctoF.checked){
        result.textContent = "Please select an option"
    }
}
