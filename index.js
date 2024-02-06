// function celsiusToFahrenheit (celsius) {
//     var fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
// }

// function fahrenheitToCelsius(fahrenheit) {
//     var celsius = (fahrenheit - 32) * 5/9;
//     return celsius;
// }


// var temperaturaCelsius = 36;
// var temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);
// console.log(temperaturaCelsius + " grade Celsius sunt " + temperaturaFahrenheit + " grade Fahrenheit ");

// var temperaturaFahrenheit = 96.8;
// var temperaturaCelsius = fahrenheitToCelsius(temperaturaFahrenheit);
// console.log(temperaturaFahrenheit + "grade Fahrenheit sunt " + temperaturaCelsius + " grade Celsius ");




// function estePalindrom(str) {
//     const strRedactat = str.toLowerCase().replace(/\s/g, '');
//     let start = 0;
//     let end = strRedactat.length - 1;
//     while (start < end) {
//         if (strRedactat[start] !== strRedactat[end]) {
//             return false;
//         }
//         start++;
//         end--;
//     }
//     return true;
// }

// console.log(estePalindrom("Ana"));
// console.log(estePalindrom("buna"));
// console.log(estePalindrom("radar1"));



function sorteazaCrescatorNumerele (array) {
    return array.slice().sort((a, b) => a - b);
}
 const numere = [3, 1, 4.1, 2.5, 6, 5, 7];
 const numereSortateSort = sorteazaCrescatorNumerele(numere)
 console.log(numereSortateSort);


