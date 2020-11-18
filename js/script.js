// -------menu-bar-------//

$(".bar").click(function(){
    $(".nav-item").fadeToggle()
})

$(window).scroll(function(){
  var scrollamount = $(window).scrollTop()
  if(scrollamount > 50){
    $(".menubar").addClass("fixed")
  }else{
    $(".menubar").removeClass("fixed")
  }
})




// -------form-------//

$(".search").click(function(){
    $(".overlay").fadeIn()
})
$(".cross").click(function(){
    $(".overlay").fadeOut()
})


// ------banner-play------//

$('.venobox').venobox();



// ------service-slider------//

$('.main-slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
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



  //-----barfiller-------//

  $(document).ready(function(){

    $('#bar1').barfiller();
    $('#bar2').barfiller();
    $('#bar3').barfiller({ barColor: '#fc6' });
    $('#bar4').barfiller({ barColor: '#900', duration: 3000 });
    
  });


  // ------port-slider------//

$('.port-slider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  autoplay: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: '<i class="fa fa-chevron-right nxt" aria-hidden="true"></i>',
  prevArrow: '<i class="fa fa-chevron-left prv" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
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

// ------blog-slider------//

$('.blog-slider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  autoplay: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: '<i class="fa fa-chevron-right nxt" aria-hidden="true"></i>',
  prevArrow: '<i class="fa fa-chevron-left prv" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
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