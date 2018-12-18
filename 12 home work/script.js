var points = ":";
const goods = [{
	img: 'resource/4.gif',
	name: 'Honor 10',
	price: 711.99,
	amount: 20,
	},
	{
	img: 'resource/galaxy-s9-black-new.300x300.jpg',
	name: 'Samsung Galaxy S9',
	price: 1198.99,
	amount: 12,
	},
	{
	img: 'resource/iphoneXR.jpg',
	name: 'Apple iPhone XR',
	price: 1854.99,
	amount: 10,
	},
	{
	img: 'resource/Oneplus-6T-purple-new.180x180.jpg',
	name: 'OnePlus 6T',
	price: 1397.99,
	amount: 20,
	},
	{
	img: 'resource/ipad-2018-silver.300x300.jpg',
	name: 'Apple iPad 2018',
	price: 749.99,
	amount: 15,
	},
	{
	img: 'resource/Samsung-Galaxy-Tab-A-32GB-SM-T590-face.300x300.png',
	name: 'Samsung Galaxy Tab A',
	price: 687.11,
	amount: 18,
	},
	{
	img: 'resource/Mi-Notebook-Air-13.3.300x300 (1).png',
	name: 'Xiaomi Mi Notebook Air 13.3',
	price: 711.99,
	amount: 20,
	},
	{
	img: 'resource/30028713b2.300x300.png',
	name: 'ASUS VivoBook Max',
	price: 823.18,
	amount: 17,
	},
	{
	img: 'resource/LG-55UK67.300x300.png',
	name: 'LG 55UK6750',
	price: 1591.99,
	amount: 6,
	},
	{
	img: 'resource/Philips-49PUS8303.300x300.png',
	name: 'Philips 49PUS8303',
	price: 1597.99,
	amount: 8,
	},
	{
	img: 'resource/Samsung-UE43NU7470.300x300.png',
	name: 'Samsung UE43NU7470',
	price: 1198.99,
	amount: 7,
	},
	{
	img: 'resource/Sony-KD-55AF8.300x300.png',
	name: 'Sony KD 55AF8',
	price: 4289.99,
	amount: 4,
	}
];
var Cart = [];
var Routes ={
	"#1": {
		path: "1.html",
		handler: function tableMove(){
					var td = document.querySelectorAll('td');
					td.forEach(function(el){
						el.addEventListener('mouseover', function(){
							el.style.backgroundColor = 'skyblue';
							setInterval(function(){
								el.style.backgroundColor = 'white';
							}, 3000);
						});
					});
					move = function(){
						tableMove();
					}
				}
	},
	"#2": {
		path: "2.html",
		handler: function timer(){
						setInterval(function clock(){
							var clock = document.getElementById("clock");
							var date = new Date();
							var hours = date.getHours();
							if (hours<10) hours = "0"+hours;
							var minutes = date.getMinutes();
							if (minutes<10) minutes = "0"+minutes;
							var seconds = date.getSeconds();
							if (seconds<10) seconds = "0"+seconds;
							clock.innerHTML=hours+points+minutes+points+seconds; 
							points = points == ':' ? ' ' : ':';
						}, 500);
						time = function(){
							clock();
						}
					}
	},
	"#3": {
		path: "3.html",
		handler: function showGoods(){
				const list = document.getElementById("itemlist");
				var str='';
				goods.forEach(function(items){
					str+=`<div class="col-md-4 tovar">
					<img src="${items.img}"/>
					<h3> ${items.name} </h3>
					<h6> Цена: ${items.price}, осталось ${items.amount} шт </h6>
					<p class="cart"> 
						<input type = "number" max="${items.amount}" value="1" min="1"</>
						<input type = "button" value="В корзину" class="addToCart"</>
						</p>
					</div>`;
				});
				list.innerHTML = str;
				const addButtons = document.getElementsByClassName("addToCart");
				for (let i=0; i<addButtons.length; i++){
					addButtons[i].addEventListener("click", function(){
						const amount = this.previousElementSibling.value;
						addToCart(goods[i], amount);
					});
				}
				addToCart = function(item, amount){
						Cart.push({item, amount});
						console.log(Cart);
						const totalAmount = Cart.reduce((prev, curr) => Number(prev + Number(curr.amount)), 0);
						const totalPrice = Cart.reduce((prev, curr) => prev + curr.amount * curr.item.price, 0);
						const span = document.getElementById("cartStatus");
						span.innerHTML = `${totalAmount} товаров на сумму ${Math.ceil(totalPrice)}`;
						item.amount -= amount; // удаление из магазина товаров, которые добавляются в корзину
						showGoods(goods);
				}
				const showCartBtn = document.getElementById("showCart");
				showCartBtn.addEventListener("click", function(){
					showCart();
				});
				showCartBtn.addEventListener("dblclick", function(){
					showGoods();
				});
				showCart = function(){
					const list = document.getElementById("itemlist");
					var s = "";
					for (var i in Cart){
						s += `<div class="col-md-4">
							<img src="${Cart[i].item.img}"/>
							<h3> ${Cart[i].item.name} </h3>
							<p> Кол-во: ${Cart[i].amount} |
								Цена: ${Cart[i].item.price} |
								Стоимость: ${Math.ceil(Cart[i].amount * Cart[i].item.price)}
							</p>
						</div>`;
						list.innerHTML = s;
						Cart[i].item.price.toFixed(2); // не больше 2ух знаков после запятой цены
					}
				}
			}
	},
	"#4": {
		path: "4.html",
		handler: function(){
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
			}
	},
	"#5": {
		path: "5.html",
		handler: function(){
			const goods=[{ 
				name:'Стул детский', 
				price:105.50, 
				amount:7, 
				description:'Стул детский высокого качества' 
				}, 
				{ 
				name:'Стол', 
				price:150.20, 
				amount:21, 
				description:'Стол высокого качества' 
				}, 
				{ 
				name:'Шкаф', 
				price:1000, 
				amount:12, 
				description:'Шкаф высокого качества' 
				}, 
				{ 
				name:'Кровать', 
				price:1500.50, 
				amount:15, 
				description:'Кровать высокого качества' 
				}, 
				{ 
				name:'Стул взрослый', 
				price:200, 
				amount:5, 
				description:'Стул детский высокого качества' 
				}];
			var showGoods = function(items){
				const list = document.getElementById("itemlist");
				var s="";
				for (var i in items){
					s += `<li>
					<h3> ${items[i].name} </h3>
					<p> ${items[i].description} </p>`;
				}
				list.innerHTML = s;
				const addButtons = document.getElementsByClassName("addToCart");
				for (let i=0; i<addButtons.length; i++){
					addButtons[i].addEventListener("click", function(){
						const amount = this.previousElementSibling.value;
						addToCart(items[i], amount);
					})
				}
			}
			showGoods(goods);
			const ascBtn = document.getElementById("asc");
			ascBtn.addEventListener("click", function(){
				goods.sort((a,b) => a.name > b.name ? 1 : -1);
				showGoods(goods);
			});
			const descBtn = document.getElementById("desc");
			descBtn.addEventListener("click", function(){
				goods.sort((a,b) => a.name < b.name ? 1 : -1);
				showGoods(goods);
			});
		}
	}
}

function refreshContainer(){
	const hash = location.hash;
	if(hash in Routes){
		const path = Routes[hash].path;
		const xhr = new XMLHttpRequest();
		xhr.open("GET", path, true);
		xhr.onload = function(){
			onPageLoaded(this.responseText, hash)
		}
		xhr.send(null);
	}
}
function onPageLoaded(text, hash){
	const div = document.getElementById("page");
	div.innerHTML = text;
	if(typeof Routes[hash].handler == "function"){
		Routes[hash].handler();
	}
}
window.onhashchange = refreshContainer;
refreshContainer();