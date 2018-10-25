var csv="Беларусь, Belarus, русский, 9500000, 207000, Минск, +03.00, 250\n" +
"Россия, Russia Federation, русский, 146000000, 17000000, Москва, +03.00, 540\n"+
"Япония, Japan, японский, 126000000, 378000, Токио, +09.00, 2400\n"+
"Бельгия, Belgium, фламанский, 11300000, 30500, Брюссель, +01.00, 2500\n"+
"Чехия, Czech Republick, чешский, 10500000, 78800, Прага, +01.00, 1700\n"+
"Мексика, Mexico, испанский, 121000000, 1970000, Мехико, -06.00, 1100";
var countries = csv.replace(/\n/gm, ',').replace(/\s/gm, '').split(',');
console.log(countries);
var names = [], engnames = [], langs = [], populations = [], squares = [], capitals = [], times = [], salaryes = [];
for (var i=0; i<countries.length; i=i+8) names.push(countries[i]);
for (var i=1; i<countries.length; i=i+8) engnames.push(countries[i]);
for (var i=2; i<countries.length; i=i+8) langs.push(countries[i]);
for (var i=3; i<countries.length; i=i+8) populations.push(countries[i]);
for (var i=4; i<countries.length; i=i+8) squares.push(countries[i]);
for (var i=5; i<countries.length; i=i+8) capitals.push(countries[i]);
for (var i=6; i<countries.length; i=i+8) times.push(countries[i]);
for (var i=7; i<countries.length; i=i+8) salaryes.push(countries[i]);
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

var max=0, min=0;
for (var i in country){
	var DencityMax = country[max].population / country[max].square;
	var DencityMin = country[min].population / country[min].square;
	if (country[i].population/country[i].square > DencityMax){
		max = i;
		DencityMax = DencityMax;
	}
	if (country[i].population/country[i].square < DencityMin){
		min = i;
		DencityMin = DencityMin;
	}
}
console.log("Максимальная плотность населения у страны "+country[max].name+" и она составляет "+DencityMax);
console.log("Минимальная плотность населения у страны "+country[min].name+" и она составляет "+DencityMin);

var max=0, min=0;
for (var i in country){
	var MaxVVP = country[max].salary * country[max].population;
	var MinVVP = country[min].salary * country[min].population;
	if (country[i].salary*country[i].population > MaxVVP){
		max = i;
		MaxVVP = MaxVVP;
	}
	if (country[i].salary*country[i].population < MinVVP){
		min = i;
		MinVVP = MinVVP;
	}
	else MinVVP = country[0].population * country[0].salary;
}
console.log("Максимальный ВВП на душу населения у страны "+country[max].name+" и он составляет "+MaxVVP);
console.log("Минимальный ВВП на душу населения у страны "+country[min].name+" и он составляет "+MinVVP);

var countrySort = country.slice();
countrySort.sort(function(a,b){
    return a.salary-b.salary;
});
console.log(countrySort);

var mediana;
if (countrySort.length%2==0){
	mediana = (Number(countrySort[countrySort.length/2-1].salary)+Number(countrySort[countrySort.length/2].salary))/2;
}
else mediana = countrySort[Math.ceil(countrySort.length/2)-1].salary;
console.log("Медианное значение дохода на душу населения: "+mediana);

var countryMedians = [];
for (var i in countrySort){
	countryMedians.push({
		name: countrySort[i].name,
		deviation: Math.abs(countrySort[i].salary-mediana)
	})
}
countryMedians.sort(function(a,b){
    return a.deviation-b.deviation;
});
console.log("Три страны с минимальным по модулю отклонением дохода от медианного значения: ");
for (var i=0; i<3; i++){
console.log(countryMedians[i].name +" - с отклонением в "+countryMedians[i].deviation);
}


var speakingPopul, countryLangs;
for(i=0; i<country.length; i++){
	speakingPopul = Number(country[i].population);
	countryLangs = country[i].name;
    for(var j=i+1;j<country.length;j++){
        if(country[i].lang==country[j].lang){
            speakingPopul=speakingPopul+Number(country[j].population);
            countryLangs=countryLangs+", "+country[j].name;
            country.splice(j, 1);  
            j--;    
        }
    }
    console.log([i+1]+")"+country[i].lang+" язык - это государственный язык для "+countryLangs+". Общая численность носителей языка "+speakingPopul+" человек");
}


function getRandom(a, b){
	var r = Math.random();
	var n = Math.ceil(a + r*(b-a));
	return n;
}
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
console.log("Столицы трёх случайных стран и время в данном месте в данное время: ")
for (var i=0; i<3; i++){
	var random = getRandom(0, countrySort.length-1);
	if (countrySort[random].time === countrySort[0].time){
		console.log(countrySort[random].capital +" "+hours+":"+minutes+":"+seconds);
	} else console.log(countrySort[random].capital +" "+Number(Number(countrySort[random].time)+hours)+":"+minutes+":"+seconds);
}

console.log("Английское название следующих стран больше русского: ");
for (var i in country){
	if(countrySort[i].engname.length > countrySort[i].name.length){
		console.log(countrySort[i].name);
	}
}