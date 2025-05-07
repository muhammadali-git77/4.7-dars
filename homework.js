// Func1. a sonning ixtiyoriy n-darajasini hisoblovchi power(a, n) nomli funksiya hosil qiling. QY
// power(3, 5) => 243
function power(a, n) {
  return a ** n;
}

console.log(power(2, 9));

// Func2. 2 ta a va b sonning o'rta arifmetigi (a + b) / 2 va geometrigi (a + b) ^ (1 / 2) hisoblovchi mean(a, b) nomli funksiya hosil qiling. QYM
// mean(12, 48) => 30, 24
function mean(a, b) {
  console.log((a + b) / 2);
  console.log(Math.sqrt(a * b));
}

mean(12, 48);

// Func3. Haqiqiy sonning ishorasini aniqlovchi sign(n) nomli funksiya hosil qiling. Funksiya argumenti noldan kichik bo'lsa -1; noldan katta bo'lsa 1; nolga teng bo'lsa 0 qiymat qaytarsin. QY
// sign(10) => 1
function sign(n) {
  return n > 0 ? 1 : n < 0 ? -1 : 0;
}

console.log(sign(0));

// Func4. A*x^2 + B*x + C = 0 ko'rinishidagi tenglama kvadrat tenglama deyiladi. (A noldan farqli son). Kvadrat tenglamaning ildizlar sonini aniqlovchi numberOfRoots(A, B, C) nomli funksiya hosil qiling. D = B^2 - 4*A*C. Agar D > 0 bo’lsa 2 ta, D = 0 bo’lsa 1 ta, D < 0 bo’lsa 0 ta. QY
// numberOfRoots (1, -6, 9) => 1
// function numberOfRoots(A, B, C) {
//   return ;
// }

// Func5. Doiraning yuzini hisoblovchi areaCircle(R) nomli funksiya hosil qiling. Doiraning yuzi S = π*R^2 orqali hisoblanadi. QY
function areaCircle(R) {
  return Math.PI * R ** 2;
}

console.log(areaCircle(22));

// Func6. A va B sonlari orasidagi sonlar yig'indisini hisoblovchi sumRange(A, B) nomli funksiya hosil qiling. Agar A > B bo'lsa, funksiya 0 qiymat qaytaradi. QY
// sumRange(8, 10) => 27
function sumRange(A, B) {
  let counter = 0;
  if (A < B) {
    for (let i = A; i <= B; i++) {
      counter += i;
    }
    return counter;
  } else {
    return 0;
  }
}

console.log(sumRange(8, 10));

// Func7. Arifmetik amallarni bajaruvchi calc(A, B, S) funksiyasini hosil qiling. A va B haqiqiy sonlar. S o'zgaruchisi orqali bajariladigan arifmetik amal aniqlanadi. “-” – ayirish, “*” – ko'paytirish, “/” - bo'lish, “+” - qo'shish va boshqa belgilar uchun 0 qaytarsin. QY
// calc(10, 15, “*”) => 150
// calc(7, 8, “+”) => 15
function calc(a, b, s) {
  switch (s) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
    case "**":
      return a ** b;

    default:
      return 0;
  }
}
console.log(calc(10, 15, "*"));

// Func8. Butun sonning juft - toqligini aniqlovchi isEven(K) funksiyasini hosil qiling. Funksiya K juft son bo'lsa - true, aks xolda false qiymat qaytarsin. QY
// isEven(10) => true
function isEven(K) {
  return K % 2 == 0 ? true : false;
}
console.log(isEven(45));

// Func9. Kiritilgan 3 ta a, b, c sonlarning eng kichigini, o’rtachasini va eng kattasini chiqaruvchi sortABC(a, b, c) nomli dastur tuzing. QYM
// sortABC(10, 5, 8) => 5, 8, 10

// function sortABC(a, b, c) {
//   if (a <= b && b <= c) {
//     console.log(c, b, a);
//   } else if (b <= a && a <= c) {
//     console.log(a, c, b);
//   } else {
//     console.log(b, c, a);
//   }
// }

// //O'zim harakat qilib ko'rdim men qilayotgan yo'l xato ekan shuning uchun chatgptdan oldim shu masalani

function sortABC(a, b, c) {
  const arr = [a, b, c];
  arr.sort((x, y) => x - y);
  console.log(...arr);
}

sortABC(40, 2, 8);

// Func10. isPowerN(K, N) mantiqiy funksiyasini hosil qiling. (K > 0). Agar K soni N soninig biror darajasi bo'lsa - true, aks xolda false qiymat qaytarilsin. QY
// function isPowerN(k, n) {

// }

// Func11. isPrime(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni tub bo'lsa - true, aks holda false qiymat qaytarilsin. QY
// isPrime(7)  => true
function isPrime(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      sum++;
    }
  }
  return sum == 2 ? true : false;
}
console.log(isPrime(17));

// Func12. isPrime funksiyasi orqali N gacha bo’lgan sonlar ichidan nechtasi tub ekanini aniqlovchi numberOfPrime(N) nomli dastur tuzilsin. QY
// numberOfPrime(10) => 4
function numberOfPrime(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}
console.log(numberOfPrime(10));

// Func13. Butun qiymat qaytaruvchi digitNth(K, N) funksiyasini hosil qiling. (K > 0). Funksiya K sonining N-raqamini qaytarsin. Agar K soni raqamlari N dan kichik bo'lsa, -1 qaytarilsin. digitCount funksiyasidan foydalaning.QY
// digitNth(105782, 5) => 8
// digitNth(1057, 5) => -1
function digitNth(k, n) {
  let num = String(k);
  return +num[n - 1];
}
console.log(digitNth(105782, 5));

