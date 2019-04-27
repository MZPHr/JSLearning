function showPic(whicpic){
    var source = whicpic.getAttribute("href");
    var picture = document.getElementById("picture");
    picture.setAttribute("src", source);
}
//新的属性：
/**
 * childNodes属性:
 * 可以获取任何一个元素的所有子元素，它是包含这个元素全部子元素的数组(注意，是数组)
 * 
 * 把某个文档的body元素都检索出来，使用getElementsByTagName得到body元素,因为每个文档只有一个body元素，所以它是getElementsByTagName函数返回数组中的第一个元素（也是唯一一个元素）
 */

function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    //alert(body_element.childNodes);             返回全部子元素
    alert(body_element.childNodes.length);      //返回子元素的个数
    //也可以这样写document.getElementsByTagName("body")[0].childNodes   但这样太复杂了，所以用一个变量接收getElementsByTagName返回的数组的第一个元素更好
}
//让它在页面加载时执行，需要使用事件处理函数：onload, 加入以下语句:
window.onload = countBodyChildren;