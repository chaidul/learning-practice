const info = {
	"name":"raju",
	"city":"guwahati",
	"age":19
	
}
/*this is so complex proccess, Bad code*/
/*
let show_name = info.name
let show_city = info.city
console.log(`${show_name}, ${show_city}`);
*/
/*good code*/
/*rest operator*/
let {...rest} = info
console.log(rest)

/*sprade operator*/
/*
let {name,city,age}=info
console.log(`${name}, ${city},${age}`);
*/
/*change age*/
let update_age = {
	...info,
	"age":20	
}
/*Age uodated*/
console.log(update_age);
