/*
Quick sort algorithm with recursion in Javascript
*/
var arr = [2,4,1,3]
function swap(arr,low,high){
	temp = arr[low]
	arr[low]=arr[high]
	arr[high]=temp
}
function partition(arr,low,high){
	var pivot = arr[high]
	var i=(low-1)
	for(var j=low;j<=high-1;j++){
		if(arr[j]<pivot){
			i++
			swap(arr,i,j)
		}
	}
	swap(arr,i+1,high)
	return (i+1)
}

function helper(arr,low,high){
	if(low<high){
		var pivot=partition(arr,low,high);
		helper(arr,low,pivot-1)
		helper(arr,pivot+1,high)
	}
}

function quickSort(arr){
	helper(arr,0,arr.length-1)
}
const result=quickSort(arr)
console.log(arr)

