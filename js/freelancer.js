// Freelancer Theme JavaScript
 $(document).ready(function () {
     // body...
     var id= getUrlParameter('id');
     if(id!=null) {
        var a = "#"+id+'Nav';
        
        //set the nav to be active if clicked on from a different page
        if(id.localeCompare("portfolio")==0) {
            $(a).addClass("active");
            $("body").scrollTop($('#'+id).offset().top);
        }else if(id.localeCompare("about")) {
            $(a).addClass("active");
            $("body").scrollTop($('#'+id).offset().top-50);
        }else if(id.localeCompare("contact")) {
            $(a).addClass("active");
            $("body").scrollTop($('#'+id).offset().top-50);
        }
     }
 });

 var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};    
(function($) {
    "use strict"; // Start of use strict

    
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        //remove active class so that only active nav is colored
        $('#portfolioNav').removeClass('active');
        $('#aboutNav').removeClass('active');
        $('#contactNav').removeClass('active');
        //animate move
        console.log($('portfolioNav'));
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
    /*
    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });
    */
    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})(jQuery); // End of use strict
