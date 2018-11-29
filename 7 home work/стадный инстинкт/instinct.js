var people = ['Илья','Денис','Димас','Руслан','Марина'];
var cities = ['Минска', 'Москвы', 'Киева', 'Бреста'];
var goods = ['Адики','Найки','Пумы','Вансы'];



function getRand(a,b){
	return Math.round((b - a) * Math.random() + a);
}

var herdState = true;

var herdTimer = setTimeout(function Tim(){
	if(herdState){
		var herdInst = document.createElement('p');
		herdInst.setAttribute('id', 'herdInst');
		herdInst.innerText = `${people[getRand(0,people.length-1)]} из ${cities[getRand(0,cities.length-1)]} купил(а) себе новые\n ${goods[getRand(0,goods.length-1)]} прямо сейчас!`;
		document.body.appendChild(herdInst);
		var icon = document.createElement('img');
		icon.setAttribute('src', 'img/n3Jpcnbymik.jpg');
		icon.setAttribute('id', 'MyIcon');
		herdInst.appendChild(icon);
		herdState = false;
		setTimeout(Tim, 7000);
	}
	else{
		document.getElementById('herdInst').remove();
		herdState = true;
		setTimeout(Tim, getRand(5000, 10000))
	}
}, getRand(3000,5000));