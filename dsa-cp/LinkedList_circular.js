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

    //insert node/element 
    insert(data,index){
    	const newNode = new Node(data);
    	if(index==0){
    		newNode.next = this.head
    		this.head = newNode
    		this.tail.next = this.head
    		return
    		this.size++
    	}
    	var prevNode = this.head
    	for(var i=0;i<index-1;i++){
    		prevNode = prevNode.next
    	}
    	if(prevNode.next.element == this.head.element){
    		this.tail = newNode
    	}
    	newNode.next = prevNode.next
    	prevNode.next = newNode
    	this.size++
    	return
    	
    	
    }
	
    //Print List
    print(node=this.head){
    do{
    	console.log(node.element)
    	node = node.next
    }while(node!=this.head)
    	
    }

    //test function
    test(node=this.head){
    	var tail = this.tail
    	//console.log(tail.next.element)
    }
    
}

const ll =new LinkedList()
ll.addNode(5)
ll.addNode(6)
ll.addNode(7)
ll.addNode(9)
ll.insert(4,4)
ll.print()
//ll.test()
