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
	//push element from head
	push(data){
		var node = new Node(data)
		node.next=this.head
		node.prev=null
		if(this.head != null){
			this.head.prev=node
		}
		this.head=node
	}

	//add new node
	add(data){
		var node = new Node(data)
		var last = this.head
		node.next = null
		if(this.head==null){
			node.prev = null
			this.head=node
			this.tail = node
			return
		}
		while(last.next != null){
			last = last.next
		}
		last.next = node
		node.prev = last
		this.tail = node
	}

	insert(data,index){
		var node = new Node(data)
		var temp = this.head
		if(index==0){
		   	node.next = this.head
		    node.prev=null
			 this.head = node
			 return		
		}
		for(var i=0;i<index;i++){
			if(i==index-1){
				node.next = temp.next
				node.prev = temp
				temp.next.prev = node
				temp.next = node				
				return
			}
			
			temp = temp.next
		}
		
		
		
	}
	//remove element/node
	remove(ele){
		var temp = this.head
		if(temp == null){
			console.log("empty linkedlist")
		}
		while(temp !=null){
			if(temp.data == ele){
				if(temp.prev == null){
						this.head = this.head.next
						this.head.prev = null
						return
					
				}
				if(temp.next != null){
					temp.prev.next = temp.next
					temp.next.prev = temp.prev
					return
				}
				temp.prev.next = temp.next
				this.tail = temp.prev
				return
					
				
			}
			temp = temp.next
		}
	}

	print(head=this.head){
		while(head != null){
			console.log(head.data)
			head = head.next
		}
	}

	// linkedlist display reverse
	display_reverse(tail = this.tail){
		while(tail !=null){
			console.log(tail.data)
			tail = tail.prev
		}
	}
	
}

const ll = new Linkedlist
ll.push(0)
ll.add(1)
ll.add(2)
ll.add(4)
ll.add(5)
ll.add(6)
ll.add(7)
ll.remove(7)
ll.insert(3,3)
//ll.print()
ll.display_reverse()
