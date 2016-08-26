$(document).ready(function(){
    $('.button-coti-2').addClass('hide');

   
        $('.vitrina-principal').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        pauseOnHover:false,
        arrows:true,
        autoplaySpeed:7000,
       responsive: [
                {
                  breakpoint: 630,
                  settings: {
                    arrows: false,
                    autoplay: false,
                    infinite:false,
                    slidesToShow: 1
                  }
                },
                {
                  breakpoint: 380,
                  settings: {
                    arrows: false,
                    autoplay: false,
                    infinite:false,
                    slidesToShow: 1
                  }
                }
              ]
      });

    

    if($("#myVideo").length) {
      $('.vitrina-principal').on('beforeChange', function(event, slick, currentSlide){
          if (currentSlide == 1) {
            myVideo.play();
          }
        });
    }

  
    

    //slider 2 index.html

     $('.img-wrap').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        pauseOnHover:true,
        arrows:true,
          responsive: [
            {
              breakpoint: 890,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });


	//menu fixed
	var nav = $('nav');
   $(window).scroll(function () {
    //muestra menu al hacer scroll
        if ($(this).scrollTop() > 136) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }

        //aparece el boton 2 al llegar al formulario

        if ($(window).scrollTop() > $('.table-wrap').position().top) {

            $('.button-coti-1').addClass('hide');
            $('.button-coti-2').removeClass('hide');   
            console.log('formulario');         
        } else{    
            $('.button-coti-2').addClass('hide');
            $('.button-coti-1').removeClass('hide');    
        } 
        
    
    });

   //al hacer click en el boton 1 baja hasta el formulario

    $('.table-info-wrap .button-coti-1').click(function(){
        $('html, body').animate({
            scrollTop: $(".form-wrap").offset().top - 100
        }, 4000);
     });

    //$('html, body').animate({scrollTop: $('#contact').offset().top -100 }, 'slow');
       

      /*Menu para mobile*/
         $('.items_mob').hide();
            
              $('.toggle-nav button').click(function(){
               // $('').slideDown();
                $( '.items_mob').slideToggle( "slow", function() { 

                    });   
             });
              $('.items').click(function(){
                $('.items_mob').slideUp();
             });

    /*pop up imagenes dias*/
    $(".icon-transp").fancybox({
        padding: 0,

                openEffect : 'elastic',
                openSpeed  : 1000,

                closeEffect : 'elastic',
                closeSpeed  :750,
                maxWidth       : '80%',
                maxHeight      : '80%',

                fitToView: true,
               helpers: {
                    overlay : {
                        closeClick : true,  // if true, fancyBox will be closed when user clicks on the overlay
                        css : {
                            'display' : 'block'
                        }
                    } 
                }
                        
    }); 
    /* $('body').click(function(){
       $.fancybox.close();
    });*/
$('.various').click(function(){
    if($('.fancybox-iframe').length > 0) {
       $('body').click(function(){
           $.fancybox.close();
        });
    }
});
    
     $(".various").fancybox({
      
      padding: 0,

        openEffect : 'elastic',
        openSpeed  : 1000,

        closeEffect : 'elastic',
        closeSpeed  :750,

        closeClick : true,
        
        maxWidth    : 300,
        maxHeight   : 450,
        fitToView   : false,
        width       : '70%',
        height      : '55%',

       /* helpers : {
         overlay : null
        }*/
      });


    /*galeria de imagenes hoteles destinos */
    $(".fancybox-thumb").fancybox({
         padding: 0,
        prevEffect  : 'none',
        nextEffect  : 'none',
         openEffect : 'elastic',
        openSpeed  : 1000,

        closeEffect : 'elastic',
        closeSpeed  :750,
        fitToView: true,
        width       : '40%',
        height      : '18%',
        maxWidth       : '82%',
        maxHeight      : '81%',
        autoSize    : false,
        title   :null,
        helpers : {
            
           thumbs  : {
                width   : 40,
                height  : 40
            },
           overlay : {
                css : {
                    'background' : 'rgba(0, 0, 0, 0.95)'
                }
            }
        }
    });

    
/*$('#leng .icon').click(function(){
   console.log('click idiomas');
});*/
$('.submenu').hide();
$('#leng .icon').click(function(){
    //$('#leng .submenu').toggleClass('hide');

   /* $('.submenu').toggle(function () {
    $(".submenu").css({"display": "block"});
    }, function () {
        $(".submenu").css({"display": "none"});
    });*/

     $(".submenu").slideToggle(function() { 

    }); 
});

