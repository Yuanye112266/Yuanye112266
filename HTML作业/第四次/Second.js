function checktime (){
	date=new Date();
	x=date.getHours();	
	if(13<x<24){
		confirm('下午好')
	}
	else if(0<x<12){
		confirm('早上好')
	}
}