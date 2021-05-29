//desarrollando ejercicio desafio n° 3

let num = prompt("ingrese un número entre  el 1 y el 20");
if (num < 1 || num > 20) {
  alert('Número fuera de rango');
} else {
  for (let i = 1; i <= num; i++) {
    let resultado = (multiplicador) => num * i;
    console.log(i + " x " + num + " es: " + resultado(num))
    if (i === parseInt(num)) {
      for (let j = 1; j <= num; j++) {
        let factorial = (x) => {
          if (x > 1) {
            return x * factorial(x - 1)
          } else {
            return x;
          }
        }
        console.log("el factorial de " + j + "!  : " + factorial(j));
      }
    }
  }
}