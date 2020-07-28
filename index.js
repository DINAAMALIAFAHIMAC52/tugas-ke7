// index.js
var readBooks = require('./callback.js');
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
];

var waktu = 10000;
var i = 0;
// Tulis code untuk memanggil function readBooks di sini
function readBook() {
    readBooks(waktu, books[i], function(waktuBaca){
        i++;
        if (i<books.length) {
            waktu = waktuBaca;    
            readBook();
        }
    });
}
readBook();
