/*
Binary Search Tree in data-structure insert, search, delete & other operation  in javascript

*/

class Node{
	constructor(data){
		this.data = data
		this.left = null
		this.right = null
	}
}

class BST{
	
	insert(root,data){
		if(root==null){
			return new Node(data)
		}
		if(root.data > data){
			root.left = this.insert(root.left,data)
		}
		if(root.data < data){
			root.right = this.insert(root.right,data)
		}
		return root
	}

	inOrder(root){
		if(root==null) return null;
		this.inOrder(root.left)
		console.log(root.data)
		this.inOrder(root.right)
		
	}
	
}

let bst = new BST;
var root = null
root = bst.insert(root,5)
bst.insert(root,1)
bst.insert(root,2)
bst.insert(root,3)
bst.insert(root,4)
bst.insert(root,6)
bst.insert(root,7)
bst.insert(root,8)
bst.insert(root,9)

/*BST inOrder traversal always display sorted nodes*/
bst.inOrder(root)
