/*Promises topic in js*/

const promise_obj = new Promise((resolve,reject)=>{
/*promise return one function with two fuction resolve and reject*/		
	const year = 2022
	if(year===2022){
		resolve("Promise resolve done")

	}else{
		reject("promise rejected!")
	}
	
})
promise_obj.then((result)=>{
	console.log(result)
}).catch((error)=>{
	console.log(error)
})

const promise_resolve = Promise.resolve(Math.random())
console.log(promise_resolve)
