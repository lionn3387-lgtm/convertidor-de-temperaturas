const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert(){
    if(toFahrenheit.checked){
        result.textContent = "Tu seleccionaste Fahrenheit";
    }
    else if(toCelsius.checked){
        result.textContent = "Tu seleccionaste Celsius";
    }
    else{
        result.textContent = "Selecciona una unidad";
    }
}

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textbox.value);
        temp = temp*9/5 + 32;
        result.textContent = temp.toFixed(1) + "ºF";
    }
    else if(toCelsius.checked){
        temp = Number(textbox.value);
        temp = (temp-32) * (5/9);
        result.textContent = temp.toFixed(1) + "ºC";
    }
    else{
        result.textContent = "Selecciona una unidad";
    }
}


