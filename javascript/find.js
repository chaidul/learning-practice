/*find function topic*/
var array = [1,2,3,5,6,7,8] 
const result = array.find(value=>value>5);
console.log(result);

var json_array = [
	{"id":1,"name":"raju"},
	{"id":2,"name":"chaidul"},
	{"id":3,"name":"ajay"},
	{"id":4,"name":"steve jobs"},
	{"id":5,"name":"elon musk"}
]
const result2 = json_array.find(x=>x.id===4);
console.log(result2);
