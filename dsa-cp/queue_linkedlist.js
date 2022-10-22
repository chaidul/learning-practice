/*
Queue implement using Linkedlist in javascript
*/
class Node{
	constructor(data){
		this.data = data
		this.next = null
	}
}

class Queue{
	constructor(){
		this.font = null
		this.rear = null
		this.size = 0
	}

	enqueue(data){
		var node = new Node(data);
		if(this.size==0){
			this.font = this.rear = node
			this.size++
			return
		}
		this.rear.next = node
		this.rear = node
		this.size++
		return this.rear
	}

	dequeue(){
		var temp = this.font.next
		this.font = temp
		this.size--
		
	}

	peek(){
		console.log(this.font.data)
	}
	
	
}

const queue = new Queue;
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)

queue.dequeue();
queue.dequeue();


queue.peek()
