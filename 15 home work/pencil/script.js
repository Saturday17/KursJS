var canv = document.getElementById('canvas');
var ctx = canv.getContext('2d');
canv.width = window.innerWidth;
canv.height = window.innerHeight;
var isMouseDown = false;
var size = document.getElementById('size');
var color = document.getElementById('color');
var btn = document.getElementById('button');
var radius;

canv.addEventListener('mousedown', function(){
	isMouseDown = true;
});
canv.addEventListener('mouseup', function(){
	isMouseDown = false;
	ctx.beginPath();
});


size.addEventListener('change', function(){
	switch(size.value){
		case 'Маленький':{
			ctx.lineWidth = 10;
			radius = 5;
			break;
		}
		case 'Средний':{
			ctx.lineWidth = 20;
			radius = 10;
			break;
		}
		case 'Большой':{
			ctx.lineWidth = 30;
			radius = 15;
			break;
		}
	}
});
color.addEventListener('change', function(){
	switch(color.value){
		case 'Красный':{
			ctx.fillStyle = 'red';
			ctx.strokeStyle = 'red';
			break;
		}
		case 'Синий':{
			ctx.fillStyle = 'blue';
			ctx.strokeStyle = 'blue';
			break;
		}
		case 'Зелёный':{
			ctx.fillStyle = 'green';
			ctx.strokeStyle = 'green';
			break;
		}
		case 'Жёлтый':{
			ctx.fillStyle = 'yellow';
			ctx.strokeStyle = 'yellow';
			break;
		}
		case 'Оранжевый':{
			ctx.fillStyle = 'orange';
			ctx.strokeStyle = 'orange';
			break;
		}
		case 'Фиолетовый':{
			ctx.fillStyle = 'purple';
			ctx.strokeStyle = 'purple';
			break;
		}
	}
});

canv.addEventListener('mousemove', function(e){
	if (isMouseDown){
		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY);
	}
	
});