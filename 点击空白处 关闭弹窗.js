/**
 * Created by 殇雪 on 2017/11/28.
 */
$(document).mouseup(function(e){
    var _con = $(' 目标区域 ');   // 设置目标区域
    if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
        some code...   // 功能代码
    }
});
/* Mark 1 的原理：
 判断点击事件发生在区域外的条件是：
 1. 点击事件的对象不是目标区域本身
 2. 事件对象同时也不是目标区域的子元素
 */