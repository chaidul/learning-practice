/*
recursion Fibonacci number
0+1+1+2+3+5+8+13+21+34
ex:-
0+1=1
1+1=2
..
solution
f(6)
return f(n-1)+f(n-2)
output 8
*/
function fibonacci(n){
	if(n==0) return 0;
	if(n==1) return 1;
	return fibonacci(n-1)+fibonacci(n-2);
}
const result = fibonacci(6);
console.log(result)
