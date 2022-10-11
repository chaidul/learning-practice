/*
Doubly LinkedList DSA in javascript
*/
class Node{
	constructor(data){		
		this.data=data;
		this.prev=null;
		this.next=null;
	}
	
}
class Linkedlist{
	constructor(){
		this.head=null;
		this.tail=null;
		this.size=null;
	}

	push(data){
		var node = new Node(data)
		node.next=this.head
		node.prev=null
		if(this.head != null){
			this.head.prev=node
		}
		this.head=node
	}

	
	add(data){
		var node = new Node(data)
		var last = this.head
		node.next = null
		if(this.head==null){
			node.prev = null
			this.head=node
			return
		}
		while(last.next != null){
			last = last.next
		}
		last.next = node
		node.prev = last
	}



	print(head=this.head){
		while(head != null){
			console.log(head.data)
			head = head.next
		}
	}
	
}

const ll = new Linkedlist
ll.push(0)
ll.add(1)
ll.add(2)
ll.add(3)
ll.add(4)
ll.add(5)
ll.print()
