/*
permutations of string in recursion in Js
ex:- ABC. 
ABC ACB BAC BCA CBA CAB
*/
function swap(a,i,r){
	
	let temp;
	
	let charArray = a.split("");
	temp = charArray[i] ;
	charArray[i] = charArray[r];
	charArray[r] = temp;
	return (charArray).join("");
	
}
function subSet(s,l,r){
	if(l==r){
		console.log(s);
		return;
	}
	for(var i=l;i<=r;i++){
		s=swap(s,l,i);
		subSet(s,l+1,r);
		s=swap(s,l,i);
	}
}

function permutations(s){
	subSet(s,0,s.length-1);
	
}
	
permutations("abc");
