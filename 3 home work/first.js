var buhgal = {
	rab: [{
		name: "Ilya",
		age: 20,
		otdel: "Бухгалтерия предприятия",
		zp: 500,
		stag: 1,
		print: function(){
		console.log(`${this.name}`);
	}},
	{
		name: "Dimas",
		age: 20,
		otdel: "Бухгалтерия магазина",
		zp: 400,
		stag: 3,
		print: function(){
		console.log(`${this.name}`);
	}},
	{
		name: "Ruslan",
		age: 21,
		otdel: "Бухгалтерия предприятия",
		zp: 500,
		stag: 7,
		print: function(){
		console.log(`${this.name}`);
	}},
	{
		name: "Nicosta",
		age: 31,
		otdel: "Бухгалтерия магазина",
		zp: 500,
		stag: 46,
		print: function(){
		console.log(`${this.name}`);
	}},
	{
		name: "Aleksandr",
		age: 65,
		otdel: "Бухгалтерия предприятия",
		zp: 900,
		stag: 68,
		print: function(){
		console.log(`${this.name}`);
	}
}],
	choose: function(w){
			var w=prompt("Выберете номер операции (1 - вывести всех сотружников, 2 - принять на работу, 3 - уволить)");
			return w;
	},
	printAll: function(){
			for( var i in this.rab){
			this.rab[i].print()
		}
	},
	priem: function(n, a, o, z, s){
		 	this.rab.push({
		 		name: n,
		 		age: a,
		 		otdel: o,
		 		zp: z,
		 		stag: s,
		 		print: function(){
				console.log(`${this.name}`);
		 	}});
	},
	uvolit: function(u){
		for( var i in this.rab){
		if (this.rab[i].name === u)
			this.rab.splice(i,1);
}
	}
}
buhgal.choose();
buhgal.printAll();
var name=prompt("Введите имя");
name=String(name);
var age=prompt("Введите возраст");
age=Number(age);
var otdel=prompt("Введите отдел");
otdel=String(otdel);
var zp=prompt("Введите з/п");
zp=Number(zp);
var stag=prompt("Введите стаж");
stag=Number(stag);
buhgal.priem(name, age, otdel, zp, stag);
buhgal.printAll();
var uvol=prompt("Введите имя того, кого хотите уволить");
uvol=String(uvol);
buhgal.uvolit(uvol);
buhgal.printAll();
switch(choose()){
	case '1': buhgal.printAll();
	break;
	case '2': buhgal.priem();
	break;
	case '3': buhgal.uvolit();
	break;
	default: alert("Ошибка");
}

