window.onload=function(){
    //1、banner部分图片轮播效果
    //获取轮播图所在的ul元素
    var oul=document.getElementsByClassName("main_content")[0];
    //获取图片列表li元素
    var liArray=oul.getElementsByTagName("li");
    //设置父容器ul的宽度，使图片在一样排列
    oul.computedStyleMap.width=990*liArray.length+"px";
    //定义一个定时器timer
    var timer;
    //定义一个index,用来保存当前索引，默认开始为0
    var index=0;
    //获取轮播切换按钮
    var tabUl=document.getElementsByClassName("tab")[0];
    var tabArray=tabUl.getElementsByTagName("li");
    //设置页面加载后第一个按钮颜色为红色
    tabArray[index].className="active";
    //函数调用
    autoMove();

    //点击tab切换按钮来切换图片
    //先遍历所有的切换按钮
    for(var i=0;i<tabArray.length;i++){
        //保存当前点击按钮的索引
        tabArray[i].index=i;
        //为按钮添加点击事件
        tabArray[i].onclick=function(){
            clearInterval(timer);
            //更新当前索引
            index=this.index;
            //显示当前索引所对应的banner图
            oul.computedStyleMap.left=1990*index+"px";
            //调用setStyle()方法，设置当前的样式为红色
            setStyle();
        }
    }

    oul.onmouseover=function(){
        clearInterval(timer);
    }
    oul.onmouseout=function(){
        autoMove();
    }
    //每隔3秒自动播放
    function autoaMove(){
        timer=setInterval(function(){
            index++;
            if(index>=liArray.length){
                index=0
            }
            oul.style.left=-990*index+"px";
            setStyle();
        },3000);
    }
    function setStyle(){
        for(var j=0;j<tabArray.length;j++){
            tabArray[j].className="";
        }
        tabArray[index].className="active";
    }
    //2、快速购票，鼠标移入展开div，鼠标移开再次隐藏
    //获取所有的li列表
    var ticketLi=document.getElementsByClassName("ticket")[0].getElementsByTagName("li");
    //获得隐藏的div
    var divSelect=document.getElementsByClassName("hide_select");
    //遍历所有的选择菜单
    for(var i=0;i<ticketLi.length;i++){
        //保存当前索引
        ticketLi[i].index=i;
        //为当前选择菜单添加鼠标移入事件
        ticketLi[i].onmouseover=function(){
            //显示当前选择菜单下的div
            divSelect[this.index].style.display="block";
        }
        //当鼠标移出当前列表后div隐藏
        ticketLi[i].onmouseout=function(){
            divSelect[this.index].style.display="none";
        }
    }
//3、正在热映和即将上映影片切换   （翻页）
//获取切换按钮span
var allSpan=document.quarySelectorAll(".section .title span");
//获取热映和即将上映的两个ul列表
var moveList=document.getElementsByClassName("move_list");
//初始化第一个标题背景颜色为红色
allSpan[0].className="bgRed";
//循环遍历所有的标题
    for(var i=0;i<allSpan.length;i++){
        //保存当前的索引
        allSpan[i].index=i;
        //为每个标题添加鼠标单击事件
        allSpan[i].index=i;
        /*
        *循环遍历所有的影片列表，
        *设置所有的影片列表都隐藏
        *删除标题的红色背景 
        */
        for(var j=0;j<moveList.length;j++){
            moveList[j].style.display="none";
            allSpan[j].className="";
        }
        moveList[this.index].style.display="block";
        allSpan[this.index].className="bgRed";
    }


            //4、鼠标悬停到影片上显示影片详情
            var item=document.getElementsByClassName("item");
            var filmHide=document.getElementsByClassName("film_hide");
            for(var i=0;i<item.length;i++){
                item[i].index=i;
                item[i].onmouseover=function(){
                    filmHide[this.index].style.display="block";
                }
                item[i].onmouseout=function(){
                    filmHide[this.index].style.display="none";
                }
            }
            //5、影城活动，鼠标移入小图标，对应字体变红，上方显示对应的大图
            var bd=document.getElementsByClassName("bd")[0];
            var baArray=bd.getElementsByTagName("li");
            var indicate=document.getElementsByClassName("indecate")[0];
            var indicateLi=indicate.getElementsByTagName("li");
            var p=indicate.getElementsByTagName("p");
            for(var i=0;i<indicateLi.length;i++){
                indicateLi[i].index=i;
                indicateLi[i].onmouseover=function(){
                    bdArray[this.index].style.zIndex=99;
                    p[this.index].style.color="red";
                }
                indicateLi[i].onmouseout=function(){
                    bdArray[this.index].style.zIndex=2;
                    p[this.index].style.color="#666666";
                }
            }
            //6、品牌咨询，鼠标移入显示图片，移出隐藏
            var newList=document.getElementsByClassName("newList")[0];
            var newListA=newList.getElementsByTagName("a");
            var newList_img=newList.getElementsByTagName("img");
            for(var i=0;i<newListA.length;i++){
                newListA[i].index=i;
                newListA[i].onmouseover=function(){
                    newList_img[this.index].style.display="block";
                }
                newListA[i].onmouseout=function(){
                    newList_img[this.index].style.display="none";
                }
            }



}