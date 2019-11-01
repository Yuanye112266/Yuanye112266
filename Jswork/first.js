function flowers(){
	num=document.getElementById('one').value;
	var x=num%10;
	var y=(parseInt(num/10))%10;
	var z=parseInt(num/100);
	if(x*x*x+y*y*y+z*z*z==num){alert('是水仙花数')}
	else{alert('不是水仙花数')}
}