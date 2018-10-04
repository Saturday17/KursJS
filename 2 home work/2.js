var prev=1; var preprev=1; var num;
var n=prompt(n);
for(var i=1; i<=n; i++) {
	if(i==1) {num=1;}
	else {
		num=prev+preprev;
		preprev=prev;
		prev=num;
	}
	console.log(num);
}