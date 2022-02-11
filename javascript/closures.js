/*closures Topic*/
 /* phone number encrypted & decryoted using closures*/
function main(num,key){
	const hash = num*key;
	console.log(`output encrypt hash number : ${hash}`);
	/*This is a closures*/
	return ()=>{
		return `hash decrypt : ${hash/key}`;		
}
}
/*calling main function*/
const inner_func=main(9678792813,7);
/*calling inner(closues) function*/
console.log(inner_func());

