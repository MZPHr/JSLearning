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
    if(picture.nodeName != "IMG") return false;
    picture.setAttribute("src", source);
    if(document.getElementById("description")){
        var text = whicpic.getAttribute("title") ? whicpic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if(description.firstChild.nodeType == 3){
            description.firstChild.nodeValue = text;
        }
   }
    return true;
}