/*$('#leng .icon').click(    
    function(){$(".submenu").css({"display": "block"});
    console.log('click idiomas');},
    function(){$(".submenu").css({"display": "none"});
});*/




/*desplegables dias */
$('.subday-mob').hide();

$('.day-plan-mob .day-txt').click(function(e){
    e.preventDefault();
    var wrap_txt =  $(this).next();
    var arrow_title = $(this).find('.fa');
    //$('.subday-mob').slideUp();   
    
    $(arrow_title).toggleClass('fa-chevron-down fa-chevron-up');
    $( wrap_txt ).slideToggle( "slow", function() { 

    });   
});

/*referencias desplegable*/
$('.ref-txt-wrap').hide();

$('.ref-coment').click(function(e){
    e.preventDefault();
    
    var wrap_ref =  $(this).next();
    //wrap_ref= wrap_ref.next();
    var wrap_ref =  $(this).parent();
         wrap_ref = wrap_ref.parent();
         wrap_ref = wrap_ref.siblings('.ref-txt-wrap');
    console.log(wrap_ref);
    $(this).find('.fa').toggleClass('fa-chevron-down fa-chevron-up');
    //var arrow_title = $(this).find('.fa');
    //$('.subday-mob').slideUp();   
    
    //$(arrow_title).toggleClass('fa-chevron-down fa-chevron-up');
    $( wrap_ref ).slideToggle( "slow", function() { 

    });   
});

/*desplegables formulario ref */

$('.wrap-ref1').hide();
$('.wrap-ref2').hide();

 

$('input:radio[name="ref"]').change(
    function(){
        if (this.checked && this.value == 'ref1') {
            $( ".wrap-ref1" ).slideToggle( "slow", function() { 

            }); 
            $( ".wrap-ref2" ).slideUp( "slow", function() { 

            });   
        }
         if (this.checked && this.value == 'ref2') {
            $( ".wrap-ref1" ).slideUp( "slow", function() { 

            });  
            $( ".wrap-ref2" ).slideToggle( "slow", function() { 

            });   
        }
    });

/*boton up */
$('footer').append( "<div class='up_btn' style='display: block; position: fixed;bottom: 20px;right: 10px;width:80px;height:45px;cursor:pointer;text-align:center;'><i class='fa fa-chevron-up' style='display:block;color:#487FFA;' aria-hidden='true'></i><img src='img/logo.png'></div>" );
 
 $('.up_btn').click(function(){
            
            var body = $("html, body");
            body.stop().animate({scrollTop:0}, '4000', function() { 
            
            });
         });




 if($(window).width()<489) {



    $('.button-coti-2').removeClass('hide');

    $('.condiciones-wrap .condiciones-info').hide();

    $('.condiciones-wrap h2').click(function(e){
        e.preventDefault();
        var wrap_txt =  $(this).siblings('.condiciones-info');
        var arrow_title = $(this).find('.fa');
        //$('.subday-mob').slideUp();   
        
        $(arrow_title).toggleClass('fa-chevron-down fa-chevron-up');
        $( wrap_txt ).slideToggle( "slow", function() { 

        });   
    });

    /*formulario 1*/
    $('.form1-mob-wrap .hotel-wrap .hotel-info .more-info').hide();
    $('.form1-mob-wrap .table-selection').hide();
    

    $('.form1-mob-wrap .hotel-wrap .hotel-info .down-hotel').click(function(e){
        e.preventDefault();
        var wrap_txt =  $(this).parent();
         wrap_txt = wrap_txt.parent();
         wrap_txt = wrap_txt.siblings('.form1-mob-wrap .hotel-wrap .hotel-info .more-info');
        //var arrow_title = $(this).find('.fa');
        //$('.subday-mob').slideUp();   
        
        $(this).toggleClass('fa-chevron-down fa-chevron-up');
        $( wrap_txt ).slideToggle( "slow", function() { 

        });      
        
    });
    $('.fa-search').click(function(){  
         console.log('cambiodatos');
         $('.form1-mob-wrap .table-selection').show();          
            $('html, body').animate({
                scrollTop: $(".table-selection").offset().top
            }, 4000);
            
         });
        

    $(window).scroll(function () {
        //aparece el boton 2 al llegar al formulario

        if ($(window).scrollTop() > $('.day-mob').position().top) {

            $('.button-coti-1').addClass('hide');
            $('.button-coti-2').removeClass('hide');           
        } else{    
            $('.button-coti-2').addClass('hide');
            $('.button-coti-1').removeClass('hide');    
        } 
        
    
    });

     $('.button-coti-1').click(function(){
        $('html, body').animate({
            scrollTop: $(".table-selection").offset().top
        }, 4000);
     });



 }


 /*if($('.day-plan-mob .day-txt .fa-chevron-up').length > 0){
        $('.day-plan-mob .day-txt .fa').removeClass('fa-chevron-up');
        $('.day-plan-mob .day-txt .fa').addClass('fa-chevron-down');     
     }else{
         $('.day-plan-mob .day-txt .fa').removeClass('fa-chevron-down');
        $('.day-plan-mob .day-txt .fa').addClass('fa-chevron-up');  
     }*/

