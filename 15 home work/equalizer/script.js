var equa = document.getElementById('equalizer');
var n = 50;
var R = 30;

var waves = new Array(n);
waves.fill(0);
waves = waves.map(function(){
	return Math.ceil(Math.random()*R);
});

for (var i=0; i<n; i++){
	var div = document.createElement('div');
	div.setAttribute('class', 'equalizer_col');
	var r = Math.ceil(Math.random()*150 + 50);
	var g = Math.ceil(Math.random()*150 + 50);
	var b = Math.ceil(Math.random()*150 + 50);
	var color = 'rgb('+r+', '+g+', '+b+')';
	div.setAttribute('style', '--color: '+color);
	equa.appendChild(div);
}

function equalizerDraw(){
	waves = waves.map(function(w){
		w += Math.ceil(Math.random()*6 - 3);
		w = (w > R) ? R-2 : w;
		return w;
	});
	for (var i in waves){
		var col = equa.children[i];
		col.innerHTML = '';
		var colHtml = '';
		for (var j=0; j<waves[i]; j++){
			colHtml += '<b></b>';
		}
		col.innerHTML = colHtml;
	}
}
equalizerDraw();
setInterval(equalizerDraw, 200);