// 显示回到顶部函数
function showtoup() {

        // 判断是否含有页脚
	if($('ft')){
		var viewPortHeight = parseInt(document.documentElement.clientHeight); // 窗口高度
		var scrollHeight = parseInt(document.body.getBoundingClientRect().top); // 相对已滚动的高度
		var basew = parseInt($('ft').clientWidth); // 页脚宽度
		var sw = $('toup').clientWidth; // 回到顶部宽度
		if (basew < 1000) {
			var left = parseInt(fetchOffset($('ft'))['left']); // 页脚相对左边距离
			left = left < sw ? left * 2 - sw : left; // 判断相对左边距离是否大于回到顶部距离
			$('toup').style.left = ( basew + left ) + 'px';
		} else {
			$('toup').style.left = 'auto';
			$('toup').style.right = 0;
		}

                // ie7以下兼容性问题
		if (BROWSER.ie && BROWSER.ie < 7) {
			$('toup').style.top = viewPortHeight - scrollHeight - 150 + 'px';
		}

                // 超出滚动高度,则回到顶部隐藏/显示
		if (scrollHeight < -125) {
			$('toup').style.visibility = 'visible';
		} else {
			$('toup').style.visibility = 'hidden';
		}
	}
}

// 执行回到顶部函数
function goTop(acceleration, time) {
         acceleration = acceleration || 0.1;
         time = time || 16;

         var x1 = 0;
         var y1 = 0;
         var x2 = 0;
         var y2 = 0;
         var x3 = 0;
         var y3 = 0;

         if (document.documentElement) {
                 x1 = document.documentElement.scrollLeft || 0;
                 y1 = document.documentElement.scrollTop || 0;
         }
         if (document.body) {
                 x2 = document.body.scrollLeft || 0;
                 y2 = document.body.scrollTop || 0;
         }
         var x3 = window.scrollX || 0;
         var y3 = window.scrollY || 0;

         // 滚动条到页面顶部的水平距离
        var x = Math.max(x1, Math.max(x2, x3));
         // 滚动条到页面顶部的垂直距离
        var y = Math.max(y1, Math.max(y2, y3));

         // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
        var speed = 999 + acceleration;
         window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));

         // 如果距离不为零, 继续调用迭代本函数
        if(x > 0 || y > 0) {
                 var invokeFunction = "goTop(" + acceleration + ", " + time + ")";
                 window.setTimeout(invokeFunction, time);
         }
 }

// _attachEvent(),Discuz内置方法监听事件,common.js
_attachEvent(window, 'scroll',
function() {
	showtoup()
});