function celsiusToFahrenheit (celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}


var temperaturaCelsius = 36;
var temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);
console.log(temperaturaCelsius + " grade Celsius sunt " + temperaturaFahrenheit + " grade Fahrenheit ");

var temperaturaFahrenheit = 96.8;
var temperaturaCelsius = fahrenheitToCelsius(temperaturaFahrenheit);
console.log(temperaturaFahrenheit + "grade Fahrenheit sunt " + temperaturaCelsius + " grade Celsius ");


function estePalindromPointer(str) {
    const strRedactat = str.toLowerCase().replace(/\s/g, '');
    let start = 0;
    let end = strRedactat.length - 1;
    while (start < end) {
        if (strRedactat[start] !== strRedactat[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(estePalindromPointer("Ana"));
console.log(estePalindromPointer("buna"));
console.log(estePalindromPointer("radar1"));



function sorteazaCrescatorNumerele (numerele) {
    return numerele.slice().sort((a, b) => a - b);
}
 const numere = [3, 1, 4.1, 2.5, 6, 5, 7];
 const numereSortateSort = sorteazaCrescatorNumerele(numere)
 console.log(numereSortateSort);




 function gasesteCuvantulCelMaiLung (sir) {
    const cuvinte = sir.split(' ');

    let celMaiLungCuvant = '' ;
    let lungimeMaxima = 0;

    cuvinte.forEach (cuvant => {
        if (cuvant.length > lungimeMaxima) {
            lungimeMaxima = cuvant.length;
            celMaiLungCuvant = cuvant;
        }
    });
    return celMaiLungCuvant;
 }
 
 const sirCuvinte = "Aici avem cel mai lung cuvant";
 const rezultat = gasesteCuvantulCelMaiLung(sirCuvinte);
 console.log("Cuvantul cel mai lung este :", rezultat);




 function numaraAparitiiCifra(sir, cifra) {
    let contor = 0;

    for (let i = 0; i < sir.length; i++) {
        if (!isNaN(parseInt(sir[i])) && parseInt(sir[i]) === cifra) {
            
            contor++;
        }
    }
    return contor;
}

const sirExemplu = "Acesta este un exemplu de șir în care vom număra aparițiile cifrei 5";
const cifraCautata = 5;
const numarAparitii = numaraAparitiiCifra(sirExemplu, cifraCautata);
console.log(`Cifra ${cifraCautata} apare de ${numarAparitii} ori în șir.`)





function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        let produs = 1;
        for (let i = 2; i <= n; i++) {
            produs *= i;
        }
       return produs;
    }
}

const numar = 3;
const rezultat1 = factorial(numar);
console.log(`Factorialul lui ${numar} este: ${rezultat1}`);




function fibonacci(n){
  if (n <= 1) {
    return n;
  }  

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  return b;
}

const n = 7;
const result = fibonacci(n);
console.log(`Al ${n} numar din sirul Fibonacci este: ${result}`);




function alegeSalutul (ora) {
    let salut;
    if (ora >= 18){
        salut = "Buna seara";
    } else {
        salut = "Buna ziua";
    }
    return salut;
}

let ora = 19;
let mesajul = alegeSalutul (ora);
console.log(mesajul);

   
    