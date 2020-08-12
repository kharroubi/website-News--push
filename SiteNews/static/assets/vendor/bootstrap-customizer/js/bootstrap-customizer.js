//*----------------------------------------------------------------------
	//  Bootstrap Customizer js
	//  Copyright 2019 Ari budin Bootstrap.News
	//  Licensed under Bootstrap Themes (https://themes.getbootstrap.com/licenses/)
// ------------------------------------------------------------------------*/
$(document).ready(function() {	
	$open = false ;	$("#switcher").css('right','-16.5rem'); 
	// animate open
	$("#theme-settings, #theme-settings2").click(function() { 
		if( $open ){ 
			$(this).parent().animate({right: '-16.5rem'}, 500);	$open = false ;
		} else {
			$(this).parent().animate({right: '0'}, 500); $open = true; 
		} 
	});		
	
	// primary color
	$(".theme-colors a").click(function() { var hex = $(this).data("color");
	$("body").removeClass('color-red color-purple color-blue color-pink color-orange color-darkblue color-lightblue color-green color-yellow color-blacksoft').addClass('color-'+hex ); return false;});
	
	// secondary color
	$(".second-colors a").click(function() { var hex = $(this).data("scolor"); 
	$("body").removeClass('scolor-black scolor-red scolor-blue scolor-pink scolor-orange scolor-darkblue scolor-lightblue scolor-purple scolor-green scolor-blacksoft').addClass('scolor-'+hex ); return false;});
	
	// background img
	$(".bg-img a").click(function() { var hex = $(this).data("bg"); 
	$("body").removeClass('bg-cover bg-cover2 bg-cover3 bg-repeat bg-repeat2 bg-repeat3').addClass('bg-'+hex ); return false;});
	
	// layout
	$("#ly-fullwidth").click(function() { $("body").removeClass('boxed'); return false;});
	$("#ly-fullwidth").click(function() { $("body").removeClass('framed'); return false;});
	$("#ly-fullwidth").click(function() { $("body").addClass('full-width'); return false;});
	$("#ly-boxed").click(function() { $("body").addClass('boxed'); return false;});
	$("#ly-boxed").click(function() { $("body").removeClass('framed'); return false;});
	$("#ly-boxed").click(function() { $("body").removeClass('full-width'); return false;});
	$("#ly-framed").click(function() { $("body").addClass('framed'); return false;});
	$("#ly-framed").click(function() { $("body").removeClass('boxed'); return false;});
	$("#ly-framed").click(function() { $("body").removeClass('full-width'); return false;});

	// skin
	$("#skin-light").click(function() { $("body").removeClass('dark-skin'); return false;});
	$("#skin-dark").click(function() { $("body").addClass('dark-skin'); return false;});
	$("#skin-light").click(function() { $("#mobile-menu").removeClass('bg-black'); return false;});
	$("#skin-dark").click(function() { $("#mobile-menu").removeClass('bg-white'); return false;});
	$("#skin-dark").click(function() { $("#mobile-menu").addClass('bg-black'); return false;});
	$("#skin-light").click(function() { $("#mobile-menu").addClass('bg-white'); return false;});

	$("#skin-dark2").click(function() { $("#main-menu, #main-menu3").addClass('navbar-dark'); return false;});
	$("#skin-dark2").click(function() { $("#main-menu, #main-menu3").removeClass('navbar-light'); return false;});

	$("#skin-dark2").click(function() { $("#menu1").addClass('bg-black'); return false;});
	$("#skin-dark2").click(function() { $("#menu1").removeClass('bg-light'); return false;});

	$("#skin-light").click(function() { $("#jumbotron").removeClass('bg-dark'); return false;});
	$("#skin-dark").click(function() { $("#jumbotron").addClass('bg-dark'); return false;});

	$("#skin-dark2").click(function() { $("#showbacktop, #main-menu1, #main-menu2").addClass('bg-black'); return false;});
	$("#skin-dark2").click(function() { $("#showbacktop, #main-menu1, #main-menu2").removeClass('bg-white'); return false;});
	$("#skin-dark2").click(function() { $("#showbacktop").removeClass('border-bottom'); return false;});
	$("#skin-dark2").click(function() { $("#left-main, #left-main2").removeClass('first-left-lg-0'); return false;});
    
    //logo changes
    $("#demo-logo button").click(function() {
		 var url = $(".imageurl").val()
		 $('#main-logo img, .logo-sidenav img, .logo-showbacktop img, .footer-logo, .mobile-logo').attr('src',url)
	});
});