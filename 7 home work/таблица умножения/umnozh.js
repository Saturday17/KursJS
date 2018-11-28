var table = document.createElement("table");
document.body.appendChild(table);
table.innerHTML = "<tbody></tbody>";
table.setAttribute("border", 2);
var tbody = table.children[0];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i in numbers){
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	var str = "";
	numbers.forEach(function(item){
		str += "<td>"+item+"</td>";
	});
	tr.innerHTML = str;
	tbody.appendChild(tr);
}