function checkAB(num) {
  // you can only write your code here!
  arr = num.split('');
  for(i=0 ; i<num.length ; i++){
      if(arr[i]=="a"){
        for(j=0 ; j<num.length ; j++){
            if(arr[j]=="b"){
                if(Math.abs(i-j) == 4){
                    return true
                }
            }
        }
      }
      else if(arr[i]=="b"){
        for(j=0 ; j<num.length ; j++){
            if(arr[j]=="a"){
                if(Math.abs(i-j) == 4){
                    return true
                }
            }
        }
    }
  }
  return false

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false