addLoadEvent(prepareGallery);       
function prepareGallery(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("Imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++){
        links[i].onclick = function(){
            /* 
            showPic(this);
            return false; 
            这样使用showPic函数，要是picture即占位符图片在标记文档内被删除，那么无论怎么点击imagegallery的链接,都没有任何响应
            但是浏览器应该显示那个被点击的链接, 所以这时候（showPic失效的时候）就得开始浏览器的默认行为了
            */

            //图片切换成功showPic返回true,没成功切换则返回false
            //当图片切换成功时就关闭默认行为，没成功就打开默认行为
            //showPic返回true 则 return false
            //showPic返回false 则 return true
            //所以只需要将showPic的返回值取反，再返回就行了
            return !showPic(this);
        }
    }
}

function showPic(whicpic){
    if(!document.getElementById("picture")) return false;       //图片没有成功切换，返回false
    var source = whicpic.getAttribute("href");
    var picture = document.getElementById("picture");
    picture.setAttribute("src", source);
    if(document.getElementById("description")){
        var text = whicpic.getAttribute("title");
        var description = document.getElementById("description");
        description.firstChild.nodeValue = text;
    }
    return true;                                                //图片切换成功返回true
}