/*Recursive function topic in javascript (Dsa-Cp)*/
var i=0;
function recursive_fun(){
	i++;
	console.log(i)
	/*base case*/
	if(i>10){
		 return true;
	}else{
		recursive_fun();
		
	}
}
recursive_fun();
