/*
Recursion subset sum problem in javascript
find sum=N given this array
*/
function helper(arr,sum,temp,i){
	if(sum==temp){
		return true;
	}
	else if(i>=arr.length){
		return false;
	}
	var reCall1 = helper(arr,sum,temp+arr[i],i+1);
	var reCall2 = helper(arr,sum,temp,i+1);
	return reCall1 || reCall2;
}
function subsetSum(arr,sum){
	return helper(arr,sum,0,0);
}
var array = [3,34,4,12,5,2];
var result = subsetSum(array,9);
console.log(result);
