function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var kata = '';
  terkecil = String(angka).length * 2;
  for(i=1 ; i<=angka ; i++){
    if (angka % i == 0){
        kata += String(i) + String(angka/i);
        if (kata.length<terkecil){
            terkecil = kata.length;
        }
        kata = '';
    }
  }
  return terkecil;

}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2