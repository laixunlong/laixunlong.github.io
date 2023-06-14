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
		if(youzhi_tanchuang>0&&youzhi_tanchuang<=40)
		{
			var a=document.getElementById("youzhi_2");
			var b=document.getElementById("yanxun_2");
			var c=document.getElementById("tiaowei_2");
			var d=document.getElementById("jiulei_2");
			a.style.left=100-(2.075*youzhi_tanchuang)+"%";
			b.style.left=100+"%";
			c.style.left=100+"%";
			d.style.left=100+"%";
			youzhi_tanchuang=youzhi_tanchuang+1;
		}
		else if(yanxun_tanchuang>=0&&yanxun_tanchuang<40)
		{
			var a=document.getElementById("youzhi_2");
			var b=document.getElementById("yanxun_2");
			var c=document.getElementById("tiaowei_2");
			var d=document.getElementById("jiulei_2");
			a.style.left=100+"%";
			b.style.left=100-(2.075*yanxun_tanchuang)+"%";
			c.style.left=100+"%";
			d.style.left=100+"%";
			yanxun_tanchuang=yanxun_tanchuang+1;
		}
		else if(tiaowei_tanchuang>=0&&tiaowei_tanchuang<40)
		{
			var a=document.getElementById("youzhi_2");
			var b=document.getElementById("yanxun_2");
			var c=document.getElementById("tiaowei_2");
			var d=document.getElementById("jiulei_2");
			a.style.left=100+"%";
			b.style.left=100+"%";
			c.style.left=100-(2.075*tiaowei_tanchuang)+"%";
			d.style.left=100+"%";
			tiaowei_tanchuang=tiaowei_tanchuang+1;
		}
		else if(jiulei_tanchuang>=0&&jiulei_tanchuang<40)
		{
			var a=document.getElementById("youzhi_2");
			var b=document.getElementById("yanxun_2");
			var c=document.getElementById("tiaowei_2");
			var d=document.getElementById("jiulei_2");
			a.style.left=100+"%";
			b.style.left=100+"%";
			c.style.left=100+"%";
			d.style.left=100-(2.075*jiulei_tanchuang)+"%";
			jiulei_tanchuang=jiulei_tanchuang+1;
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
	youzhi_2();
}
function youzhi_2()
{
	youzhi_tanchuang=1;
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
	yanxun_2();
}
function yanxun_2()
{
	yanxun_tanchuang=1;
}
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
	tiaoewi_2();
}
function tiaoewi_2()
{
	tiaowei_tanchuang=1;
}
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
	jiulei_2();
}
function jiulei_2()
{
	jiulei_tanchuang=1;
}
