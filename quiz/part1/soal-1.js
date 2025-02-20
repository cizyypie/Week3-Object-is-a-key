/*
bil prima = hanya dapat dibagi dengan bil 1 atau dirinya sendiri*/
function angkaPrima(angka) {
   for(let i=2; i<angka/2; i++){ // angka =3, iterasi i=2, 3/2=1.5, its not terpenuhi so 3 is a prime numb
      if (angka % i == 0){
         return false;
      }
   }
   return true;
}


// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false. 6/2 =0, 6/3 =0 sisa bagi equal to 0 so this not a prime numb
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false