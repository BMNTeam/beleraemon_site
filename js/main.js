$( document ).ready(function() {
	/*Begin animate css*/
	$('.weel').addClass(' ')
	/*Begin animate css*/
	
	/*Begin menu section*/
	$('.menu-icon').click(function(){
		$("button.menu-button-rotate").toggleClass("active");// open menu
		if($('.small-menu').css('display')!='none') { // rules for open menu
			$('.small-menu').toggle(400)      //add or remove class
		} else{
			$('.small-menu').toggle(400)
			var newLi=[];
			allLi=$(".nav ul>li");
			allLi=$.map(allLi, function(val){
				if(val.className!="icons")
					return val;
				return null;
			})
			$('.small-menu ul').html('')
			$('.small-menu ul').html(allLi)
		}
	})

	/*End menu section*/

	/*Begin text position after resize and loading*/

	$(window).on('load resize',function(){
		mainHeight=$('.main-text').height();
		height= $(window).height();
		$('#home').css('height',height+50);
		if (mainHeight+350>height) {
			$("h1").css("padding-bottom","2%");
			$("h2").css("display","none");

		}else{
			$('.main-text').css('padding',(height-mainHeight)/2-50+"px"+" "+"0")};
			$("h2").css("display","inline");
		})
	/*End text position after resize and loading*/

	/*Scroll2id*/
	$("nav li>a").mPageScroll2id();
	
	/*Scroll2id*/

//BEGIN ABOUT SECTION
	$('.full').imagefill();
//END ABOUT SECTION
// 
/*BEGIN EFFECTS ON SCROLL*/
$(document).scroll(function(){
 		var hasClass=$('.about-scroll').hasClass('active');// chech that item has scroll class
 		var windowScroll=$(window).scrollTop(); // get current window position
 		var oldCords=$('.about-scroll').offset().top;// get current object position
 		if(windowScroll>=oldCords-$(window).height() && hasClass==false){
 			$('.about-scroll').addClass('active');
 		} else if(windowScroll>=oldCords-$(window).height() && hasClass===true){
 			$('.about-scroll').addClass('after-active');
 		}})
/*END EFFECTS ON SCROLL*/

/*BEGIN SCROLL MENU BG COLOR*/

$(document).scroll(function(){
	 firstSection=$('section:eq(1)').offset().top;// finding first section
	 displayOffset=$(document).scrollTop();// get current position in document
			if(displayOffset>=firstSection-100){ // 
				$('.nav').addClass('nav-menu-dark');
				$('.nav .container').css('border-bottom','none');
				$('.nav li').css('line-height','40px');
				$('.logo').css('line-height','40px');
				$('.menu-button-switch').css('height','40px');
				$('.menu-button-switch span').css('top','18px'); 
			}else{
				$(".nav").removeClass('nav-menu-dark');
				$('.nav .container').css('border-bottom','1px solid white');
				$('.nav li').css('line-height','70px');
				$('.logo').css('line-height','70px');
				$('.menu-button-switch').css('height','70px');
				$('.menu-button-switch span').css('top','32px'); 
			}
		})

/*END SCROLL MENU BG COLOR*/

/* BEGIN animate numbers  */
$(document).scroll(function(){
 		var hasClas=$('#animateNamber').hasClass('animated');// chech that item has scroll class
 		var windowScroll=$(window).scrollTop(); // get current window position
 		var sectionCords=$('#numbers').offset().top;// get current object position
 		console.log(windowScroll)
 		console.log(sectionCords)
 		if(windowScroll>=sectionCords-$(window).height()&&hasClas===false){
 			$('#firstAnimateNumber').countNumbers(200,3000);
 			$('#secondAnimateNumber').countNumbers(7,3000);
 			$('#thirdAnimateNumber').countNumbers(145,3000);
 			$('#fourthAnimateNumber').countNumbers(4125,3000);			
 		}  			
 	});

// BEGIN animate number
$.fn.countNumbers=function(numberToCount,time){
	if($(this).hasClass('animated')){
		return
	} else{
		$(this,{
			n:0
		}).animate({
			n:numberToCount

		},{
			duration:time||1000,
			step:function(a){
				$(this).html(a|0)},
				complete:function(){
					$(this).addClass('animated')
				}

			})
	}
};
// END animate number

/* BEGIN video section  */

$("#video-button").click(function(){
	$('#middle-video').prop("muted", false)})


/* END video section */

/* BEGIN services section  */
$(".services-container").click(function(){
	$(".services-container.active").removeClass('active')
	$(this).addClass('active');
	var atribute=$(this).attr("data")
	console.log(atribute);
	$(".tabs").hide();
	$(atribute).fadeIn("slow");
});


$('.item').imagefill();




/* BEGIN masonry tabs  */
$("#portfolio .portfolio-menu ul>li ").click(function(){
	var all=$(this).attr('id');
	$('#portfolio .portfolio-menu ul>li.active').removeClass('active')
	$(this).addClass('active');
	$(".item").each(function(index, el) {
		if(all==='all'){
			$grid.shuffle('shuffle', function($el, shuffle){
				return true;})
		} else{
			 	$grid.shuffle('shuffle', function($el, shuffle){
			 		return $el.data('group')==all;
			 	})	
		}
});
})


/* END masonry tabs */

    /* END services section */
/* BEGIN shuffle portfolio  */
var $grid=$('#shuffleSection ');
var $sizer=$grid.find('.col-md-4');
$grid.shuffle({
	itemSelector:'.item',
	sizer: null,
	gutterWidth: 0,
	columnHeight: 0
})
/* END shuffle portfolio */

    /*BEGIN SECTION TESTIMONIALS*/
	$( '#my-slider' ).sliderPro({
		width: '100%',
		height: 200,
        responsive:true,
        autoHeight:true,
		arrows: false,
		buttons: false,
		waitForLayers: true,
		fade: true,
		autoplay: false,
		autoScaleLayers: false
	});
    $('#nextSlide').click(function(){
        $( '#my-slider' ).sliderPro(
            'nextSlide'
        )
    });
    $('#previousSlide').click(function(){
        $( '#my-slider' ).sliderPro(
            'previousSlide'
        )
    })
    /*END SECTION TESTIMONIALS*/
/*BEGIN CLIENTS SECTION*/
	$('#clients .client').imagefill();
	$('#clients .clients').hover(function(){
		$(this).removeClass("black-and-white")
	});
	$('#clients .clients').mouseleave(function(){
		$(this).addClass("black-and-white")
	});
	var clientsActive=true,
        clientMouseCoords=0;
	$('.clients-client-container').mousedown(function(event){
        clientsActive=true;
        clientMouseCoords=event.clientX;
        console.log("20");

	});

    $(document).mousemove(function(event){
        if(clientsActive){
            console.log(12)
            $('.clients-client-container').scrollLeft(clientMouseCoords-event.clientX);
        }
    }).mouseup(function(){
        clientsActive=false;
    })


/*END CLIENTS SECTION*/

	/*BEGIN PLANS SECTION*/
	$('.plans-see-more').click(function(event){
		$(this).hide();
		var $object=$(this).parent();
		newObject=$object.find('.plans-options').slideDown();

	})
	/*END PLANS SECTION*/
	//BEGIN CONTACTS SECTION
	var contactsLogoOffsetsLeft=$('.contacts-input').offset().left; // get position of input element
	$('.contacts-input-container span').css('left',"'"+contactsLogoOffsetsLeft+"'"); // move span to input part
	$("#contactsTextArea").html('');


	//END CONTACTS SECTION




});
// BEGIN CONTACTS_SUBMIT_BUTTON GET POSITION
$(window).on("load resize", function(){
	var contactsLogoOffsetsRight=$('.contacts-input').offset().left;
	var contactsLogoOffsetsRightPosition=$('.contacts-input').width()+contactsLogoOffsetsRight-$('#contactsSubmitButton').width()*2-10;
	$('#contactsSubmitButton').css('margin-left',contactsLogoOffsetsRightPosition);

});
// END CONTACTS_SUBMIT_BUTTON GET POSITION

//BEGIN SECTION MAP
$('#map .container h5').click(function(){
	$('#fullMap').slideToggle();
})
//END SECTION MAP
//SET HEIGHT CONTACTS SECTION RESIZE AND LOAD
$(window).on('load resize',function(){
	$('.col-md-6.contacts-container.left').setHeight($('.col-md-6.contacts-container.right'))
})
//SET HEIGHT CONTACTS SECTION RESIZE AND LOAD
	//OWN JQUERY FUNCTION

	$.fn.setHeight=function( setHeightElement){
		var heightToSet=this.height();
		setHeightElement.height(heightToSet);
		if($(window).width()>992){
			this.closest('section').height(heightToSet);
		}else{
			this.closest('section').height(heightToSet*2.1);
		}


	};



//OWN JQUERY FUNCTION

