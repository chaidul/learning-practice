1/*
Backtracking N Queen problem in Js
*/
let board = [
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0]]

var n = board.length

function printSolution(board)
{
    for(let i = 0; i < n; i++)
  		  {
            console.log(`${board[i]}`)
      	  }
 }
        


function isSafe(board,row,col){
	let i,j;
	for(i=0;i<n;i++){
		if(board[row][i]==1) return false;
	}
	for(i=row,j=col;i>=0 && j>=0;i--,j--){
		if(board[i][j]==1) return false;
	}
	for(i=row,j=col;i<n && j>=0;i++,j--){
		if(board[i][j]==1) return false;
	}
	return true;
}


function n_queen(board,col){
	if(col>=n) return true
	for(let i=0;i<n;i++){
		if(isSafe(board,i,col)){
			board[i][col]=1
			if(n_queen(board,col+1)) return true
			else board[i][col]=0			
			}		
	}
	return false		
}

if(n_queen(board,0)==false){
	console.log("Solution does not exist")
	return false;
}else{
	printSolution(board);
	return true;
}
