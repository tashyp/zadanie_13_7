//zadanie 13.7

var fs = require('fs');
//var StatMode = require('stat-mode');
//var colors = require('colors');

/*fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});
*/

fs.readdir('./assets', 'utf-8', function(err, files) {
	if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
    console.log('Katalog /assets zawiera:');
    console.log(files);
	fs.writeFile('./lista_plikow.txt', files , function(err) {
    	if (err) throw err; 
    	console.log('Zapisano zawartość folderu w pliku lista_plików');
	});        
});