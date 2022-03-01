/*
print all subsequences or powerset of a given string using Recursion in Js

*/
function powerSet(s,i,cs){
	if(i==s.length){
		console.log(cs)
		return;
	}
	powerSet(s,i+1,cs+s[i]);
	powerSet(s,i+1,cs);
}
powerSet("abc",0,"");
