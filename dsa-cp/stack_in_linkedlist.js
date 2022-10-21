/*
Stack implement using Linkedlist in javascript
*/
class Node{
	constructor(top){
		this.top = top
		this.next = null
	}
}
class Stack{
	constructor(){
		this.head = null
		this.size = 0
	}

	push(top){
		var node = new Node(top)
		node.next = this.head
		this.head = node
		this.size++
		return node
	}

	pop(){
		if(this.head==null){
		return "stack empty"
		}else{
		var temp = this.head.next
		this.head = temp
		this.size--
		}
	}
	
	top(){
		if(this.head==null) return "stack empty"
		 else console.log(this.head.top)
	}

	empty(){
		var status = this.head == null
		console.log(status)
	}
}

let stack =new Stack;
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.push(7)

stack.pop()
stack.pop()
stack.pop()

stack.top()

stack.empty()
