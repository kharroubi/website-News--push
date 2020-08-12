(function ($) {
    "use strict";
  
    var bn = {
      /**
      * ------------------------------------------------------------------------
      * Launch Functions
      * ------------------------------------------------------------------------
      */
      Launch: function () {
        bn.Back_to_top();
        bn.Form_validate();
        bn.Showbacktop();
        bn.Block_loadcontent();
        bn.Suggestion_post();
        bn.Hamburger();
        bn.Dropdown_submenu();
        bn.Vertical_tabs();
        bn.Dropdown_animate();
        bn.Slider_mega();
        bn.Sticky();
        bn.Social_windows();
        bn.Progress_scroll();
        bn.Lazy_load();
        bn.Mobile_menu();
        bn.Owl_carousel();
        bn.Messages_chat();
        bn.Youtube_playlist();
        bn.Bootstrap_module();
        bn.Custom();
      },
      /**
      * ------------------------------------------------------------------------
      * Back to top function
      * ------------------------------------------------------------------------
      */
      Back_to_top: function (){
          // browser window scroll (in pixels) after which the "back to top" link is shown
          var offset = 300,
          //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
          offset_opacity = 1200,
          //grab the "back to top" link
          $back_to_top = $('.back-top');
          //hide or show the "back to top" link
          $(window).scroll(function(){
              ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('backtop-is-visible') : $back_to_top.removeClass('backtop-is-visible backtop-fade-out');
              if( $(this).scrollTop() > offset_opacity ) { 
                  $back_to_top.addClass('backtop-fade-out');
              }
          });
          // Material-scrolltop
          function mScrollTop(element, settings) {
              var _ = this,
                  breakpoint;
              var scrollTo = 0;
              _.btnClass = '.material-scrolltop';
              _.revealClass = 'reveal';
              _.btnElement = $(_.btnClass);
              _.initial = {
                  revealElement: 'body',
                  revealPosition: 'top',
                  padding: 0,
                  duration: 600,
                  easing: 'swing',
                  onScrollEnd: false
              }
              _.options = $.extend({}, _.initial, settings);
              _.revealElement = $(_.options.revealElement);
              breakpoint = _.options.revealPosition !== 'bottom' ? _.revealElement.offset().top : _.revealElement.offset().top + _.revealElement.height();
              scrollTo = element.offsetTop + _.options.padding;
              $(document).scroll(function() {
                  if (breakpoint < $(document).scrollTop()) {
                      _.btnElement.addClass(_.revealClass);
                  } else {
                      _.btnElement.removeClass(_.revealClass);
                  }
              });
              _.btnElement.click(function() {
                  var trigger = true;
                  $('html, body').animate({
                      scrollTop: scrollTo
                  }, _.options.duration, _.options.easing, function() {
                      if (trigger) { // Fix callback triggering twice on chromium
                          trigger = false;
                          var callback = _.options.onScrollEnd;
                          if (typeof callback === "function") {
                              callback();
                          }
                      }
                  });
                  return false;
              });
          }
          $.fn.materialScrollTop = function() {
              var _ = this,
                  opt = arguments[0],
                  l = _.length,
                  i = 0;
              if (typeof opt == 'object' || typeof opt == 'undefined') {
                  _[i].materialScrollTop = new mScrollTop(_[i], opt);
              }
              return _;
          };
          $('body').materialScrollTop({   // Scroll to the top of <body> element ...
              revealElement: 'header',    // Reveal button when scrolling over <header><meta http-equiv="Content-Type" content="text/html; charset=utf-8"> ...
              revealPosition: 'bottom',   // ... and do it at the end of </header> element
              duration: 1000,              // Animation will run 1000 ms
          });
      },
      /**
      * ------------------------------------------------------------------------
      * Input form validate function
      * ------------------------------------------------------------------------
      */
      Form_validate: function() {
          $(document).ready(function(){
              window.addEventListener('load', function() {
                  // Fetch all the forms we want to apply custom Bootstrap validation styles to
                  var forms = document.getElementsByClassName('needs-validation');
                  // Loop over them and prevent submission
                  var validation = Array.prototype.filter.call(forms, function(form) {
                      form.addEventListener('submit', function(event) {
                          if (form.checkValidity() === false) {
                              event.preventDefault();
                              event.stopPropagation();
                          }
                          form.classList.add('was-validated');
                      }, false);
                  });
              }, false);
          });
      },
      /**
      * ------------------------------------------------------------------------
      * Show the navbar when the page is scrolled up function
      * ------------------------------------------------------------------------
      */
      Showbacktop: function() {
        var minscreen = 992;
  
        //primary navigation slide-in effect
        if ($(window).width() > minscreen) {
          var headerHeight = $('#showbacktop').height();
          $(window).on('scroll', {
              previousTop: 0
            },
            function() {
              var currentTop = $(window).scrollTop();
              var min_header = 120;
              //check if user is scrolling up
              if (currentTop < this.previousTop) {
                //if scrolling up...
                if (currentTop > min_header && $('#showbacktop').hasClass('is-fixed')) {
                  $('#showbacktop').addClass('is-visible');
                } else {
                  $('#showbacktop').removeClass('is-visible is-fixed');
                }
              } else if (currentTop > this.previousTop) {
                //if scrolling down...
                $('#showbacktop').removeClass('is-visible');
                if (currentTop > headerHeight && !$('#showbacktop').hasClass('is-fixed')) $('#showbacktop').addClass('is-fixed');
              } 
              this.previousTop = currentTop;
            });
        }
      },
      /**
      * ------------------------------------------------------------------------
      * Ajax load content function
      * ------------------------------------------------------------------------
      */
      Block_loadcontent: function() {
          $(document).ready(function(){
              $('#carouselmega, #featured').carousel({
                interval:false // remove interval for manual sliding
              });
              $(".nav-block-link li a, .nav-block-link1 li a, .nav-block-link2 li a, .nav-block-link3 li a, .nav-block-link4 li a, .nav-block-link5 li a, .nav-block-link6 li a, .nav-block-link7 li a").click(function() {
                  $(this).parent().addClass('active').siblings().removeClass('active');
              });
              $('[data-toggle="tabajax"]').click(function(e) {
                  e.preventDefault();
                  var loadurl = $(this).attr('href');
                  var targ = $(this).attr('data-target');
                  $.get(loadurl, function(data) {
                      $.ajax({
                         beforeSend: function(){
                          // Before load
                          $(targ).html('<p class="loaders"><i class="fa fa-spinner fa-spin"></i></p>');
                         },
                         complete: function(){
                          // Content Loaded
                          $(targ).html(data);
                         }
                       });
                  });
                  $(this).tab('show');
              });
          });
      },
      /**
      * ------------------------------------------------------------------------
      * Suggestion function
      * ------------------------------------------------------------------------
      */
      Suggestion_post: function() {
          var minscreen = 992;
          //primary navigation slide-in effect
          if ($(window).width() > minscreen) {
              var offset = 2000,
              offset_opacity = 2000,
              $suggestion_box = $('.suggestion-box');
              $(window).scroll(function(){
                  ( $(this).scrollTop() > offset ) ? $suggestion_box.addClass('hide') : $suggestion_box.removeClass('hide show');
                  if( $(this).scrollTop() > offset_opacity ) { 
                      $suggestion_box.addClass('show');
                  }
              });
              // close suggestion
              $('#close-suggestion').click(function()  {
                  $suggestion_box.addClass('close');
              });
          }
      },
      /**
      * ------------------------------------------------------------------------
      * Hamburger function
      * ------------------------------------------------------------------------
      */
      Hamburger: function() {
          $('.nav-hamburger').on('click', function () {
              // hamburger animation
              $('.hamburger-icon').toggleClass('open');
          });
      },
      /**
      * ------------------------------------------------------------------------
      * Dropdown submenu function
      * ------------------------------------------------------------------------
      */
      Dropdown_submenu: function() {
          $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
              if (!$(this).next().hasClass('show')) {
                  $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
              }
              var $subMenu = $(this).next(".dropdown-menu");
              $subMenu.toggleClass('show');
              
              $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
                  $('.dropdown-submenu .show').removeClass("show");
                  $('.dropdown-menu .show').removeClass("show");
              });
              
              return false;
          });
          $('.dropdown-menu > li > a.dropdown-toggle').on('click', function(e) {
                  $(this).parent().toggleClass('show');
          });
          // sidenav
          $(".sidenav-menu ul").addClass("border-bottom-last-0");
          $(".sidenav-menu ul li a").addClass("list-group-item");
          // if dropdown offscreen
          $(".dropdown li").on('mouseenter mouseleave', function (e) {
                if ($('.dropdown-menu', this).length) {
                    var elm = $('.dropdown-menu', this);
                    var off = elm.offset();
                    var l = off.left;
                    var w = elm.width();
                    var docW = $(window).width();
        
                    var isEntirelyVisible = (l + w <= docW);
        
                    if (!isEntirelyVisible) {
                        $(elm).addClass('dropdown-reverse');
                    } else {
                        $(elm).removeClass('dropdown-reverse');
                    }
                }
          });
      },
      /**
      * ------------------------------------------------------------------------
      * Vertical Tabs function
      * ------------------------------------------------------------------------
      */
      Vertical_tabs: function() {
          // tabs in mega menu
          $('.dropdown-menu a[data-toggle="tab"]').click(function (e) {
              e.stopPropagation();      
              $(this).tab('show');
          });
      },
      /**
      * ------------------------------------------------------------------------
      * Dropdown animate function
      * ------------------------------------------------------------------------
      */
      Dropdown_animate: function() {
          // dropdown animate css
          $('.dropdown, .mega-dropdown, .dropdown-menu').on('show.bs.dropdown', function () {
                $(this).children('.dropdown-menu').addClass('animations slideInUp');
          });
          $('.dropdown, .mega-dropdown, .dropdown-menu').on('hide.bs.dropdown', function () {
                $(this).children('.dropdown-menu').removeClass('animations slideInUp');
          });
          // screens 
          var screens = 992;
          // Hover animate css only on desktop
          if ( $(window).width() > screens ) {
               $(function () {
                  // dropdown animate on hover mode
                  $('.hover-mode a.dropdown-toggle').hover(function() {
                      $('.navbar-nav>li>.dropdown-menu').addClass('animations slideInUp');
                  });
  
                  // Hover tabs
                  $('.mega-hovers').off('click.bs.tab.data-api', '[data-hover="tab"]');
                  $('.mega-hovers').on('mouseenter.bs.tab.data-api', '[data-toggle="tab"], [data-hover="tab"]', function () {
                    $(this).tab('show');
                  });
  
              });
          }
      },
      /**
      * ------------------------------------------------------------------------
      * Slider navigation function
      * ------------------------------------------------------------------------
      */
      Slider_mega: function() {
          $('a[data-slide].navi-mega').click(function(e){
              e.preventDefault();
              e.stopPropagation();
              // slide
              $('#carouselmega').carousel( $(this).data('slide') );
          });
      },
      /**
      * ------------------------------------------------------------------------
      * Sticky function
      * ------------------------------------------------------------------------
      */
      Sticky: function() {
          $(".sticky-nav").stick_in_parent();
          // if have scroll top
          var myNav = document.getElementById("showbacktop");
          if(myNav){
            $(".sticky").stick_in_parent({offset_top: 70});
          } else {
            $(".sticky").stick_in_parent({offset_top: 10});
         }
      },
      /**
      * ------------------------------------------------------------------------
      * Social share function
      * ------------------------------------------------------------------------
      */
      Social_windows: function () {
          $('.blank-windows').click(function() {
              var newwindow = window.open($(this).prop('href'), '', 'height=300,width=500');
              if (window.focus) {
                  newwindow.focus();
              }
              return false;
          });
      },
      /**
      * ------------------------------------------------------------------------
      * Progress scroll line function
      * ------------------------------------------------------------------------
      */
      Progress_scroll: function () {
          // progress line
          $(window).scroll(function () {
              var s = $(window).scrollTop(),
                  d = $(document).height(),
                  c = $(window).height();
              var scrollPercent = (s / (d-c)) * 100;
              var position = scrollPercent;
              $("#progress-bar").attr('value', position);
          });
      },
      /**
      * ------------------------------------------------------------------------
      * Lazy load images function
      * ------------------------------------------------------------------------
      */
      Lazy_load: function () {
          // lazy load in all
          var lazyLoadInstance = new LazyLoad({
              elements_selector: ".lazy",
              callback_reveal: function (el) {
                  if ( el.complete && el.naturalWidth !== 0 ) {
                    el.classList.remove('loading'),
                    el.classList.add('loaded');
                  }
              }
          });
          // lazy load in tabs
          $('a[data-toggle="tabajax"]').on('shown.bs.tab', function () {
               $('.tab-content>.active', function () {
                  lazyLoadInstance.update();
               });
          });
        // lazy load slider
          $('.carousel').on('slid.bs.carousel', function () {
              lazyLoadInstance.update();
          });
          $('.owl-carousel').on('translated.owl.carousel', function(event) {
              lazyLoadInstance.update();
          });
      },
      /**
      * ------------------------------------------------------------------------
      * Mobile Menu function
      * ------------------------------------------------------------------------
      */
      Mobile_menu: function () {
          // Push mobile menu
          $('.back-menu').click(function() {
              $('.menu-mobile').removeClass('pushleft-open pushright-open');
              $('body').removeClass('sidenav-left-open sidenav-right-open');
          });
          // push menu to left
          $('#showLeftPush').click(function () {
              $('body').toggleClass('sidenav-left-open');
              $('.push-left').toggleClass('pushleft-open');
          });
          // push menu to right
          $('#showRightPush').click(function () {
              $('body').toggleClass('sidenav-right-open');
              $('.push-right').toggleClass('pushright-open');
          });
      },
      /**
      * ------------------------------------------------------------------------
      * Owl carousel js function
      * ------------------------------------------------------------------------
      */
      Owl_carousel: function () {
          $('#owl-carousel1,#owl-carousela1,#owl-carousela2,#owl-carousela3,#owl-carousela4,#owl-carousela5,#owl-carousela6,#owl-carousela7,#owl-carousela8,#owl-carousela9').owlCarousel({
              margin:10,
              responsiveClass:true,
              items:1,
              dots: false,
              nav:true
          }),
          $('#owl-carousel2,#owl-carouselb1,#owl-carouselb2,#owl-carouselb3,#owl-carouselb4,#owl-carouselb5,#owl-carouselb6,#owl-carouselb7,#owl-carouselb8,#owl-carouselb9').owlCarousel({
              margin:10,
              responsiveClass:true,
              dots: false,
              responsive:{
                  0:{
                      items:1,
                      nav:true
                  },
                  576:{
                      items:2,
                      nav:true
                  }
              }
          }),
          $('#owl-carousel3,#owl-carouselc1,#owl-carouselc2,#owl-carouselc3,#owl-carouselc4,#owl-carouselc5,#owl-carouselc6,#owl-carouselc7,#owl-carouselc8,#owl-carouselc9').owlCarousel({
              margin:10,
              responsiveClass:true,
              dots: false,
              responsive:{
                  0:{
                      items:1,
                      nav:true
                  },
                  576:{
                      items:2,
                      nav:true
                  },
                  992:{
                      items:3,
                      nav:true
                  }
              }
          }),
          $('#owl-carousel4,#owl-carouseld1,#owl-carouseld2,#owl-carouseld3,#owl-carouseld4,#owl-carouseld5,#owl-carouseld6,#owl-carouseld7,#owl-carouseld8,#owl-carouseld9').owlCarousel({
              margin:10,
              responsiveClass:true,
              dots: false,
              responsive:{
                  0:{
                      items:1,
                      nav:true
                  },
                  576:{
                      items:2,
                      nav:true
                  },
                  992:{
                      items:4,
                      nav:true
                  }
              }
          }),
          $('#owl-carousel11,#owl-carousel12,#owl-carousel13,#owl-carousel14,#owl-carousel15,#owl-carouselz1,#owl-carouselz2,#owl-carouselz3,#owl-carouselz4,#owl-carouselz5,#owl-carouselz6,#owl-carouselz7,#owl-carouselz8,#owl-carouselz9').owlCarousel({
              margin:10,
              items:1,
              nav:true,
              loop:true
          }),
          $('#owl-auto').owlCarousel({
                margin:10,
                items:1,
                nav:true,
                loop:true,
                autoplay:true,
                autoplayTimeout:5000,
                autoplayHoverPause:true
            }),
          $('#owl-ticker').owlCarousel({
              margin:10,
              items:1,
              nav:false,
              loop:true,
              dots: false,
              autoplay:true,
              autoplayTimeout:5000,
              autoplayHoverPause:true
          }),
          $('#owl-ticker2').owlCarousel({
              margin:10,
              items:1,
              nav:false,
              loop:true,
              animateIn: 'slideInUp',
              dots: false,
              autoplay:true,
              autoplayTimeout:5000,
              autoplayHoverPause:true
          });
  
      },
      /**
      * ------------------------------------------------------------------------
      * Youtube Playlist function
      * ------------------------------------------------------------------------
      */
      Youtube_playlist: function() {  
          $(".playlist-title li a").click(function() {
              $(this).parent().addClass('active').siblings().removeClass('active');
          });
      },
      /**
      * ------------------------------------------------------------------------
      * Messages chat function
      * ------------------------------------------------------------------------
      */
        Messages_chat: function () {
            $('#send-message').on('submit', function (event) {
                event.preventDefault();
                var message = $('.messages-me').first().clone();
                message.find('p').text($('#input-me').val());
                $('#input-me').val('');
                message.prependTo('.messages-list');
                message.find('.minutes').text("0");
            });
        },
      /**
      * ------------------------------------------------------------------------
      * Bootstrap function
      * ------------------------------------------------------------------------
      */
      Bootstrap_module: function() {
          // popover
          $('[data-toggle="popover"]').popover();
          
          // tooltips
          $('[data-toggle="tooltip"]').tooltip();
      
          // scrollspy
          $('body').scrollspy({ target: '#navbar-scroll' });
          $('main').scrollspy({ target: '#main-scroll' });
      },
      /**
      * ------------------------------------------------------------------------
      * Custom JS function
      * ------------------------------------------------------------------------
      */
      Custom: function () {
          // Insert your custom javascript in here
      }
    };
  
    $(document).ready(function () {
      bn.Launch();
    });
})(jQuery);