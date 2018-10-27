var company = {
	employer: [{
	name: "Ivan",
	age: 37,
	department: "Cleaning",
	salary: 400
	},
	{
	name: "Richard",
	age: 45,
	department: "Security",
	salary: 600
	},
	{
	name: "Dmitry",
	age: 20,
	department: "Development",
	salary: 700
	},
	{
	name: "Rusland",
	age: 21,
	department: "Cleaning",
	salary: 200
	},
	{
	name: "Petya",
	age: 20,
	department: "Development",
	salary: 600
	},
	{
	name: "Vasya",
	age: 20,
	department: "Development",
	salary: 900
	},
	{
	name: "Fedya",
	age: 20,
	department: "Cleaning",
	salary: 700
	},
	{
	name: "Pasha",
	age: 20,
	department: "Security",
	salary: 700
	}],
}
var develop = company.employer.filter(el => el.department === "Development");
var clean = company.employer.filter(el => el.department === "Cleaning");
var secur = company.employer.filter(el => el.department === "Security");
console.log(develop);
console.log(clean);
console.log(secur);
resDev = develop.reduce((max, curr) => {
	return max.salary > curr.salary ? max.name : curr.name;
});
resCl = clean.reduce((max, curr) => {
	return max.salary > curr.salary ? max.name : curr.name;
});
resSec = secur.reduce((max, curr) => {
	return max.salary > curr.salary ? max.name : curr.name;
});
console.log("Работники с самой большой з/п в своём отделе: \n"+"Development: "+resDev +"\n"+"Cleaning: "+resCl +"\n"+"Security: "+resSec);
var averageSalDev=0, averageAgeDev=0, averageSalCl=0, averageAgeCl=0, averageSalSec=0, averageAgeSec=0;
for (var i in develop){
	averageSalDev = averageSalDev+develop[i].salary;
	averageAgeDev = averageAgeDev+develop[i].age;
}
console.log("Средняя зп для отдела Development: "+Math.round(averageSalDev/develop.length)+"\nСредний возраст для отдела Development: "+ Math.round(averageAgeDev/develop.length));
for (var i in clean){
	averageSalCl = averageSalCl+clean[i].salary;
	averageAgeCl = averageAgeCl+clean[i].age;
}
console.log("Средняя зп для отдела Cleaning: "+Math.round(averageSalCl/clean.length)+"\nСредний возраст для отдела Cleaning: "+ Math.round(averageAgeCl/clean.length));
for (var i in secur){
	averageSalSec = averageSalSec+secur[i].salary;
	averageAgeSec = averageAgeSec+secur[i].age;
}
console.log("Средняя зп для отдела Security: "+Math.round(averageSalSec/secur.length)+"\nСредний возраст для отдела Security: "+ Math.round(averageAgeSec/secur.length));
maxSelDev = develop.reduce((max, curr) => {
	return max.salary > curr.salary ? max.salary : curr.salary;
});
maxSelCl = clean.reduce((max, curr) => {
	return max.salary > curr.salary ? max.salary : curr.salary;
});
maxSelSec = secur.reduce((max, curr) => {
	return max.salary > curr.salary ? max.salary : curr.salary;
});
console.log("Средний показатель среди максимальных з/п всех отделов: "+Math.round((maxSelDev+maxSelCl+maxSelSec)/3));