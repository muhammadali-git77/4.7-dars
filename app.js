// function triangle(a) {
//   let p = 3 * a;
//   let _p = p / 2;
//   let s = Math.sqrt(_p * (_p - a) * (_p - a) * (_p - a));
//   console.log(s, p);
// }

// function sum(a) {
//   let counter = 0;

//   for (let i = 0; i <= a; i++) {
//     counter += i;
//   }
//   return counter
// }

// console.log(sum());

// Func4. isSquare (k) mantiqiy funksiyasini hosil qiling. (k > 0). Agar k biror butun sonning kvadrati bo'lsa - true, aks holda false qiymat qaytarilsin. QY
// isSquare(10) => false
// isSquare(25) => true

// function isSquare(params) {
//   if (params > 0) {
//     return Number.isInteger(Math.sqrt(params));
//   } else {
//     return "0 dan katta son";
//   }
// }

// console.log(isSquare(24));

// Func5. Butun qiymat qaytaruvchi digitCount(k) funksiyasini hosil qiling. (k > 0). Funksiya k ning raqamlari sonini qaytarsin. QY
// digitCount(8791) => 4

// function getDigits(k) {
//   let result = 0;
//   let numbers = String(k).split("");

//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i];
//   }
//   return result;
// }

// console.log(getDigits(343453425341234));

