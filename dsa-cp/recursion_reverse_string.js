/*
reverse of a string using recursion in js
chaidul=ludiahc
*/
const reverseHelper = function(s,first,last){
	if(first>=last) return;
	var temp = s[first];
	s[first]=s[last];
	s[last]=temp
	reverseHelper(s,first+1,last-1);
	
}
const reverseString = function(s){
	reverseHelper(s,0,s.length-1);	
	console.log(s)
}

reverseString("chaidul");

