// User defined class node
class Node{
	constructor(element){
		this.element = element;
		this.next = null
	}
	getValue(){
		return this.element
	}
	setNext(node){
		this.next=node
	}
	getNext(){
		return this.next
	}
}

// linkedlist class
class LinkedList {
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
 
    // functions to be implemented
    // add(element)
    addNode(node){
    	const newNode = new Node(node)
    	if(this.size==0){
    		this.head = this.tail = newNode
    	}else{
    		this.tail.next = newNode
    		this.tail = newNode
    	}
    	this.size++
    }

    //Print List
    print(){
    	let temp = this.head
		let str =""
    	while(temp){
    		str =str + '' + temp.getValue()
    		if(temp.getNext()){
    			str = str + " -> "
    		}
    		temp = temp.getNext()
    	}
    	console.log(str)
    }
    
}

const ll =new LinkedList()
ll.addNode(5)
ll.addNode(6)
ll.addNode(7)
ll.print()
