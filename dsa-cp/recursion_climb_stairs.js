/*
recursion climb stairs problem using Js
__4__
	¦____
		¦____
			¦___
				¦🚶
find number of solutions
*/
function climb(stairs){
	if(stairs<0) return 0;
	if(stairs==0) return 1;
	return climb(stairs-1)+climb(stairs-2)
}
const result = climb(5);
console.log(result)

