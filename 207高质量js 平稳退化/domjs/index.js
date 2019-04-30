/* js代码本身存在漏洞，如安全函数和利用"javascript:"伪协议进行cookie注入
1.弹出窗口会让用户觉得厌烦(在没有必要时不要使用弹出窗口)
--弹窗涉及到网页的可访问性问题，要在网页上可能会弹出窗口的地方进行说明
2.用户使用的浏览器可能不支持浏览器，或者可能禁用javascript了，所以要保证即使用户不能使用javascript也可以至少正常访问网页，这就需要——平稳退化 */


//用在新窗口中打开链接来做实例

/* 新方法：open()        这是在window对象下使用的方法，是window对象的方法
window.open(url, 名字, 属性);
参数1. url  是想在新窗口中打开的链接的地址
    2. 名字 是新窗口的名字，可以在代码里通过这个名字来与新窗口通信
    3. 属性 可以设置窗口的大小，以及新窗口开启和禁用的各种属性（如：工具条，滚轮等等）
    参数应该尽量少用保持最佳性能
open()方法属于BOM，对文档本身无影响，而DOM对文档本身有影响
*/
function popUp(winURL){
    window.open(winURL, "popup", "width = 320, height = 480");      
    //打开320像素宽，480像素长的新窗口,把新窗口的文档替换为winURL这个形参对应的实参的文档，而不是创建winURL的新窗口
}
//可使用"javascript:"伪协议来调用这个函数