/*FIN desplegables dias */
    

    

    /*$(".img-wrap .item-img").hover(function() {
    	var txt = $(this).find('.hover-img');	 	
	 	txt.fadeIn(2000); //or .fadeIn(2000) for 2 seconds
	}, function() {
		var txt = $(this).find('.hover-img');
	    txt.fadeOut(2000);
	});

	

     $( ".img-wrap .item-img" ).hover(
	  function(){
	   var txt = $(this).find('.hover-img');	 	
	 	txt.css('opacity','1');
	  },500, function(){
	  	var txt = $(this).find('.hover-img');	
	   	txt.css('opacity','0');
	  });

      $( ".img-wrap .item-img .hover-img" ).hover(
	  function() {
	   var contendor = $(this).parent();
	 	var img_scale= contendor.find('img');
	 	img_scale.css('transform','scale(1.2)');
	  },500, function() {
	   	img_scale.css('transform','scale(1)');
	  });

 $('#amazonia-hover').css('display','none');
	 $('#amazonia_z').hover(function(){
	 	$('#amazonia-hover').css('display','block');
	 	console.log('hola');
	 });*/

scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

/*$('.zone_map').hover(function(){
    var url_img = $(this).attr('Fill');
    //addClass('active');
    console.log(url_img);
},function(){
    $(this).removeClass('active');
});*/


       

var brasilmap = document.getElementById("brasil-map");
    provinceInfo = document.getElementById("provinceInfo");
    allProvinces = document.querySelectorAll(".zone_map");
    brasilmap.addEventListener("click", function(e){ 
        var province = e.target.parentNode;
        if(e.target.nodeName == "path") {
        for (var i=0; i < allProvinces.length; i++) {
            allProvinces[i].classList.remove("active");
        }
        province.classList.add("active");
        var provinceName = province.querySelector("title").innerHTML,
        provincePara = province.querySelector("desc ul");
        provinceClima = province.querySelector("desc .img-clima");
        sourceImg = province.querySelector("img"),
        imgPath = "img/destinos/mapa/";
        provinceInfo.innerHTML = "";
        provinceInfo.insertAdjacentHTML("afterbegin", "<a href='#' id='close-btn' style='display:block;background-image: url(http://brasilplanet.colombita.it/cami/css/fancybox_sprite.png);position: absolute ;top: -18px;right: -18px;    width: 30px;    height: 27px;   cursor: pointer;    z-index: 8040;'></a><img src="+imgPath + sourceImg.getAttribute('xlink:href')+" alt='"+sourceImg.getAttribute('alt')+"'><h1>"+provinceName+"</h1><ul>"+provincePara.innerHTML+"</ul></div class='img-clima'>"+provinceClima.innerHTML+"</div>");
        provinceInfo.classList.add("show");

        $('#close-btn').click(function(e){
            console.log('cerrar box');
            e.preventDefault();
            $('#provinceInfo').removeClass('show');
         });

        }
        
        
        /*
        function click_cerrar(){
            document.body.onclick = provinceInfo.style.visibility='hidden' ;
            return cerrar();
        }*/
        
    });
  
            

});

/*function f_click_zone(id_zone){
           
    var img_id = document.getElementById(id_zone).getAttribute('fill');
    document.getElementById(id_zone).style.fill = img_id ;
}

function map_gray(){
    document.getElementById('foz_iguazu').style.fill ='url(#iguazu)';

    document.querySelectorAll(".zone_map").style.fill
}*/


     document.getElementById('myVideo').addEventListener('ended',myHandler,false);
function myHandler(e) {
    $('.vitrina-principal').slick('slickPlay');
}

 //jQuery is required to run this code

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.slide').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

   // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.slide .video-container video').addClass('fadeIn animated');

    });

  }



