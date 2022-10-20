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
	
	//add new node
	add(data){
		var node = new Node(data)
		var last = this.head
		node.next = null
		if(this.head==null){
			node.prev = this.tail
			this.head=node
			this.tail = node
			this.tail.next = this.head
			this.size++
			return
		}
		while(last.next != this.head){
			last = last.next
		}
		last.next = node
		node.prev = last
		this.tail = node
		this.tail.next = this.head
		this.head.prev = this.tail
		this.size++
		return
	}

	insert(data,index){
		var node = new Node(data)
		var temp = this.head
		if(index==0){
		   	node.next = this.head
		    node.prev=this.tail
			this.head = node
			this.tail.next = this.head
			this.size++
			return		
		}
		for(var i=0;i<index;i++){
			if(i==index-1){
				node.next = temp.next
				node.prev = temp
				temp.next.prev = node
				temp.next = node
				this.size++	
				if(index==this.size-1){
					this.tail = node
					this.tail.next = this.head
					this.head.prev = this.tail
					return
				}			
				return
			}
			
			temp = temp.next
		}
		
		
		
	}


	//print circular doubly linkedlist
	print(head=this.head){
		do{
			console.log(head.data)
			head = head.next
		}while(head != this.head)
	}

	//test function
	test(){
		//console.log(this.head.prev.data)
	}

	
}

const ll = new Linkedlist
ll.add(1)
ll.add(2)
ll.add(4)
ll.add(5)
ll.add(6)
ll.add(7)
ll.insert(3,2)
ll.print()
//ll.test()
