var ctboxs=document.getElementById('ct1');
var ctbox=ctboxs.getElementsByClassName('ctbox');
var title=ctboxs.getElementsByClassName('title');
var titleWidth=60;
var contentWidth=470;
for (var i=0;i<title.length;i++){
	title[i].index=i;// 把序号保存到自定义的index属性中
	title[i].onclick=function(){
		n=this.index;// 点击的序号记为n
		for(var i=0;i<ctbox.length;i++){
			if(i<=n){
				// ctbox序号小于等于n的时候ctbox的left值计算公式为序号*titleWidth
				ctbox[i].style.top=i*titleWidth+'px';
			}else{
				// ctbox序号大于n的时候ctbox的left值计算公式为序号*titleWidth+contentWidth
				ctbox[i].style.top=i*titleWidth+contentWidth+'px';
			}
		}
	}
}


/*
点击第0个标题
0 650px 710px 770px
点击第1个标题
0 60px 710px 770px
点击第2个标题
0 60px 120px 770px
点击第3个标题
0 60px 120px 180px
 */