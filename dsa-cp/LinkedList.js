/*
LinkedList algorithm in javascript
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
    		this.size++
    	}else{
    		this.tail.next = newNode
    		this.tail = newNode
    		this.size++
    	}
    
    }

	//insert element 
	insert(element,index){
		const newNode = new Node(element);
		if(index==0){
			newNode.next = this.head;
			this.head = newNode
			this.size++
			return
		}
		var prevNode = this.head
		for(var i=0;i<index-1;i++){
			prevNode = prevNode.next
		}
		newNode.next = prevNode.next
		prevNode.next = newNode
		this.size++
		return
		
		
	}

	// removeFrom index
	removeFrom(index){
		if(index==0){
			console.log("empty linkedList")
		}
		var prevNode = this.head
		for(var i=0;i<index-1;i++){
			prevNode  = prevNode.next
		}
		prevNode.next = prevNode.next.next
		this.size--
	}

    //remove element
    removeEle(ele){
    	if(this.head==null){
    		console.log("empty linkedList");
    	}
    	var curNode = this.head
    	var prev = null
    	while(curNode !=null){
    		if(curNode.element === ele){
    			if(prev==null){
    				this.head = curNode.next
    			}else{
    				prev.next = curNode.next
    			}
    			return curNode.element
    		}
    		prev = curNode
    		curNode = curNode.next
    		this.size--
    	}
    	
    }
    //remove from nth to n Node
    removeNth(n){
    	var index=this.size-n
    	var temp = this.head 
    	for(var i=0;i<index;i++){
    		if(i==index-1){
    			temp.next = temp.next.next
    			this.size--
    			return	
    		}
    		temp = temp.next
    	}
    	return
    }
    //reverse LinkedList  
	reverse(){
		let cur = this.head,
		prev,
		temp
		while(cur){
			temp = cur.next
			cur.next = prev
			prev = cur
			cur = temp
		}
		return prev
	}
	
    //Print List
    print(node=this.head){
    console.log(`size : ${this.size}`)
    while(node != null){
    	console.log(node.element)
    	node = node.next
    }
    	
    }
    
}

const ll =new LinkedList()
ll.addNode(5)
ll.addNode(6)
ll.addNode(7)
ll.addNode(9)
ll.insert(8,3)
//ll.removeFrom(2)
//ll.removeEle(6)
//const head = ll.reverse()
ll.removeNth(3)
ll.print()
