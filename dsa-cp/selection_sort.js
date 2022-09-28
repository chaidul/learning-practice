/*
selection sort algorithm with javascript
*/
function selectionSort(array){

	for(var i=0;i<array.length;i++){
		let min=i;
		for(var j=i+1;j<array.length;j++){
			if(array[j]<array[min]){
				min=j;
			}
		}
		if(i!==min){
			temp=array[i]
			array[i]=array[min]
			array[min]=temp
		}
	}
	return array;
}

var arr = [0,4,2,8,5,9,1,3,6,7];
const result = selectionSort(arr)
console.log(result)
