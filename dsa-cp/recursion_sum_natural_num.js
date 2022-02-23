/*
find sum of first n natural number using recursion
ex:-
1+2+3+4+5=15
*/
function sum(n){
	if(n==1){
		return 1;
	}
	return n+sum(n-1)
	/*
		5+sum(n-1)|sum(5-1)|sum(4)
							 👇
							 return 4+sum(n-1)
		5+4 ......................... result 15

	*/
}
const result= sum(5);
console.log(result)
