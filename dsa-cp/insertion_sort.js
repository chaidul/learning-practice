/*
insertion sorting algorithm with Js
*/
var arr=[8,2,4,1,3]
const insertionSort=(arr)=>{
	for(var i=1;i<arr.length;i++){
		cur=arr[i];
		j=i-1;
		while(j>=0&&arr[j]>cur){
			arr[j+1]=arr[j];
			j--;
		}
		arr[j+1]=cur;
	}
	return arr;
}

const result=insertionSort(arr);
console.log(result)
