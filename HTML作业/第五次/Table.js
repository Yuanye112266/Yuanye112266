
function check_age(){
	var reg=/[^0-9]/
	name=document.getElementById('one').value;
	age=document.getElementById('two').value;
	age_one=parseInt(age);
	con=document.getElementById('five').value;
	if(age==''){
		document.getElementById('tip_two').innerHTML='年龄不能为空';
	}
		else if(age_one<0|age_one>100){
			document.getElementById('tip_two').innerHTML='年龄必须大于零小于一百';	
		}
		else if(reg.test(age)){
			document.getElementById('tip_two').innerHTML='请输入正确的年龄格式'
			}
		else if(0<age_one<=100){
			document.getElementById('tip_two').innerHTML='';
			
		}
		
}
function check_name(){
	var reg=/[a-zA-Z]/
	var name=document.getElementById('one').value;
	if(!reg.test(name)){
		document.getElementById('tip_one').innerHTML='只能输入字母'
	}
	else{
		document.getElementById('tip_one').innerHTML=''
	}
	
}
function check_password(){
		password=document.getElementById('three').value;
		ispassword=document.getElementById('four').value;
	if(password.length<4|password.length>10|password==''){
		document.getElementById('tip_three').innerHTML='密码不能为空，长度在4~10位';
	}
	}
	function isPassword(){
		password=document.getElementById('three').value;
		ispassword=document.getElementById('four').value;
		if(!(password===ispassword)){
			document.getElementById('tip_four').innerHTML='两次输出的密码不一致';
			
		}
		
	}