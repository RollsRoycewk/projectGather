// var a=123;
// ;(function(window){
// 	var a=123;
// 	var b=234;
// 	function fun(){
// 		console.log(a,b)
// 	}
// 	window.fun=fun;
// })(window)

// var a=123(function(){})()

var arr=[1,3,5,7];
arr.reduce((pre,next)=>{
	console.log(pre,next)
	return pre+next
},0)