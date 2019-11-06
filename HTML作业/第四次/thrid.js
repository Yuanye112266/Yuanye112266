function mouseright(){
	if(event.button==2){
		alert('禁止鼠标右击')
	}
	if(event.ctrlKey==1&&event.keyCode==67){
	alert('不允许拷贝')	
	}
}