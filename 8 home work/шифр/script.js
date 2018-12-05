var text1 = document.getElementById('text1');
var text2 = document.getElementById('text2');
var shif = document.getElementById('shif');
var deShif = document.getElementById('deShif');


shif.addEventListener('click', function(){
	shifrString(1, text1.value);
})
deShif.addEventListener('click', function(){
	shifrString(2, text2.value);
})

function shifrString(a, b){
	var str1='АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯ', str2='абвгдеёжзийклмнопрстуфхцчшщьыъэюя', 
	if(a = 1){
		b = text1.value;

	}else if(a = 2){

	}
}