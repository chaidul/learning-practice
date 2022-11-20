/*
Pattern question in javascript
*/

function square(row,col){
	for(var i=0;i<row;i++){
		let star = ""
		for(var j=0;j<col;j++){
			star +="*"
		}
		console.log(star)
	}
}

square(8,8)
