//your JS code here. If required.
let student = {
	name : "shalini jaiswal"
}
Object.prototype.getkeys = function(){
	// 'this' refers to the object on which the method is called
	return Object.keys(this);
}
console.log(student.getkeys());