/*
Queue in data-structure in javascript
*/
class Queue{
	constructor(){
		this.arr = []
		this.font = 0
		this.rear = -1
	}

	//add data in Rear of  queue 
	enqueue(data){
		this.rear++
		this.arr[this.rear]=data
		return true
	}

	//remove data in font of queue
	dequeue(){
		var peek = this.arr[this.font]
		this.font++
		return peek
	}

	//display font 
	peek(){
		console.log(this.arr[this.font])
	}
}

const queue = new Queue;
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

queue.dequeue();

queue.peek()
