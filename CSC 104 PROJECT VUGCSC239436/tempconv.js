function convertTemperature() {
    const inputValue = parseFloat(prompt("Enter the temperature value:"));
    const inputUnit = prompt("Enter the unit of the temperature (C for Celsius, F for Fahrenheit, K for Kelvin):").toUpperCase();

    if (isNaN(inputValue)) {
        alert("Invalid temperature value. Please enter a number.");
        return;
    }

    if (!['C', 'F', 'K'].includes(inputUnit)) {
        alert("Invalid temperature unit. Please enter C, F, or K.");
        return;
    }

    let celsius, fahrenheit, kelvin;

    switch(inputUnit) {
        case 'C':
            celsius = inputValue;
            fahrenheit = (inputValue * 9/5) + 32;
            kelvin = inputValue + 273.15;
            break;
        case 'F':
            celsius = (inputValue - 32) * 5/9;
            fahrenheit = inputValue;
            kelvin = (inputValue - 32) * 5/9 + 273.15;
            break;
        case 'K':
            celsius = inputValue - 273.15;
            fahrenheit = (inputValue - 273.15) * 9/5 + 32;
            kelvin = inputValue;
            break;
    }

    alert(`Celsius: ${celsius.toFixed(2)} °C\nFahrenheit: ${fahrenheit.toFixed(2)} °F\nKelvin: ${kelvin.toFixed(2)} K`);
}

convertTemperature();