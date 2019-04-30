function popUp(winURL){
    window.open(winURL, "popup", "width = 320, height = 480");      
}
//使用渐进增强（即把html和js分离，像用link元素使html与css分离一样），使用渐进分离的网页几乎都符平稳退化
//由于我们把js外部调用的位置（即head标签里或</body>前面）都会让DOM树加载不完整所以要在页面加载完成以后外部调用这个js函数
window.onload = prepareLinks();
function prepareLinks(){
    var links = document.getElementsByTagName("a");     //获取所有链接节点,存储在数组links里（getElementsByTagName返回一个数组）
    for(var i = 0; i < links.length; i++){              //遍历所有链接节点
        if(links[i].getAttribute("class") == "popup"){  //判断当前的链接节点的class是否为popup
            links[i].onclick = function(){              //把onclick事件处理函数放在js里，通过点击事件，点击当前链接来调用js
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}