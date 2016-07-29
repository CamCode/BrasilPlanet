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
              breakpoint: 600,
              settings: {
                dots: false,
                arrows: false,
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
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
            scrollTop: $(".table-wrap").offset().top
        }, 1000);
     });
       

      /*Menu para mobile*/
         $('.items_mob').hide();
            
              $('.toggle-nav button').click(function(){
                $('.items_mob').slideDown();
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

                closeClick : true,
                fitToView: true                
    }); 
     $(".various").fancybox({
      
      padding: 0,

        openEffect : 'elastic',
        openSpeed  : 1000,

        closeEffect : 'elastic',
        closeSpeed  :750,

        closeClick : true,
        
        maxWidth    : 300,
        maxHeight   : 300,
        fitToView   : false,
        width       : '70%',
        height      : '40%',

        helpers : {
         overlay : null
        }
      });


    /*galeria de imagenes hoteles destinos */
    $(".fancybox-thumb").fancybox({
        prevEffect  : 'none',
        nextEffect  : 'none',
        fitToView: true,
        width       : '40%',
        height      : '20%',
        maxWidth       : '75%',
        maxHeight      : '75%',
        autoSize    : false,
        helpers : {
            title   : {
                type: 'outside'
            },
           thumbs  : {
                width   : 50,
                height  : 50
            },
           overlay : {
                css : {
                    'background' : 'rgba(0, 0, 0, 0.95)'
                }
            }
        }
    });


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
    $('.button-coti-1-mob').click(function(){  
         console.log('cambiodatos');
         $('.form1-mob-wrap .table-selection').show();          
            $('html, body').animate({
                scrollTop: $(".table-selection").offset().top
            }, 1000);
            
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
        }, 1000);
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
        provinceInfo.insertAdjacentHTML("afterbegin", "<a href='' id='close-btn'  onclick='cerrar()' style='display:block;background-image: url(http://brasilplanet.colombita.it/cami/css/fancybox_sprite.png);position: absolute ;top: -18px;right: -18px;    width: 36px;    height: 36px;   cursor: pointer;    z-index: 8040;'></a><img src="+imgPath + sourceImg.getAttribute('xlink:href')+" alt='"+sourceImg.getAttribute('alt')+"'><h1>"+provinceName+"</h1><ul>"+provincePara.innerHTML+"</ul></div class='img-clima'>"+provinceClima.innerHTML+"</div>");
        provinceInfo.classList.add("show");
        }
    });

            function cerrar(){
                document.querySelectorAll(".show").style.opacity = '0';
            }

/*$('#close-btn').click(function(){
    $('#provinceInfo.show').css('opacity','0');
});


    $(".zone_map").click(function() {
        var items = document.getElementsByClassName('.zone_map');
        for (var i = 0; i < items.length; i++){

            var img_name = items[i].attr('data-path');
            items[i].attr('fill',img_name);
            //console.log(items[i].attr('data-path'));
        }
           
    });

    $('.zone_map').click(function(){
        var img_2 = $(this).attr('fill');
        var img_gray = $(this).attr('data-path');

        var zone = $('.zone_map');


        console.log(img_gray);
        console.log(img_2);

        var zone_arr = [];

        for(var i=0; i< zone.length; i++){
            zone_arr.push(zone[i].attr('data-path'));

            var img_g = zone[i].attr('data-path');
           
            //zone[i].attr('fill',img_g);

        }*/

    

       

   

    /*function data_map(){
        var map_arr = [];
        $('.zone_map').each(function(){
            var img_g = $(this).attr('data-path');
        });
    }
  
    $('body').click(function(e){
        provinceInfo.classList.remove("show");
         for (var i=0; i < allProvinces.length; i++) {
            allProvinces[i].classList.remove("active");
        }
    });*/


 

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

