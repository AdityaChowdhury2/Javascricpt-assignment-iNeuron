const fahrenheitToCelsius = (temperatureInFahrenheit) => {
    return ((temperatureInFahrenheit - 32) / 9) * 5
}
const celsiusToFahrenheit = (temperatureInCelsius) => {
    return ((temperatureInCelsius * 9) / 5) + 32
}
const temperatureInCelsius = 0;
const temperatureInFahrenheit = 0;
console.log(fahrenheitToCelsius(temperatureInFahrenheit));
console.log(celsiusToFahrenheit(temperatureInCelsius));