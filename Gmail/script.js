
$(document).ready(function(){
    $('.button-coti-2').addClass('hide');

	  $('.vitrina-principal').slick({
	    infinite: true,
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	dots: true,
	  	autoplay: true,
	  	pauseOnHover:false,
        arrows:true,
        autoplaySpeed:7000
	  });

    $('.vitrina-principal').on('beforeChange', function(event, slick, currentSlide){
      if (currentSlide == 1) {
        //$('.vitrina-principal').slick('slickPause');
        myVideo.play();
      }
    });

	   //menu fixed
	var nav = $('nav');
   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 136) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }

        if ($('body').scrollTop() > $('.table-wrap').position().top) {

            $('.button-coti-1').addClass('hide');
            $('.button-coti-2').removeClass('hide');   
            console.log('formulario');         
        } else{    
            $('.button-coti-2').addClass('hide');
            $('.button-coti-1').removeClass('hide');    
        }
        console.log($('.table-wrap').position().top);
    
    });

     
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
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });


     $('.button-coti-1').click(function(){
        $('html, body').animate({
            scrollTop: $(".table-wrap").offset().top
        }, 700);
     });

      /*Menu para mobile*/
         $('items_mob').hide();
            
              $('.toggle-nav button').click(function(){
                $('items_mob').slideDown();
             });
              $('.items').click(function(){
                $('items_mob').slideUp();
             });

    

    

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

 /*$('.zone_map').click(function(name_url){
    var name_url = $(this).attr('data-path');
     //$(this).attr("fill", name_url );
    console.log(name_url);
    return name_url;
 });*/

var canadamap = document.getElementById("canada-map");
    provinceInfo = document.getElementById("provinceInfo");
    allProvinces = document.querySelectorAll(".zone_map");
    
    //name_url = allProvinces.getAttribute("data-path"); 

    canadamap.addEventListener("click", function(e){ 
        var province = e.target.parentNode;
        if(e.target.nodeName == "path") {
        for (var i=0; i < allProvinces.length; i++) {
            allProvinces[i].classList.add("active");
            //allProvinces[i].parentNode.style.fill = ''+name_url+'';

        }
        province.classList.remove("active");
        var provinceName = province.querySelector("title").innerHTML,
        provincePara = province.querySelector("desc p");
        sourceImg = province.querySelector("img"),
        imgPath = "img/destinos/mapa/";
        provinceInfo.innerHTML = "";
        provinceInfo.insertAdjacentHTML("afterbegin", "<img src="+imgPath + sourceImg.getAttribute('xlink:href')+" alt='"+sourceImg.getAttribute('alt')+"'><h1>"+provinceName+"</h1><p>"+provincePara.innerHTML+"</p>");
        provinceInfo.classList.add("show");

        /*function f_click_zone(id_zone){
            for (var i=0; i < allProvinces.length; i++) {
                allProvinces[i].classList.add("active");
            }
            var img_id = document.getElementById(id_zone).getAttribute('fill');
            document.getElementById(id_zone).style.fill = img_id ;
            }*/
        }

    });

});



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

    console.log(windowHeight);

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

