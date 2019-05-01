addLoadEvent(prepareGallery);       
function prepareGallery(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("Imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++){
        links[i].onclick = function(){
            return !showPic(this);
        }
    }
}

function showPic(whicpic){
    if(!document.getElementById("picture")) return false;
    var source = whicpic.getAttribute("href");
    var picture = document.getElementById("picture");
    if(picture.nodeName != "IMG") return false;         //检查picture（占位符图片）是否为一个图片，若不是即退出
    //nodeName属性返回的是大写字母,所以要用"IMG"来判断

    picture.setAttribute("src", source);
    if(document.getElementById("description")){
        //var text = whicpic.getAttribute("title");
        //现在这个语句假设每个链接元素都有title，我们要达到的效果是，当没有title属性时，在页面的占位符段落处什么都不显示
        //? : 三元运算符，
        var text = whicpic.getAttribute("title") ? whicpic.getAttribute("title") : "";
        //若title属性存在（判断条件是?前面的），则把whicpic.getAttribute("title")这个值赋值给text(?和:中间的是判断条件成立后要执行的),若不存在则把""赋值给text(:后面的是条件不成立时要执行的)
        
        var description = document.getElementById("description");
        if(description.firstChild.nodeType == 3){           //检查占位符段落是否包含文本节点，若包含则更改占位符段落的文本
            description.firstChild.nodeValue = text;
        }
   }
    return true;
}
/**
 * 不需要对HTML文档的内容和结构做太多假设，如：假设title属性一定存在，占位符图片以后不会修改，占位符文本的子节点一定是一个文本节点
 * showPic函数一定返回true等等…………
 */