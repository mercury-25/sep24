var triangle={
	ab:4,
	bc:5,
	ac:function(){
		sss = (this.ab*this.ab)+(this.bc*this.bc);
		return Math.sqrt(sss);
	}
};
console.log(triangle.ac());

var gipotenuza=(function(a,b){
	aaa=(a*a)+(b*b);
	return Math.sqrt(aaa);
}(4,5));
console.log(gipotenuza);

var storona=function cc(aa,bb) {
	gip=(aa*aa)+(bb*bb);
	return Math.sqrt(gip);
}
console.log(storona(4,5));