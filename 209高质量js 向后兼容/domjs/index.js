function popUp(winURL){
    window.open(winURL, "popup", "width = 320, height = 480");      
}
//向后兼容，确保不支持js的浏览器（通常为旧版本浏览器）依然能够正常访问页面
//方法：只需要使用的js函数是否在当前浏览器中存在，这叫做对象检测，（也可以检测属性是否在当前浏览器中可用），若不存在则返回return false（即退出整个js文档）

window.onload = prepareLinks();
//检测getElementsByTagName()函数
if(!document.getElementsByTagName) return false;      
//注意:不要写!document.getElementsByTagName()的这个小括号，若写，则返回函数运行的结果
//这样也保证了平稳退化（不支持或禁用js的浏览器中可以正常浏览网页）和渐进增强

function prepareLinks(){
    var links = document.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++){
        if(links[i].getAttribute("class") == "popup"){
            links[i].onclick = function(){
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}

/* 高质量js要保持最佳性能
原则1.外部调用js,且在</body>的前一行进行外部调用

原则2.不要重复使用DOM方法，因为它每次运行都会重新搜索整个DOM树
如：if(document.getElementsByTagName("a").length > 0){
    var links = document.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++){
        //对每个链接做处理
    }
}
这里使用两次getElementsByTagName()函数，只需使用一次即可，把links的那条语句移动到if语句之前，并在if语句之中使用links.length > 0即可

原则3.不要多次外部调用js，试着把几个js文件写到一个js文件里

可选：压缩脚本，在开发项目使预备一个自己编写代码的副本，还预备一个压缩后的代码的副本，压缩后的代码副本省去了空格和回车等等，会让代码可读性变差，但是在运行时会提高效率，网上有很多压缩脚本的工具
建议在压缩后的脚本的文件名中加上特殊标记，以免与自己编写得源代码搞混（例如加上"min"字样）
*/