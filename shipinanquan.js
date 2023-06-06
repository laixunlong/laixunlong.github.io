var i=-70;
var t=0;
var biankuang=0;
var zuoyi=100;
var youzhi_tanchuang=100;
var yanxun_tanchuang=100;
var tiaowei_tanchuang=100;
var jiulei_tanchuang=100;
setTimeout(function()
{
	setInterval(function ()
	{
		if(t<86)
		{
			var a=document.getElementById("youzhi");
			a.style.left=i+t+"%";
			var b=document.getElementById("yanxun");
			b.style.left=100-t+"%";
			var c=document.getElementById("tiaowei");
			c.style.left=i+t+"%";
			var d=document.getElementById("jiulei");
			d.style.left=100-t+"%";
			t=t+1;
		}
		if(t>=86&&t<96)
		{
			var a=document.getElementById("youzhi");
			a.style.boxShadow="0px 0px "+biankuang+"px "+biankuang+"px "+"#ffffff";
			var b=document.getElementById("yanxun");
			b.style.boxShadow="0px 0px "+biankuang+"px "+biankuang+"px "+"#ffffff";
			var c=document.getElementById("tiaowei");
			c.style.boxShadow="0px 0px "+biankuang+"px "+biankuang+"px "+"#ffffff";
			var d=document.getElementById("jiulei");
			d.style.boxShadow="0px 0px "+biankuang+"px "+biankuang+"px "+"#ffffff";
			biankuang=biankuang+0.4;
			t=t+1;
		}
		if(zuoyi==1||zuoyi<31)
		{
			var a=document.getElementById("youzhi");
			var b=document.getElementById("yanxun");
			var c=document.getElementById("tiaowei");
			var d=document.getElementById("jiulei");
			a.style.left=15-zuoyi/2+1+"%";
			a.style.width=70-zuoyi*1.9+"%";
			b.style.left=15-zuoyi/2+1+"%";
			b.style.width=70-zuoyi*1.9+"%";
			c.style.left=15-zuoyi/2+1+"%";
			c.style.width=70-zuoyi*1.9+"%";
			d.style.left=15-zuoyi/2+1+"%";
			d.style.width=70-zuoyi*1.9+"%";
			zuoyi=zuoyi+1;
		}
		if(youzhi_tanchuang==1)
		{
			var a=document.getElementById("youzhi_2");
			var b=document.getElementById("yanxun_2");
			var c=document.getElementById("tiaowei_2");
			var d=document.getElementById("jiulei_2");
		}
	},10);
},100);
function youzhi()
{
	zuoyi=1;
	var a=document.getElementById("youzhi");
	var b=document.getElementById("yanxun");
	var c=document.getElementById("tiaowei");
	var d=document.getElementById("jiulei");
	a.onclick=function(){youzhi_2();};
	b.onclick=function(){yanxun_2();};
	c.onclick=function(){tiaoewi_2();};
	d.onclick=function(){jiulei_2();};
}
function youzhi_2()
{
}
function yanxun()
{
	zuoyi=1;
	var a=document.getElementById("youzhi");
	var b=document.getElementById("yanxun");
	var c=document.getElementById("tiaowei");
	var d=document.getElementById("jiulei");
	a.onclick=function(){youzhi_2();};
	b.onclick=function(){yanxun_2();};
	c.onclick=function(){tiaoewi_2();};
	d.onclick=function(){jiulei_2();};
}
function yanxun_2()
{}
function tiaowei()
{
	zuoyi=1;
	var a=document.getElementById("youzhi");
	var b=document.getElementById("yanxun");
	var c=document.getElementById("tiaowei");
	var d=document.getElementById("jiulei");
	a.onclick=function(){youzhi_2();};
	b.onclick=function(){yanxun_2();};
	c.onclick=function(){tiaoewi_2();};
	d.onclick=function(){jiulei_2();};
}
function tiaoewi_2()
{}
function jiulei()
{
	zuoyi=1;
	var a=document.getElementById("youzhi");
	var b=document.getElementById("yanxun");
	var c=document.getElementById("tiaowei");
	var d=document.getElementById("jiulei");
	a.onclick=function(){youzhi_2();};
	b.onclick=function(){yanxun_2();};
	c.onclick=function(){tiaoewi_2();};
	d.onclick=function(){jiulei_2();};
}
function jiulei_2()
{}
