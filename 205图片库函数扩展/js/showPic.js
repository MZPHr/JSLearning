function showPic(whicpic){
    var source = whicpic.getAttribute("href");
    var picture = document.getElementById("picture");
    picture.setAttribute("src", source);
}
//新的属性：
/**
 * nodeType属性：
 * body里只有三个元素ul, img和hl元素，childNode属性加上length属性以后返回的数之所以大于3，是因为节点类型并非只有元素节点，还有属* 性节点和文本节点
 * childNode属性返回的数组包含所有类型的节点，不仅仅是元素节点，文档里几乎空格和换行符都会被认作节点，它们也在childNode返回的数组* 中
 * 每个节点都有nodeType属性，返回节点的类型,它的返回值是一个数字
 * */
function bodyChildrenType(){
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.nodeType);
}
//在文档加载时产生事件 -> 调用函数
window.onload = bodyChildrenType;       //输出1，证明当前的是元素节点
/**
 * 节点的不同类型对应的nodeType返回的数值
 * 元素节点  1
 * 属性节点  2
 * 文本节点  3
 * 可以用if语句和这个返回值联用，判断是否为文本节点时只需:
 * if(body_element.nodeType == 3)
 * 可以通过判断，对特定类型的节点进行控制
 */