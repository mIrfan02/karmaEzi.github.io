
jQuery(function ($) {
    "use strict";



    
      
    $(document).ready(function(){       
        var scroll_pos = 0;
        $(window).scroll(function() { 
            scroll_pos = $(this).scrollTop();
            if(scroll_pos > 40) {
                $("#second").css('background-color', '#fffff2');
            } else {
                $("#second").css('background-color', 'white');
            }
        });
    });
        
      

  
    $(document).ready(function () {


       


        AOS.init({
            duration: 1000
        });





       












    });





});