/*
calculate power using recursion:- a^b.
ex:- 3*3*3=27
*/
function power(a,b){
	if(b==0){
		return 1
	}
	return a*power(a,b-1)
}
const result = power(3,3)
console.log(result)
