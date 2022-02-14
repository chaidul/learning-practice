/*async help asynchronous execution*/
const random = function(){
	return Promise.resolve(Math.random());
}
const main =async function(){
	let a = await random();
	let b = await random();
	/*without async*/
	let c =  random();
	console.log(`${a}\n${b}\n${c}`)
}
main();/*calling main function*/


