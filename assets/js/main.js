

 var owls= $('#carouselbanner')
 
 
 owls.owlCarousel({
    items:1,
    loop:true,
    margin:40,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    dots:false,
});
$('.nxt-btn').click(function() {
    owls.trigger('next.owl.carousel');
});
$('.prv-btn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owls.trigger('prev.owl.carousel');
});
$('#chem').owlCarousel({
  // items:4,
   loop:true,
   margin:40,
   autoplay:false,
   autoplayTimeout:1000,
   autoplayHoverPause:true,
   responsive:{
     0:{
         items:1,
         nav:true
     },
     600:{
         items:2,
         nav:false
     },
     1000:{
         items:3,
         
     }
 }
});
$('#micro').owlCarousel({
 // items:4,
  loop:true,
  margin:40,
  autoplay:false,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  responsive:{
    0:{
        items:1,
        nav:true
    },
    600:{
        items:2,
        nav:false
    },
    1000:{
        items:3,
        
    }
}
});
$("#testimonial-slider").owlCarousel({
    loop:true,
    pagination:true,
    navigation:false,
    slideSpeed:1000,
    autoPlay:true,
    autoplayTimeout:1000,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:3,
          
      }
  }
});
$(document).ready(function(){
    $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
  });
  $(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        loop:true,
        pagination:true,
        navigation:false,
        slideSpeed:1000,
        autoPlay:true,
        autoplayTimeout:1000,
        responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:false
          },
          1000:{
              items:3,
              
          }
      }
    });
  });
  $(document).scroll(function(){
     if (document.body.scrollTop > 37 || document.documentElement.scrollTop > 37) {
    //   $('#navbar').css({
    //     position:'fixed',
    //     top:0,
    //     background:'white',
    //     left:0,
    //     width:'100%',
    //     'z-index':100,
        
    //   });
    } else {
      // $('#navbar').css({
      //   position:'relative',
       
      // });
    }
  });
  
  function srcolltotop() {
    
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
    // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 600) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
   $(document).ready(function(){
     if(screen.width<1024){
       $('.wrapper').addClass('owl-carousel owl-theme');
       $('.wrapper').owlCarousel({
        loop:true,
        pagination:true,
        navigation:false,
        margin:15,
        dots:false,
        slideSpeed:1000,
        autoPlay:true,
        autoplayTimeout:1000,
        responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:false
          },
          1000:{
              items:4,
              
          }
      }
    });
     }
  
   });
   $('#chemis').owlCarousel({
    // items:4,
     loop:true,
     margin:40,
     autoplay:false,
     autoplayTimeout:1000,
     autoplayHoverPause:true,
     responsive:{
       0:{
           items:1,
           nav:true
       },
       600:{
           items:2,
           nav:false
       },
       1000:{
           items:2,
           
       }
   }
  });
  
  $('#equip').owlCarousel({
    // items:4,
     loop:true,
     margin:40,
     autoplay:true,
     autoplayTimeout:1800,
     autoplayHoverPause:true,
     dots:false,
     responsive:{
       0:{
           items:1,
           nav:true
       },
       600:{
           items:2,
           nav:false
       },
       1000:{
           items:3,
           
       }
   }
  });
  $(document).scroll(()=>{
    var scr = $(document).scrollTop() ;
    console.log(scr)
    if(scr>134){
      $('#header').slideDown();
     
    }else{
      $('#header').slideUp();
    }
  });