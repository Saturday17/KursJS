// Проверка строки
var str=prompt("Enter string");
str=String(str);
var flag=0, s1=0, s2=0, s3=0;
for(var i=0; i<str.length; i++){
	if (str[i]=='('||str[i]==')'){flag++
		if (str[i]=='(') s1++;
		else if (str[i]==')') s2++;
	}
	if (s1<s2){
		s3=1;
		break;
	}
}
	if (flag==0) alert("In string there are no one skobka");
	else if (s1==s2 && s3==0) alert("String is correct");
	else (alert("String is not correct"));