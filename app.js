
setTimeout(function() {
    document.getElementById('screen').style.display = "none";
    document.body.style.overflowY = "visible";
    document.body.style.cursor = "url('image/rocket-13-24.png'),auto"
},3000)
var vst = document.getElementById('visits');

function callbackName(response) {
    vst.innerText=response.value;
}

var button = document.getElementById('navicon');
var navdiv = document.getElementById('nav-box');
var displayed = false
button.addEventListener('click',function(event) {
    if(displayed==false) {
        navdiv.style.transform="translateX(0)";
        button.style.transform = "rotate(90deg)";
        displayed=true;
        event.stopPropagation();
    }
});
document.body.addEventListener('click',function() {
    if(displayed==true) {
        navdiv.style.transform="translateX(100%)";
        button.style.transform = "rotate(0deg)";
        displayed=false;
    }
});

var navAnchorTags = document.querySelectorAll('#nav a');
console.log(navAnchorTags);
for(let i=0;i<navAnchorTags.length;i++) {
    navAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var sectionToScroll = this.getAttribute('href');
        var scrolling = setInterval(function(){
            var cordinates = document.querySelector(sectionToScroll).getBoundingClientRect();
            if(cordinates.y<=0) {
                clearInterval(scrolling);
                return;
            }
            // window.scroll()
            window.scrollBy(0,40);
        },20);
    });
}