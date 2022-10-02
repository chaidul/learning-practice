/*
binary search algorithm with recursion in js
*/
var b =[]
var arr = [1,2,3,4,5,7,8,9]
function helper(arr,l,r,num){
	if(r>=l){
	var mid= Math.floor((r+l) / 2)
	if(num==arr[mid]){
		return mid
	}if(arr[mid]>num){
		return helper(arr,l,mid-1,num)
	}
	return helper(arr,mid+1,r,num)
	}
	return -1
	
}
function binarySearch(arr,num){
	return  helper(arr,0,arr.length-1,num)
	 
}

const result = binarySearch(arr,3);
console.log(result)
