/*Foreach loop topic in javascript*/
/*foreach with array*/
const array=["apple","google","youtube","meta","amazon"]
array.forEach(function(value,index){
	console.log(`${index} : ${value}`)
})

/*foreach with object*/
const obj =[
{"id":1,"name":"chaidul","work":"software dev"},
{"id":2,"name":"raju","work":"mechine learing"},
{"id":3,"name":"ajay","work":"Youtuber"}
]
obj.forEach(function(value,index){
	console.log(`${index} : ${[value.id,value.name,value.work]}`)
})
