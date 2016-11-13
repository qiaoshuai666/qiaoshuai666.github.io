
function dayscount(){
	var d1 = new Date();
	var d2 = new Date("2013/8/21");
	var days = (d1.getTime()-d2.getTime())/(1000*60*60*24);
	return days;
}


