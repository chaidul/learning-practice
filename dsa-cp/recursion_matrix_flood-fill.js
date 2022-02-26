/*
recursion matrix flood fill problem using Js
*/
var array= [
	[1,1,1,1,1,1,1,1],
	[1,1,2,2,2,2,1,1],
	[1,1,2,2,2,2,1,1],
	[1,1,2,2,2,2,1,1],
	[1,1,2,2,2,2,1,1],
	[1,1,1,1,1,1,1,1]]

const floodFill=function(arr,r,c,toFill,prevFill){
	var row = arr.length
	var col = arr[0].length
	if(r<0||r>=row||c<0||c>=col){
		return;
	}
	else if(arr[r][c] !=prevFill){
		return;
	}
	arr[r][c]=toFill;
	floodFill(arr,r-1,c,toFill,prevFill)
	floodFill(arr,r,c-1,toFill,prevFill);
	floodFill(arr,r+1,c,toFill,prevFill);
	floodFill(arr,r,c+1,toFill,prevFill);
		
}
floodFill(array,1,2,0,2);
console.log(array)
