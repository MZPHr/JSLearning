function showPic(whicpic){
    var source = whicpic.getAttribute("href");
    var picture = document.getElementById("picture");
    picture.setAttribute("src", source);
}
//只是创建了这个函数，需要一个事件来调用这个函数