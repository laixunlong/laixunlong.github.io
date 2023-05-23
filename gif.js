var i=0;
var t=0;
setTimeout(function ()
{
	var v=document.getElementById("main");
	var v1=document.getElementById("A1");
	var v2=document.getElementById("A2");
	var v3=document.getElementById("A3");
	var a=window.innerWidth;
	var b=v.clientHeight;
	v1.style.left=a/2-610+"px";
	v2.style.left=a/2-610+430+"px";
	v3.style.left=a/2-610+430+430+"px";
	var i=1;var j=0;var g=0;
	var x=0;
	var cha=0;
	var bian=0;
	var fudong_shang=b/2-180;
	var fudong_xia=b/2-180;
	/*clearInterval*/
	var jishiqi=setInterval(function ()
		{
			if(-360+i*i<b-360)/*下落*/
			{
				v1.style.top=-360+i*i+"px";
				v2.style.top=-360+i*i+"px";
				v3.style.top=-360+i*i+"px";
				i=i+0.3;
			}
			if(-360+i*i>b-360&&x==0)/*到底*/
			{
				v1.style.top=b-360+"px";
				v2.style.top=b-360+"px";
				v3.style.top=b-360+"px";
				x=1;
				j=i-0.3;
				cha=i*i-j*j;
				zhi=cha;
			}
			if(x>0&&x<100)/*反弹*/
			{	
				if(b-360-cha>b/2-180&&zhi>0)
				{
					v1.style.top=b-360-cha+"px";
					v2.style.top=b-360-cha+"px";
					v3.style.top=b-360-cha+"px";
					g=b-360-cha;
					cha=cha+zhi-0.8;
					zhi=zhi-0.8;
				}
				else
				{
					if(g>b/2-180)
					{
						g=g-1;
						v1.style.top=g+"px";
						v2.style.top=g+"px";
						v3.style.top=g+"px";
					}
					else
					{
						x=101;
					}
				}	
			}
			if(x>100&&x<200)
			{
				if(fudong_shang>b/2-180-20)
				{
					fudong_shang=fudong_shang-0.2;
					fudong_xia=fudong_xia+0.2;
					v1.style.top=fudong_shang+"px";
					v2.style.top=fudong_xia+"px";
					v3.style.top=fudong_shang+"px";
				}
				else
				{
					x=200;
					fudong();
				}
				if(bian<6)
				{
					bian=bian+0.1;
					v1.style.boxShadow="0px 0px "+bian+"px "+bian+"px "+"#acacac";
					v2.style.boxShadow="0px 0px "+bian+"px "+bian+"px "+"#acacac";
					v3.style.boxShadow="0px 0px "+bian+"px "+bian+"px "+"#acacac";
				}
			}
		},12);
},1000)
/**/
function fudong()
{
	var v=document.getElementById("main");
	var v1=document.getElementById("A1");
	var v2=document.getElementById("A2");
	var v3=document.getElementById("A3");
	var b=v.clientHeight;
	var bian=0;
	var fudong_bian=b/2-180-20;
	var fudong_zhong=b/2-180+20;
	var dong=0;
	setInterval(function ()
	{
		if(dong<40)
		{
			dong=dong+1;
			fudong_bian=fudong_bian+1;
			fudong_zhong=fudong_zhong-1;
			v1.style.top=fudong_bian+"px";
			v2.style.top=fudong_zhong+"px";
			v3.style.top=fudong_bian+"px";
		}
		if(dong>=40&&dong<80)
		{
			dong=dong+1;
			fudong_bian=fudong_bian-1;
			fudong_zhong=fudong_zhong+1;
			v1.style.top=fudong_bian+"px";
			v2.style.top=fudong_zhong+"px";
			v3.style.top=fudong_bian+"px";
		}
		if(dong==80)
		{
			dong=0;
		}

	},50);
}
