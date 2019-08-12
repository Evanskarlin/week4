function changeMe(arr) {
    // you can only write your code here!
    var hasil = {};
    for (var i = 0 ; i < arr.length ; i++){
        hasil['firstName'] = arr[i][0];
        hasil['lastName'] = arr[i][1];
        hasil['gender'] = arr[i][2];
        if(arr[i][3] == undefined){
            hasil['age'] = 'Invalid Birth Year'
        }
        else{
            hasil['age'] = 2019-arr[i][3];
        }
    console.log(hasil);
    }
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); 
  // ""