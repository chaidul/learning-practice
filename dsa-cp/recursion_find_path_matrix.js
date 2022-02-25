/*
console.log(`
 "find all the paths in a N*M matrix"
 ___________________
¦___¦___¦___¦___¦___¦
¦___¦___¦___¦___¦___¦
¦___¦___¦___¦___¦___¦
¦___¦___¦___¦___¦___¦
¦___¦___¦___¦___¦___¦
¦___¦___¦___¦___¦___¦
`)

*/

function paths(n,m){
	if(n==1||m==1){
		return 1;
	}
	return paths(n,m-1)+paths(m,n-1)
}
const result = paths(3,3)
console.log(result)
