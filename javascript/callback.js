/*Callback topic*/
var my_info=["raju","india"]

function show_my_info(){
	console.log(my_info)
	
}
function add_age(age,callback){
		my_info.push(age)
		callback();
}
/*
age not showing before calling
show_my_info();
*/
/*this problem solve callback function*/
add_age(20,show_my_info)


