function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var hasil = [];
    //your code here
    var bayar = 0;
    for(var i =0 ; i< arrPenumpang.length ; i++){
        var objek = {};
        bayar = 2000 * (rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1]));
        objek['penumpang'] = arrPenumpang[i][0];
        objek['naikDari'] = arrPenumpang[i][1];
        objek['tujuan'] = arrPenumpang[i][2];
        objek['bayar'] = bayar;
        hasil.push(objek);
    }
    return hasil;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]