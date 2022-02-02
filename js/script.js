(function($){

    $(function(){
        $(".jq--scroll-about").click(function(){
            $("html, body").animate({scrollTop: $(".jq--about").offset().top}, 1000)
        });
        $(".jq--scroll-info").click(function(){
            $("html, body").animate({scrollTop: $(".jq--info").offset().top},1000);
        });
        $(".jq--scroll-reference").click(function(){
            $("html, body").animate({scrollTop:$(".jq--reference").offset().top}, 1000);
        });
        $(".jq--scroll-fotogalery").click(function(){
            $("html, body").animate({scrollTop:$(".jq--fotogalery").offset().top}, 1500);
        });
        $(".jq--scroll-formular").click(function(){
            $("html, body").animate({scrollTop:$(".jq--formular").offset().top}, 1500);
        });
        $(".jq--scroll-kontakt").click(function(){
            $("html, body").animate({scrollTop:$(".jq--formular").offset().top}, 1500);
        });

        $(".jq--scroll-icon").click(function(){
            $(".mobile-nav-back").fadeToggle(0);
            $(".nav-background").fadeToggle(0);
            $("nav ul").fadeToggle(0);
        });
        $(".jq--image-hamburger").click(function(){
  
            if($(".jq--image-hamburger").attr("src") == "img/hamburgerMenu.png")
            {
                $($(".jq--image-hamburger").attr("src","img/crossMenu.png"));
            } 
            else 
            {
                $($(".jq--image-hamburger").attr("src","img/hamburgerMenu.png"));
            }  
        });
 







    });

})(jQuery);
