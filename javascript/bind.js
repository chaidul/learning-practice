/*Bind method topic*/
/*
bind method same as call method
bind method return a copy, store a varible and print the variable.
*/
const obj={
	"name":"chaidul",
	"work":"web dev"
}
const getName=function(){
	console.log(getName)
}
const result=getName.bind(obj)
console.log(result)
