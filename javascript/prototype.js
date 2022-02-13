/*prototype topic in javascript*/
/*example 1*/
const obj = {
	"name":"Chaidul",
	"city":"guwahati",
	"work":"software dev",
	"getCountry":function(){
		return this.country
	}
}

/*inheritance  obj from obj2*/
const obj2 = {
	"roll-no":7,
	"state":"assam",
	"country":"india",
	"getName":function(){
        return this.name
    },
	__proto__:obj
	
}
const result2 = obj2.city;
/*console.log(result2);*/

/*example 2*/
function main(){

}
main.prototype.a=10
main.prototype.fun = function(){
	return 2022
}
var func_obj = new main()
/*
console.log(func_obj.__proto__.a)
console.log(func_obj.__proto__.fun())
*/
/*example 3*/
var arr = [2,3,5,2,4,9,8]
Array.prototype.showSorted = function(){
	return this.sort()
}
console.log(arr.showSorted())



