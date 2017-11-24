
var theToggle = document.getElementById('toggle');


theToggle.onclick = function() { 

    if(theToggle.classList.contains('on')){ 
        theToggle.classList.remove('on'); 
    }else{ 
        theToggle.classList.add('on'); 
    } 
        window.onscroll = null; 
        return false; 
} 

window.onscroll = function() { 
    var scrolled = window.pageYOffset || document.documentElement.scrollTop; 
        if(scrolled > '360'){ 
        theToggle.classList.add('on'); 
    }else{ 
        theToggle.classList.remove('on'); 
    } 
}

if (document.body.clientWidth>800){
   document.write("<script>console.log('hello!');<\/script>");
}