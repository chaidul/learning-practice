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

//square(8,8)

function hollow(row,col){
	for(var i=0;i<row;i++){
		let star = ""
		for(var j=0;j<col;j++){
			if(i==0 || j==0 || i==row-1 || j==col-1){
				star +="*"
			}else{
				star +=" "
			}
		}
		console.log(star)
	}
}

hollow(6,6)
