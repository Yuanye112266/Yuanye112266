function sort(){
	let car=[5,3,2,8];
	
	for(var i=0;i<car.length-1;i++){
		
		for(var j=0;j<car.length-i-1;j++){
			
		if(car[j]<car[j+1]){
			let tep=car[j];
			car[j]=car[j+1];
			car[j+1]=tep;
			
			
		}
		}
	}

console.log(car);
// alert(tep);
}