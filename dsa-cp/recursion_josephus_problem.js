/*
recursion josephus problem using js
*/
function josephus(n,k){
	if(n==1) return 0;
	return (josephus(n-1,k)+n)/n;
}
const result = josephus(5,3);
console.log(result)
