function showPic(whicpic){
    var source = whicpic.getAttribute("href");
    var picture = document.getElementById("picture");
    picture.setAttribute("src", source);

    var text = whicpic.getAttribute("title");                    //获取点击到的图片连接的title属性值
    var description = document.getElementById("description");    //获取"占位符段落"这个元素
    /**新的属性：
     * nodeValue属性：
     * 用这个属性获取description对象的值
     * alert(description.nodeValue)     返回null，因为这个p元素里的nodeValue属性本身是一个空值
     * 我们要获得p元素的文本值，也就是在p元素节点下的一个文本节点
     * 所以通过childNodes获得p节点下的所有子节点
     * alert(description.childNodes[0].nodeValue);      输出占位符段落的文本节点的值
     * 
     * firstChild和lastChild属性
     * 分别节点包含的第一个子节点和最后一个节点
     * 所以:
     * description.childNodes[0] <==> description.firstChild        (<==>的意思是等价于)
     * description.childNodes[childNodes.length - 1] <==> description.lastChild     显然用lastChild更好
     */

     //因为占位符段落只有一个子节点那就是文本节点，所以使用childNodes[0]和firstChild一样，这里使用firstChild
     //alert(description.firstChild.nodeValue);     显示的效果一样显示Choose an image (0__ 0 !)
     
     //可以用nodeValue来设置值
     description.firstChild.nodeValue = text;
     

     /**
      * 图片库总思路：
      * 1.设置图片链接
      * 2.设置占位符图片和占位符段落
      * 3.获取图片链接的href值，把这个值赋给占位符图片的src属性(分别用getAttribute和setAttribute获取属性或设置属性)
      * 4.获取图片链接的title值，把这个值赋给占位符段落的文本节点（用nodeValue获取文本节点）
      * 5.使用事件处理函数onclick，在用户点击图片链接时触发自定义的函数
      * 6.在onclick里加入return false; 来避开浏览器的默认动作（即在新标签页打开图片）
      * 7.在css里让你的网页……至少能看的过去,对吧……
      * 8.这都是废话了，不要看了，喝杯咖啡吧 ( ~~\ ^ w ^ /~~)
      */
}