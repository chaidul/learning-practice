/*
Stack in Data-Structure in Javascript"
*/
class Stack{
	constructor(){
		this.top=-1
		this.arr = []
	}

	//add data in stack
	push(data){
		this.top++
		this.arr[this.top]=data
	}
	//remove top in stack
	pop(){
		this.top--
	}

	//display top data in stack
	Top(){
		console.log(this.arr[this.top])
	}

	//empty status in stack
	empty(){
		var status=this.top < 0;
		console.log(status)
	}
	
}
var stack = new Stack;
//add data in top
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.push(7)

//remove Top
stack.pop()
stack.pop()
stack.pop()

//display Top
stack.Top()

// empty status
stack.empty()
