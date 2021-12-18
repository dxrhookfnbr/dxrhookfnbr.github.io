if(document.addEventListener){
    document.addEventListener("DOMContentLoaded", function(){
        loaded();
    });
} else if(document.attachEvent){
    document.attachEvent("onreadystatechange", function(){
        loaded();
    });
}

function loaded(){
    
    setInterval(loop, 300);
	
	var video = document.getElementById('video');
	video.volume = 0.07;
	

}
function play() {
	var audio = document.getElementById('video');
	video.play();
}
var x = 0;

var titleText = [ "|",
                    "|",
                    "d",
                    "dx",
                    "dxr",
                    "dxrh",
                    "dxrho",
                    "dxrhoo",
                    "dxrhook",
                    "dxrhoo",
                    "dxrho",
                    "dxrh",
                    "dxr",
                    "dx",
                    "d",];

function loop(){

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}