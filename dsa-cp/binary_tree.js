
/*
Binary Tree Data-Structure in javascript
*/

class Node{
	constructor(data){
		this.data = data
		this.left = null
		this.right = null
	}
}

class BinaryTree{
	constructor(){
	        this.idx=-1
	    }
	    
	buildTree(nodes){
		this.idx++
		if(nodes[this.idx] == -1){
			return null
		}else{
			var node = new Node(nodes[this.idx])
			node.left = this.buildTree(nodes)
			node.right = this.buildTree(nodes)
		}
		return node
	}

	//Binary Tree Traversal
	preOrder(root){
		if(root == null){
			console.log(-1)
			return
		}
		console.log(root.data)
		this.preOrder(root.left)
		this.preOrder(root.right)
	}

	inOrder(root){
		if(root == null){
			 console.log(-1)
		      return
		 }
		this.inOrder(root.left)
		console.log(root.data)
		this.inOrder(root.right)
	}

	postOrder(root){
		
	}

	
}

var nodes = [1,2,-1,-1,3,-1,4,-1,-1]
var tree = new BinaryTree
var root = tree.buildTree(nodes)
//tree.preOrder(root)
tree.inOrder(root)
