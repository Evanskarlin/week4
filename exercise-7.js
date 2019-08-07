function urutkanAbjad(str) {
  // you can only write your code here!

  var arr = str.split('');
  arr.sort();
  var katabaru = arr.join('');

  return katabaru;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'