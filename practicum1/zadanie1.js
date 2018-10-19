var str = "jojo@gmail.com, minato@mail.ru,   lenovo@yandex.ru,         html5@mail.ru, subby17@gmail.com, Frank,    yeeexelll@mail.ru, +375(29)1337228";
console.log(str);
var newstr=[];
newstr = str.replace(/\s+/g,'');
var comma =[];
comma = newstr.split(',');
const exp = /^\w+@[a-z]+\.[a-z]+$/g;
var emails = [];

function getEmailOperator(emails){
	return emails.substr(emails.indexOf('@'), emails.length);
}

for(var i in comma){
	if (comma[i].match(exp)!=null) emails.push(comma[i]);
}
for (var i in emails) console.log(emails[i]);
var opers =[];
for(var i in emails){
	opers.push({
		x: (emails[i].substr(0,emails[i].indexOf('@'))),
		y: (getEmailOperator(emails[i]))
	});
}
console.log(opers);


var uniqueOperators = []; 
opers.forEach( el => {
	let isUnique = true;
	uniqueOperators.forEach (operatorName => {
		if (operatorName == el.y){
			isUnique = false;
		}
	});
	if (isUnique){
		uniqueOperators.push(el.y);
	}
});
console.log(uniqueOperators);


var gmails = [];
for (var i in opers){
	if (opers[i].y == uniqueOperators[0]){
		gmails.push(opers[i]);
	}
}
console.log(gmails);
var mails = [];
for (var i in opers){
	if (opers[i].y == uniqueOperators[1]){
		mails.push(opers[i]);
	}
}
console.log(mails);
var yandexs = [];
for (var i in opers){
	if (opers[i].y == uniqueOperators[2]){
		yandexs.push(opers[i]);
	}
}
console.log(yandexs);

var allmails = [gmails, mails, yandexs];
console.log(allmails);
for(var i in allmails){
	if(allmails[i].gmails > allmails[i].mails){
		
	}
}
allmails.sort((a,b) => a.length - b.length);
console.log(allmails);



var maxGM=0, minGM=0;
for(var i in gmails){
	for(var j in gmails){
	if(gmails[j].x >= gmails[i].x&&gmails[j].x >= gmails[maxGM].x){
		maxGM=j;
	}
	else if(gmails[j].x < gmails[i].x&&gmails[j].x <= gmails[minGM].x) {
		minGM=j;
	}
	}
}
var averageGM=0, flagGM=0;
for(var i in gmails){
	averageGM += gmails[i].x.length; 
	flagGM++
}
console.log("Самая маленькая из gmails: "+gmails[minGM].x);
console.log("Самая большая из gmails: "+gmails[maxGM].x);
console.log("Средняя арифметическая gmails: "+averageGM/flagGM);

var maxML=0, minML=0;
for(var i in mails){
	for(var j in mails){
	if(mails[j].x >= mails[i].x && mails[j].x >= mails[maxML].x){
		maxML=j;
	}
	else if(mails[j].x < mails[i].x && gmails[j].x <= gmails[minML].x) {
		minML=j;
	}
	}
}
var averageML=0, flagML=0;
for(var i in mails){
	averageML += mails[i].x.length; 
	flagML++
}
console.log("Самая маленькая из mails: "+mails[minML].x);
console.log("Самая большая из mails: "+mails[maxML].x);
console.log("Средняя арифметическая mails: "+averageML/flagML);

var maxYA=0, minYA=0;
for(var i in yandexs){
	for(var j in yandexs){
	if(yandexs[j].x >= yandexs[i].x && yandexs[j].x >= yandexs[maxYA].x){
		maxYA=j;
	}
	else if(yandexs[j].x < yandexs[i].x && yandexs[j].x <= yandexs[minYA].x) {
		minYA=j;
	}
	}
}
var averageYA=0, flagYA=0;
for(var i in yandexs){
	averageYA += yandexs[i].x.length; 
	flagYA++
}
console.log("Самая маленькая из yandexs: "+yandexs[minYA].x);
console.log("Самая большая из yandexs: "+yandexs[maxYA].x);
console.log("Средняя арифметическая yandexs:: "+averageYA/flagYA);


var logins = "";
for(var i in opers) logins = logins + opers[i].x;
var symbols = "";
for(var i in logins) symbols = symbols + logins[i]+ " ";
console.log("Все символы всех логинов: "+symbols);
var symba = symbols.split(' ');
// console.log(new Set(symba)); - читерство
console.log(symba);
var arrOfsymbols = [];
for(var i in symba){
	fl=0;
	for(var j in symba){
		if (symba[i]==symba[j]){
			fl++;
			symba.splice(j, 1);
			j--;
		} 
	}
		arrOfsymbols.push({
			sym: symba[i],
			num: fl
		});
}
arrOfsymbols.pop();
console.log(arrOfsymbols);