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

	insert(data,index){
		var node = new Node(data)
		
		
		
	}
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
//ll.insert(3,3)
ll.print()
