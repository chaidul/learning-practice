/*
javascript hashmap 

*/

class Hashmap{
	constructor(){
		this.data = {}
		this.size = 0
	}
	add(key,val){
		this.data[key] = val
		this.size++
	}
	put(key,val){
		this.data[key] = val
	}
	Get(key){
		return this.data[key]
	}
	remove(key){
		delete this.data[key]
		this.size--
	}
	size(){
		return this.size
	}
	
	
	
}

var hashmap = new Hashmap;
hashmap.add(1,"raju")
hashmap.add(2,"chaidul")
hashmap.add(3,"micky layers")
hashmap.add(4,"coding")
hashmap.add(5,"scientice")

//console.log(hashmap.size)
//console.log(hashmap.Get(3))
//hashmap.put(5,"cuties_of_world_")
//hashmap.remove(5)

console.log(hashmap)
