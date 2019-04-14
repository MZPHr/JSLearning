//把占位符图片替换为想要显示的图片，占位符图片使用的标签是img，其中它的src属性值表示了要显示的图片的路径，所以只要把这个路径修改想要显示的图片的路径即可
//定义一个函数showPic(whicpic)
//参数whicpic代表一个指向某个图片的a元素(即指向图片的链接)，获取到这个a元素的href属性值，并把它赋值给占位符图片的img标签的src属性
function showPic(whicpic){
    var source = whicpic.getAttribute("href");                    //取href属性值
    var picture = document.getElementById("picture");             //通过ID获取到占位符图片的这个元素
    picture.setAttribute("src", source);                          //修改占位符元素的src值
}