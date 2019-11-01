function child(){
	var sum="";
	num=document.getElementById('two').value;
	for(i=0;i<num.length;i++){
		var s='';
		for(j=i;j<num.length;j++){
			s+=num.charAt(j)
			sum+=s;
			sum+=" ";
		}
		
		
		
	}
	document.getElementById('result').innerHTML=sum;
	
}