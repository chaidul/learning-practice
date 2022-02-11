/*Rest operator Topic*/
function rest_operator(a,b,c,...other){
	console.log(`${a},${b},${c},${other}`)	
}
/*accept all argument using ...other method (this is rest operator)*/
rest_operator(1,2,3,4,5,6);

