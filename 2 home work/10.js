// Полином
var n=prompt("Enter n");
n=Number(n);
var x=prompt("Enter x");
x=Number(x);
var a= new Array(n);
var sum=0;
for(i=0;i<n;i++){
a[i]=prompt("Enter a"+(i+1));
a[i]=Number(a[i]);
}
for(i=0;i<n;i++){
	sum=sum+a[i]*(x**(i));
}
console.log(sum);