/*
Heap in data-structure in Priority Queue in javascript

*/

class QEle{
	constructor(ele,pri){
		this.ele = ele
		this.pri = pri
	}
}

class PriorityQueue{

	constructor(){
		this.items = []
	}

	enqueue(element, priority)
	{		
	    var Qele = new QEle(element, priority);	
	    var contain = false;	
	    for (var i = 0; i < this.items.length; i++) {	
	        if (this.items[i].pri > Qele.pri) {	
	            this.items.splice(i, 0, Qele);	
	            contain = true;	
	            break;
	        }
	    }	 		
	    if (!contain) {
	
	        this.items.push(Qele);
	    }
	    
	}

	
	dequeue()
	{	
	    if (this.isEmpty())
	
	        return "Underflow";
	
	    return this.items.shift();
	}
	

	isEmpty()
	{
		    return this.items.length == 0;
	}

	// front function
	front()
	{	
	
	    if (this.isEmpty())
	
	        return "No elements in Queue";
	
	    return this.items[0];
	}

	rear(){
		if(this.isEmpty())
		
			return "No elements in Queue";
		return this.items[this.items.length-1]
		
	}

	printItem(){
		return this.items
	}

	


	
}




const priQ = new PriorityQueue;
priQ.enqueue(5,4)
priQ.enqueue(3,2)
priQ.enqueue(4,3)
priQ.enqueue("Last Priority",7)
priQ.enqueue(2,1)
priQ.enqueue(7,6)
priQ.enqueue(6,5)

priQ.dequeue()


const front = priQ.front()
const items = priQ.printItem()
const rear = priQ.rear()

console.log(items)
