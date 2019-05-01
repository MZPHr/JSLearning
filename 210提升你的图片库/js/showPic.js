addLoadEvent(prepareGallery);       
/** 参数：打算在页面加载完毕时执行的函数的名字，这个函数很实用，由于事件处理函数只能通知调用一个函数，而且如果使用匿名函数即
 *
 * window.onload = function(){
 *      firstFunction();
 *      secondFunction();
 * }
 * 这样第二个函数会覆盖第一个函数，也就是说只会在页面加载完成之后运行第二个函数，但是addLoadEvent函数解决了这个问题
 */


//var supported = document.getElementsByTagName && document.getElementById;
//可以这样：if(!supported) return false;        

//也可以使用if(!document.getElementsByTagName || !document.getElementById)但是，这样做可读性大大降低
//最好是这样
function prepareGallery(){
    //对象检测
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("imagegallery")) return false;
    //针对imagegallery这个id值进行检测，以免在以后修改html时影响了这个id值
    
    var gallery = document.getElementById("Imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++){
        links[i].onclick = function(){
            //function() : 一个匿名函数(在代码执行时创建函数的方法)，用途：在onclick被触发时得以调用一个语句块而不是单个语句
            
            showPic(this);                  //this指当前循环中，links数组中被遍历的元素
            return false;
        }
    }
}

function showPic(whicpic){
    if(!document.getElementById("picture")) return false;       //检查"占位符"图片的id是否改变,若改变就结束运行函数
    var source = whicpic.getAttribute("href");
    var picture = document.getElementById("picture");
    picture.setAttribute("src", source);
    if(document.getElementById("description")){                 //存在占位符段落即运行,替换占位符段落的文本
        var text = whicpic.getAttribute("title");
        var description = document.getElementById("description");
        description.firstChild.nodeValue = text;
    }
    return true;                                                //showPic正常执行完毕,应返回true
}