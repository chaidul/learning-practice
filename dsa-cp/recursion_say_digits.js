/*
say Digits from number in recursion using Js
1=one
2=two
45=four,five
*/
var arr=["zero","one","two","three","four","five","six","seven","eight","nine"];
function say_digit(n,array){
	if(n==0){
		return;
	}
	 var digit=Math.floor(n%10);
	 n=Math.floor(n/10);
	 console.log(array[digit]);
	 return say_digit(n,array);
	 
	
}
say_digit(321,arr);
