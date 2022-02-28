/*
Recursion palindrome string using Js
ex:- aba=aba (same on reverse string(this is a palindrome))
*/
function isPalindrome(s,l,r){
	if(l>=r) return true;
	else if(s[l]!=s[r]) return false;
	return isPalindrome(s,l+1,r-1);
}

function palindrome(s){
	return isPalindrome(s,0,s.length-1);
}
const result=palindrome("aba");
console.log(result)
