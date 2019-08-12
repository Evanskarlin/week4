function cariModus(arr) {
  // you can only write your code here!
    // arr.sort(function(a,b){return a-b });
    var nilai;
    var samasemua = 0;
    var penampung = arr[0];
    var count = 0;
    var palingbesar = 0;
    // for(i=0 ; i<arr.length ; i++){
    //     if(arr[i] != penampung){
    //         count=0;
    //     }
    //     else{
    //         samasemua++;
    //     }
        
    //     count++
    //     penampung = arr[i];
    //     if (palingbesar<count){
    //         palingbesar=count;
    //         nilai = arr[i];
    //     }
        
    // }
    // if(samasemua == arr.length){
    //     nilai = -1;
    // }
    // return nilai;


    for(i=arr.length-1 ; i>=0 ; i--){
        for(j=arr.length-1 ; j>=0 ; j--){
            if(arr[j]==arr[i]){
                count++
            }
        }
        if (palingbesar<count){
            palingbesar=count;
            nilai = arr[i];
        }
        else if (palingbesar==count){
            samasemua++;
        }
        count = 0;
    }
    // console.log(samasemua);
    // console.log(arr.length-1);


    if (samasemua == arr.length-1){
        nilai = -1;
    }
    return nilai

}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1