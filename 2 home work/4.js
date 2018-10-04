var n=prompt("Enter number of chisel");
var n=Number(n);
var res=1;
for (var i=1; i<=n; i++) {
	var p=prompt("Enter chislo");
	var p=Number(p);
	res=p*res;
}
console.log(res**(1/n))