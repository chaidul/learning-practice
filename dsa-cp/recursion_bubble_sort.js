/*bubble sort in recursion in JS*/
function is_sorted(array){
	for(var i=0;i<array.length;i++){
		if(array[i]>array[i+1]){
			return false;
		}
	}

	return true;
}
var i=0;
function bubble_sort(array){
	if(is_sorted(array)){
		console.log(array)
	}else if(array[i]>array[i+1]){
		[array[i],array[i+1]]=[array[i+1],array[i]];
		i=0;
		bubble_sort(array);
	}else{
		i++;
		bubble_sort(array)
	}
}
bubble_sort([0,5,4,2,7,1,3,6,8,9])
