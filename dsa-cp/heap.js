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


	heapify(arr,n,i){
		let large = i
		let l= 2*i
		let r=2*i+1
		if(l<n && arr[l]> arr[large]){
			large=l
		}
		if(r<n && arr[r]> arr[large]){
			large=r
		}
		if(large !=i){
			this.swap(arr,i,large)
			this.heapify(arr,n,large)
		}
		
	}
	remove(arr,n){
		arr[1]=arr[n]
		arr.pop()
		n=n-1
		var i=1

		this.heapify(arr,n,i)
		
	}

	display(){
		return this.arr
	}
	
}


const heap = new Heap()
heap.insert(4)
heap.insert(5)
heap.insert(3)
heap.insert(1)
heap.insert(6)
heap.insert(2)

var arr = heap.display()
var n = arr.length-1
console.log(arr)

 heap.remove(arr,n)
//arr = heap.display()
//heap.remove(arr,n-1)

arr = heap.display()
console.log(arr)
