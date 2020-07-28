var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

var waktu = 10000;
var i = 0;
// Lanjutkan code untuk menjalankan function readBooksPromise 
function readBook(){
    readBooksPromise(waktu, books[i])
    .then(function(fulfilled){
        i++;
        if (i<books.length) {
            waktu = fulfilled;
            readBook();
        }
    })
    .catch(function(){
        if(i>books.length){
            console.log(reject);
        }
    });
}

readBook();
