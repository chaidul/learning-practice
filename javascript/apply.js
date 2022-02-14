/*apply method topic*/
/*
apply method similar as call method, 
apply help multiple param with array on Function
*/
const obj={
	"name":"raju",
	"work":"software dev",
}
const addSkill = function(skill){
	console.log(`${this.name}.\n my skill : ${skill}`)
}
addSkill.call(obj,["linux","javascript","python","php"])