// Func14. N sonining raqamlaridan teskari tartibda hosil bo’ladigan sonni qaytaruvchi inverseNumber(N) nomli funksiya hosil qiling. QY
// inverseNumber(n) => 41865
function inverseNumber(n) {
  let nums = n.toString();
  nums = nums.split("");
  nums = nums.reverse();
  return nums.join("");
}
console.log(inverseNumber(123));
inverseNumber(123);

// Func15. isPalindrom(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni palindrom bo'lsa - true, aks holda false qiymat qaytarilsin. inverseNumber funksiyasidan foydalaning. Palindromik son - chapda ham, o’ngdan ham o’qilganda bir xil bo’ladigan son. Masalan, 123321, 78987. QY
// isPalindrom(1678761) => true

function isPalindrom(n) {
  if (n > 0) {
    return n == inverseNumber(n) ? true : false;
  }
}
console.log(isPalindrom(12));

// Func16. 1 dan N ga sonlar ko’paytmasini qaytaruvchi factorial(N) nomli funksiya hosil qiling. Agar N manfiy bo’lib qolsa, 1 qaytarilsin. QY

function factorial(n) {
  let counter = 1;
  if (n > 0) {
    for (let i = 1; i < n; i++) {
      counter *= i;
    }
    return counter;
  } else {
    return 1;
  }
}
console.log(factorial(17));

// Func17. 1 dan N bo’lgan sonlar ichida 3 bo’linadigan sonlar yig’indisini hisoblovchi getSum3(N) nomli dastur yozing.
// getSum3(15) => 45

function getSum3(n) {
  let counter = 1;
  if (n > 0) {
    for (let i = 1; i < n; i++) {
      if (i % 3 == 0) {
        counter += i;
        console.log(i);
      }
    }
    return counter;
  } else {
    return 1;
  }
}

console.log(getSum3(25));

// Func18. 1 dan N ga sonlar bo’lgan juft va toqlar sonlar yig’indisini qaytaruvchi sumOddEven(N) nomli funksiya hosil qiling. QYM
// sumOddEven(10) => 30, 25

function sumOddEven(n) {
  let juft = 0;
  let toq = 0;
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      juft += i;
    } else {
      toq += i;
    }
  }
  console.log(juft, toq);
}
sumOddEven(32);

// Func19. invertTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya orqali berilgan soat, minut va sekundni T sekundga almashtiruvchi programma tuzilsin.
// invertTime(0, 6, 40) => 400
function invertTime(h, m, s) {
  let hours = h * 3600;
  let minut = m * 60;
  return hours + minut + s;
}

console.log(invertTime(0, 6, 40));

// Func20. decTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya berilgan vaqtdan 1 sekund oldingi vaqtni ko’rsatsin.
// decTime(0, 6, 40) => 00:06:39

function decTime(h, m, s) {
  return `${9 > h ? 0 : ""}${h}:${9 > m ? 0 : ""}${m}:${9 > s ? 0 : ""}${
    s - 1
  }`;
}
console.log(decTime(12, 3, 4));

// // Func21. Mantiqiy qiymat qaytaruvchi isLeapYear(Y) funksiyasini hosil qiling. Funksiya berilgan Y - yil kabisa yili bo'lsa true, aks holda false qiymat qaytarsin.
// Func21. Mantiqiy qiymat qaytaruvchi isLeapYear(Y) funksiyasi
function isLeapYear(y) {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
}
console.log(isLeapYear(2024));

// Func22. isLeapYear(Y) funksiyasidan foydalangan xolda, butun qiymat qaytaruvchi monthDays(M, Y) funksiyasini hosil qiling. Funksiya berilgan Y - yilning M - oyi kunlar sonini qaytarsin.
// monthDays(2, 2020) => 28
// monthDays(3, 2021) => 31
function monthDays(m, y) {
  days = [31, isLeapYear(y) ? 29 : 28, 31, 30, 31, 30, 31, 30, 31, 30, 31];

  return days[m - 1];
}
console.log(monthDays(2, 2020));

// Func23. monthDays funksiyasidan foydalangan xolda, prevDate (D, M, Y) funksiyasini hosil qiling. Funksiya berilgan sanadan oldingi sanani aniqlasin, D - kun, Y - yil, M - oyini qaytarsin. QY
// prevDate (10, 3, 2022) => 09.03.2022
function prevDate(d, m, y) {
  return `${9 >= d ? 0 : ""}${d - 1}.${9 >= m ? 0 : ""}${m}.${
    9 >= y ? 0 : ""
  }${y}`;
}

console.log(prevDate(11, 15, 2000));

// Func24. monthDays funksiyasidan foydalangan xolda, nextDate(D, M, Y) funksiyasini hosil qiling. Funksiya berilgan sanadan keying sanani aniqlasin, D-kun, Y yil, M - oyini qaytarsin. QY
// nextDate (10, 3, 2022) => 11.03.2022

function nextDate(d, m, y) {
  return `${9 >= d + 1 ? 0 : ""}${d + 1}.${9 >= m ? 0 : ""}${m}.${
    9 >= y ? 0 : ""
  }${y}`;
}
console.log(nextDate(9, 15, 2000));

// Func25. N sonining bo’luvchilari soni va bo’luvchilari yi’gindisini chiqaruvchi getDividersNumberAndSum(N) nomli funksiya yozing. QYM
// getDividersNumberAndSum(12) => 6, 24

function getDividersNumberAndSum(n) {
  let count = 0;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (n % i == 0) {
      count++;
      sum += i;
    }
  }
  console.log(count, sum);
}

getDividersNumberAndSum(12);
