/*
Backtracking sudoku solver problem in js
*/
var n=9
  var board=[];
    for(var i=0; i<n; i++){
    	 board[i]=[]
    	 for(var j=0; j<n; j++){
    	      board[i][j]=0;
    	  }
    }
/*created new board 9*9 grid*/
function isSafe(board,row,col,num){
	for(let x = 0; x <= 8; x++)	
	        if (board[row][x] == num)
	            return false;

	for(let x = 0; x <= 8; x++)	
	        if (board[x][col] == num)	
	            return false;

	let startRow = row - row % 3; 	
	let startCol = col - col % 3;
	    for(let i = 0; i < 3; i++)	    
	        for(let j = 0; j < 3; j++)	    
	            if(board[i + startRow][j + startCol] == num)	    
	           		 return false;	    
	return true;
	
	
}

function solveSudoku(board,row,col){
	if(row==n-1 && col==n) return true;
	if(col==n){
		row++;
		col=0;
	}
	if(board[row][col] !=0){
		return solveSudoku(grid, row, col + 1);
	}
	for(let num=1;num<n+1;num++){
		if(isSafe(board,row,col,num)){
			board[row][col]=num;
			 if (solveSudoku(board, row, col + 1)) return true;
		}
		board[row][col]=0;
	}
		
	 return false;
	
}
solveSudoku(board,0,0);

/*print output board*/
for(let i=0;i<n;i++)
	console.log(`${board[i]}`)
