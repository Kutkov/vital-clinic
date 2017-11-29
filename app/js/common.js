/* begin toggle menu*/
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

/* end toggle menu */

$(function(){
    $('.main-mnu__pages .submenu ul').hide();
    $('.main-mnu__pages .submenu').hover(
        function(){
            $(this).find('ul').slideDown();
        }, function(){
            $(this).find('ul').slideUp('fast');
        });
});