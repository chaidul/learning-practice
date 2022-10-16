/*
circular LinkedList algorithm in javascript
2 -> 3 -> 4 -> 5 -> 6

*/

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

//circular linkedlist class
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
    		this.tail.next = this.head
    	}else{
				this.tail.next = newNode
				this.tail = newNode
				this.tail.next = this.head
    		 
    	}
    	this.size++
    }
	
    //Print List
    print(node=this.head){
    do{
    	console.log(node.element)
    	node = node.next
    }while(node!=this.head)
    	
    }
    
}

const ll =new LinkedList()
ll.addNode(5)
ll.addNode(6)
ll.addNode(7)
ll.addNode(9)
ll.print()
