var td = document.querySelectorAll('td');

td.forEach(function(el){
	el.addEventListener('mouseover', function(){
		el.style.backgroundColor = 'skyblue';
		setInterval(function(){
			el.style.backgroundColor = 'white';
		}, 3000);
	});
});
