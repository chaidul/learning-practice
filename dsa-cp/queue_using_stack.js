/*
Queue data-structure using Stack in javascript
*/

class Queue{
	constructor(){
		this.s1 = []
		this.s2 = []
	}

	add(data){
		while(this.s1.length >= 1){
			this.s2.push(this.s1.pop())
		}
		this.s1.push(data)
		while(this.s2.length >= 1){
			this.s1.push(this.s2.pop())
		}
	}

	pop(){
		var font = this.s1.pop()
		return font
	}

	peek(){
		console.log(this.s1[this.s1.length-1])
	}
}

const queue = new Queue
queue.add(1)
queue.add(2)
queue.add(3)
queue.add(4)
queue.add(5)
queue.add(6)
queue.add(7)

queue.pop()

queue.peek()
