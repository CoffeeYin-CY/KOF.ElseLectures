var $jq2 = jQuery.noConflict();
//倒计时
function MyTime(timeStr)
{
	 timeObj = eval(''+timeStr+'');
	 var d=parseInt(timeObj.miao/86400);
	 var h=parseInt((timeObj.miao%86400)/3600);
	 var s=parseInt((timeObj.miao%3600)/60);
	 var m=parseInt(timeObj.miao%60);
	 var str = (d>0?d+timeObj.sd:'');
	 str += (h>0?h+timeObj.sh:'');
	 str += (s>0?s+timeObj.ss:'');
	 str += (m>0?m+timeObj.sm:'');
	 document.getElementById(timeObj.id).innerHTML = str;
	 timeObj.miao -= 1;
	 if(timeObj.miao>0)
	 	setTimeout('MyTime("'+timeStr+'")',1000);
};
function changeUse(obj)
{
	var val = $jq2(obj).val();
	var type = $jq2(obj).attr('itype');
	if(val==0)
	{
		$jq2('.useBg').removeClass("useBg").find('label input').attr('checked',false).val(0);
		$jq2(obj).parents('.myblok:first').addClass('useBg');
		$jq2(obj).val(1);
		val = 1;
	}
	else
	{
		$jq2(obj).parents('.myblok:first').removeClass('useBg');
		$jq2(obj).val(0);
		val = 0;
	}
	$jq2.ajax({   
		type: "post",   
		url: "plugin.php?id=mxyf_beijing:bgshop&action=ajax_my", //服务端处理程序   
		data: {'userid':$jq2(obj).attr('userid'),'mod':'available','value':val,'formhash':obj.form.formhash.value,'type':type}, 
		error:function(){
			alert('set use error');	
		}
	});
};
function changeSelect(obj,mod)
{
	$jq2.ajax({   
		type: "post",   
		url: "plugin.php?id=mxyf_beijing:bgshop&action=ajax_my", //服务端处理程序   
		data: {'userid':$jq2(obj).attr('userid'),'mod':mod,'value':$jq2(obj).val(),'formhash':obj.form.formhash.value}, 
		error:function(){
			alert('set '+mod+' error');	
		}
	});
};
function setMyBg(pid,data)
{
	if(typeof data.cl.image != 'undefined')
		$jq2("#pid"+pid+" td.pls:first").css({"background-image":"url("+data.cl.image+")","background-repeat":data.cl.repeat,"background-position":data.cl.position});
	if(typeof data.zw.image != 'undefined')
		$jq2("#pid"+pid).css({"background-image":"url("+data.zw.image+")","background-repeat":data.zw.repeat,"background-position":data.zw.position});
	
};