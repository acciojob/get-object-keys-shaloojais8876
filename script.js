//your JS code here. If required.
const student = {
	name: "shalini"
};

Object.prototype.getKeys = function() {
	//'this' is referencing to object 
	return Object.keys(this);
};