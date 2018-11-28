var country = [{
	name: "Беларусь",
	flag: "images/900px-Flag_of_Belarus.svg.png",
	code: "+375" ,
	population: 95000000
},
{
	name: "Япония",
	flag: "images/900px-Flag_of_Japan.svg.png",
	code: "+81",
	population: 126000000
},
{
	name: "Россия",
	flag: "images/900px-Flag_of_Russia.svg.png",
	code: "+7",
	population: 147000000
},
{
	name: "Мексика",
	flag: "images/840px-Flag_of_Mexico.svg.png",
	code: "+52",
	population: 121000000
},
{
	name: "Бельгия",
	flag: "images/450px-Flag_of_Belgium.svg.png",
	code: "+32",
	population: 11300000
},
{
	name: "Чехия",
	flag: "images/900px-Flag_of_the_Czech_Republic.svg.png",
	code: "+420",
	population: 10500000
},
{
	name: "Польша",
	flag: "images/640px-Flag_of_Poland.svg.png",
	code: "+48",
	population: 38400000
},
{
	name: "Хорватия",
	flag: "images/1200px-Flag_of_Croatia.svg.png",
	code: "+385",
	population: 4100000
},
{
	name: "Испания",
	flag: "images/750px-Flag_of_Spain.svg.png",
	code: "+34",
	population: 46500000
},
{
	name: "Нидерланды",
	flag: "images/900px-Flag_of_the_Netherlands.svg.png",
	code: "+31",
	population: 17200000
},
{
	name: "Швейцария",
	flag: "images/Flag_of_Switzerland_(Pantone).svg.png",
	code: "+41",
	population: 8400000
},
{
	name: "Словакия",
	flag: "images/900px-Flag_of_Slovakia.svg.png",
	code: "+421",
	population: 5500000
},];
var ul = document.getElementById("country_list");
var str = "";
country.forEach(function(c){
	str += "<li>"+c.name+"<br>"+"<img"+" heigth="+" 50px"+" width="+" 100px"+" src="+c.flag+" "+"<br>"+"<br>"+"Телефонный код: "+c.code+"<br>"+"Население: "+c.population+"</li>";

});
ul.innerHTML = str;
