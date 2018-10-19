// Арксинус по ряду тейлора
var n=prompt("Enter n");
n=Number(n);
var x=prompt("Enter x");
x=Number(x);
function factorial(n)
{
	if(n==1||n==0)
		return 1;
	return n*factorial(n-1);
}
var sum=0;
for (var i=0; i<n; i++)
{
	if (i==0)
	{
		sum=x;
		console.log(sum);
	}
	 else sum=sum+factorial((2*n)) / ((4**n)*(factorial(n)**2)*(2*n+1))*(x**(2*n+1));
}
console.log(sum);