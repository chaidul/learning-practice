/*call function topic*/
const obj ={
	"name":"raju",
	"work":"software dev",
	"state":"assam",
	"age":20
}
/*
const getName = function(response){
	console.log(`${this.name}\nresponse :  ${response}`)
}
*/
/*add call method with parameter*/
//getName.call(obj,"iam obj");

const obj2 ={
	"name":"chaidul",
    "work":"javascript dev",
    "state":"assam,india",
    "age":21,
    "getWork":function(){
    	console.log(this.work)
    }
}
//getName.call(obj2,"iam Obj2");

obj2.getWork.call(obj)

obj2.getWork()
/*
example 1:
obj2.getWork.call(obj)
example 2:
const getName = function(response){
     console.log(`${this.name}\nresponse :  ${response}`)
 }
 
getName.call(obj,"iam obj");//add obj on getName function

*/
