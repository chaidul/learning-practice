
/*
Heap Sort algorithm using javascript

*/

class Heap{
	constructor(){
		this.arr = []
	}

	swap(arr,l,r){
		var temp = arr[l]
		arr[l] = arr[r]
		arr[r] = temp
		return arr
	}

	heapify(arr,n,i){
		var large = i
		var l = 2*i
		var r =2*i+1
		if(l<n && arr[l]>arr[r]){
			large =l
		}
		if(r<n && arr[r]>arr[l]){
			large =r
		}
		if(large != i){
			this.swap(arr,large,i)
			this.heapify(arr,n,large)
		}
	}

	buildHeap(arr,n){
		for(var i=Math.floor(n/2);i>0;i--){
			this.heapify(arr,n,i)
		}
		return arr
		
	}

	heapSort(arr,n){
		for(var i=n;i>1;i--){
			this.swap(arr,1,i)
			this.heapify(arr,i-1,1)
		}
		console.log(arr)
		
	}
	



	
}

const heap = new Heap;

var arr = [,1,3,2,6,9,4,7,8,5]
var n = arr.length-1

arr = heap.buildHeap(arr,n)
n = arr.length-1


heap.heapSort(arr,n)

