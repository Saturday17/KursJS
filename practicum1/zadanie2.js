var csv="Беларусь, Belarus, белорусский, 9500000, 207000, Минск, +03.00, 250\n" +
"Россия, Russia, русский, 146000000, 17000000, Москва, +03.00, 540\n"+
"Япония, Japan, японский, 126000000, 378000, Токио, +09.00, 2400\n"+
"Бельгия, Belgium, фламанский, 11300000, 30500, Брюссель, +01.00, 2500\n"+
"Чехия, Czech, чешский, 10500000, 78800, Прага, +01.00, 1700\n"+
"Мексика, Mexico, испанский, 121000000, 1970000, Мехико, -06.00, 1100";
var countries = csv.replace(/\n/gm, ',').replace(/\s/gm, '').split(',');
console.log(countries);
var names = [], engnames = [], langs = [], populations = [], squares = [], capitals = [], times = [], salaryes = [];
for (var i=0; i<countries.length; i=i+8) names.push(countries[i]);
for (var i=0; i<countries.length; i=i+8) engnames.push(countries[i]);
for (var i=0; i<countries.length; i=i+8) langs.push(countries[i]);
for (var i=0; i<countries.length; i=i+8) populations.push(countries[i]);
for (var i=0; i<countries.length; i=i+8) squares.push(countries[i]);
for (var i=0; i<countries.length; i=i+8) capitals.push(countries[i]);
for (var i=0; i<countries.length; i=i+8) times.push(countries[i]);
for (var i=0; i<countries.length; i=i+8) salaryes.push(countries[i]);
var country = [];
for (var i=0; i<countries.length/8; i++){
	country.push({
		name: names[i],
		engname: engnames[i],
		lang: langs[i],
		population: populations[i],
		square: squares[i],
		capital: capitals[i],
		time: times[i],
		salary: salaryes[i]
	})
}
console.log(country);

for (var i in country){
	for (var j in country){
	if (country[i].population > country[j].population){
		console.log(country[i].population);
	}
}
}