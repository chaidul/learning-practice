/*
Create balanced binary tree (Avl Tree) in data-structure using javascript

*/

class Node{
	constructor(data){
		this.key = data
		this.height = 0
		this.left = null
		this.right = null
	}
}

class Avl{
	constructor(){
		this.root = null
	}

	height(node){
		if(node==null) return 0;
		return Math.max(this.height(node.left),this.height(node.right))+1;
		
	}

	getBalance(node){
		if(node==null) return 0;
		return this.height(node.left) - this.height(node.right);
	}



	leftRotate(x) {
	
	          var y = x.right;
	
	          var T2 = y.left;
	 
	
	          // Perform rotation
	
	          y.left = x;
	
	          x.right = T2;
	 
	
	          // Update heights
	
	          x.height = Math.max(this.height(x.left), 
	
	          this.height(x.right)) + 1;
	
	          y.height = Math.max(this.height(y.left), 
	
	          this.height(y.right)) + 1;
	 
	
	          // Return new root
	
	          return y;
	
	        }

	        rightRotate(y) {
	        
	                  var x = y.left;
	        
	                  var T2 = x.right;
	         
	        
	                  // Perform rotation
	        
	                  x.right = y;
	        
	                  y.left = T2;
	         
	        
	                  // Update heights
	        
	                  y.height = Math.max(this.height(y.left), 
	        
	                  this.height(y.right)) + 1;
	        
	                  x.height = Math.max(this.height(x.left), 
	        
	                  this.height(x.right)) + 1;
	         
	        
	                  // Return new root
	        
	                  return x;
	        
	                }
	insert(node,data){
		if(node==null){
			return new Node(data)
		}
		if(node.key > data){
			node.left = this.insert(node.left,data)
		}
		else if(node.key < data){
			node.right = this.insert(node.right,data)
		}else{
			return node
		}

		node.height = Math.max(this.height(node.left),this.height(node.right))+1;

		var balance = this.getBalance(node)

				if (balance > 1 && data < node.left.key){
		
		          return this.rightRotate(node);
		 		}
		
		          // Right Right Case
		
		          if (balance < -1 && data > node.right.key){
		
		            return this.leftRotate(node);
		 		}
		
		          // Left Right Case
		
		          if (balance > 1 && data > node.left.key) {
		
		            node.left = this.leftRotate(node.left);
		
		            return this.rightRotate(node);
		
		          }
		 
		
		          // Right Left Case
		
		          if (balance < -1 && data < node.right.key) {
		
		            node.right = this.rightRotate(node.right);
		
		            return this.leftRotate(node);
		
		          }
		          return node
		
	}



	
}


const avl = new Avl;
var root = null;
root=avl.insert(root,5)
avl.insert(root,6)
root=avl.insert(root,7)
console.log(root)
