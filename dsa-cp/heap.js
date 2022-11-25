/*
Heap in Data-structure in javascript
*/

class Heap{
	constructor(){
		this.arr = []
		this.size = 0
		
	}

	swap(arr,l,r){
		var temp = arr[l]
		arr[l] = arr[r]
		arr[r] = temp
	}
	insert(data){
		this.size = this.size +1
		this.arr[this.size] = data
		var i=this.size
		while(i>1){
			var p = Math.floor(i/2)
			if(this.arr[p] < this.arr[i]){
				this.swap(this.arr,p,i)
				i=p
			}else{
				return 
			}
		}
	}

	display(){
		console.log(this.arr)
	}
	
}


const heap = new Heap()
heap.insert(4)
heap.insert(5)
heap.insert(3)
heap.insert(1)
heap.insert(2)

heap.display()
