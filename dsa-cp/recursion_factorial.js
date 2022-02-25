/*
Recursion factorial topic in Js
1*2*3*4*5=120
*/
function factorial(n){
	if(n==0) return 1;
	return n*factorial(n-1);
}
const result=factorial(5);
console.log(result);
