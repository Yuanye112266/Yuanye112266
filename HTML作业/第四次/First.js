function check(){
	var x=document.getElementById('lass').value;
	
	if(x==''){
		document.getElementById('gril').innerHTML='文本不能为空';
		// confirm('文本框不能为空');
	}
	else{document.getElementById('gril').innerHTML='';}
	
}