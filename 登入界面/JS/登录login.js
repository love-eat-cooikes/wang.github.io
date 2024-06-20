//使用ajax和json实现用户登录验证
window.onload = function() {
	//获取用户名和密码框
	var input = document.getElementsByTagName("input");
	//获取用于提示的span元素
	var span = document.getElementsByTagName("span")[0];
	//获取登录按钮
	var loginBtn=document.getElementById("loginBtn");
	//1、创建XMLHttpRequest对象
	var xhr = new XMLHttpRequest();
	if (window.ActiveXObject) { // IE浏览器的创建方式
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	} else if (window.XMLHttpRequest) { // Netscape浏览器中的创建方式
		xhr = new XMLHttpRequest();
	}
	//2、创建http请求
	xhr.open("GET", "json/user.json", true);
	//3、发送请求
	xhr.send();
	//4、设置响应http请求状态变化的事件
	xhr.onreadystatechange = function() {
		// 判断异步调用是否成功
		if (xhr.readyState == 4 && xhr.status == 200) {
			//获得从服务器端返回的数据
			var jsonData = xhr.responseText;
			//将获取到的json数组对象转换为js数组对象
			var data = JSON.parse(jsonData);
			loginBtn.onclick=function(){
				//获取用户输入信息
				var userName = input[0].value;
				var password = input[1].value;
				//初始化假设用户输入的不正确
				span.innerHTML = "用户名或密码不正确";
				//遍历json数组
				for (var i = 0; i < data.length; i++) {
					//判断用户名，如果json中存在，则提示用户名正确，；如果不存在，则提示不正确
					if (data[i].user == userName) {
						//判断用户输入的密码是否正确
						if(data[i].password==password){
							//如果用户名和密码都正确，则清空span中的文本内容，且登录成功，进入首页
							span.innerHTML = "";
							location.href="index2.html";	
						}
					}	
				}						
			}
		}
	}
}

