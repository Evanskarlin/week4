/*
================
Kalkulator Nilai
================

[INSTRUCTIONS]
Kamu diminta menghitung Nilai Ujian Nasional dari sebuah laporan nilai murid.
Buatlah function kalkulatorNilai yang menerima satu parameter berupa string.
function tersebut akan menghitung total nilai dan memutuskan apakah murid tersebut lulus/tidak.
Adapun ketentuannya:
  - A bernilai 4
  - B bernilai 3
  - C bernilai 2
  - D bernilai 1
  - E bernilai 0
  - Murid dinyatakan TIDAK LULUS jika ada mata pelajaran memperoleh nilai E, selain itu LULUS.

[RULES]
  - WAJIB menggunakan ALGORITMA atau PSEUDOCODE.
*/


// // Algorithm here
// 1. buat sebuah function dengan nama 'kalkulatorNilai' dan parameter penambung dengan nama 'nilai'.
// 2. tampung variabel 'i' dengan angka 0.
// 3. tampung variabel 'total' dengan angka 0.
// 4. tampung variabel 'e' dengan angka 0.
// 5. tampung variabel 'hasil' dengan nilai string apapun.
// 6. apabila 'i' lebih kecil dari banyaknya elemen pada 'nilai' maka lanjut ke step 7. jika tidak lanjut ke step 13.
// 7. apabila index ke 'i' dari nilai adalah "A" maka tambahkan 'total' dengan 4 kemudian lanjut ke step 12. bila tidak maka lanjut ke step 8.
// 8. selain apabila index ke 'i' dari nilai adalah "B" maka tambahkan 'total' dengan 3.kemudian lanjut ke step 12. bila tidak maka lanjut ke step 9.
// 9. selain apabila index ke 'i' dari nilai adalah "C" maka tambahkan 'total' dengan 2.kemudian lanjut ke step 12. bila tidak maka lanjut ke step 10.
// 10. selain apabila index ke 'i' dari nilai adalah "D" maka tambahkan 'total' dengan 3.kemudian lanjut ke step 12. bila tidak maka lanjut ke step 11.
// 11. selain apabila index ke 'i' dari nilai adalah "E" maka tambahkan 'e' dengan 1.kemudian lanjut ke step 12. bila tidak maka lanjut ke step 12.
// 12. tambahkan nilai 'i' dengan 1 kemudian kembali ke step 6. bila tidak maka lanjut ke step 15.
// 13. apabila 0 lebih kecil dari 'e' maka tampung 'hasil' dengan "Total Nilai: " tambah 'total' tambah ". Maaf kamu TIDAK LULUS." kemudian lanjut ke step 14.
// 14. kembalikan nilai fungsi dengan 'hasil'.
// 15. selain 0 lebih kecil dari 'e' maka tampung 'hasil' dengan "Total Nilai: " tambah 'total' tambah ". Selamat kamu LULUS!" kemudian lanjut ke step 16.
// 16. tampilkan 'kalkulatorNilai' dengan parameter "AABCADDA".
// 17. tampilkan 'kalkulatorNilai' dengan parameter "AAAAEA".
// 18. tampilkan 'kalkulatorNilai' dengan parameter "ABCDD".




// // pseudocode here
// FUNCTION 'kalkulatorNilai' with parameter 'nilai' 
//     STORE 'i' with 0
//     STORE 'total' with 0
//     STORE 'e' with 0
//     STORE 'hasil' with any string value
//     WHILE 'i' less than length of 'nilai' THEN
//         IF index 'i' of 'nilai' equals to "A" THEN
//             ADD 'total' with 4
//         ELSE IF index 'i' of 'nilai' equals to "B" THEN
//             ADD 'total' with 3
//         ELSE IF index 'i' of 'nilai' equals to "C" THEN
//             ADD 'total' with 2
//         ELSE IF index 'i' of 'nilai' equals to "D" THEN
//             ADD 'total' with 1
//         ELSE IF index 'i' of 'nilai' equals to "E" THEN
//             ADD 'e' with 1
//         END IF
//         ADD 'i' with 1
//     END WHILE
//     IF 0 less than 'e' THEN
//         SET 'hasil' with "Total Nilai: " PLUS 'total' PLUS ". Maaf kamu TIDAK LULUS."
//         RETURN HASIL
//     ELSE THEN
//         SET 'hasil' "Total Nilai: " PLUS 'total' PLUS ". Selamat kamu LULUS!"
//         RETURN HASIL
//     END IF
// END FUNCTION

// DISPLAY 'kalkulatorNilai' with parameter "AABCADDA"
// DISPLAY 'kalkulatorNilai' with parameter "AAAAEA"
// DISPLAY 'kalkulatorNilai' with parameter "ABCDD"



// JavaScript here
function kalkulatorNilai(nilai) {
    // your code here
    var i = 0
    var total = 0
    var e = 0
    var hasil = ""
    while(i < nilai.length){
        if(nilai[i] == "A"){
            total += 4
        }
        else if(nilai[i] == "B"){
            total += 3
        }
        else if(nilai[i] == "C"){
            total += 2
        }
        else if(nilai[i] == "D"){
            total += 1
        }
        else if(nilai[i] == "E"){
            e += 1
        }
        i++
    }
    if(0<e){
        hasil = "Total Nilai: " + total + ". Maaf kamu TIDAK LULUS."
        return hasil
    }
    else{
        hasil = "Total Nilai: " + total + ". Selamat kamu LULUS!"
        return hasil
    }
  }
  
  console.log(kalkulatorNilai("AABCADDA")); // Total Nilai: 23. Selamat kamu LULUS!
  console.log(kalkulatorNilai("AAAAEA")); // Total Nilai: 20. Maaf kamu TIDAK LULUS.
  console.log(kalkulatorNilai("ABCDD")); // Total Nilai: 11. Selamat kamu LULUS!
