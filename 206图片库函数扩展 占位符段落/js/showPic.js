function showPic(whicpic){
    var source = whicpic.getAttribute("href");
    var picture = document.getElementById("picture");
    picture.setAttribute("src", source);
}