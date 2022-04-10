$(document).ready(function(){
    $('.carousel__inner').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"> <img src="icons/Aleft.png"> </button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="icons/Aright.png"> </button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                  dots: true,
                  arrows: false,
                  
                }
            }
        ]
    });

    $('ul.catalogue__tabs').on('click', 'li:not(.catalogue__tab-active)', function() {
        $(this)
          .addClass('catalogue__tab-active').siblings().removeClass('catalogue__tab-active')
          .closest('div.container').find('div.catalogue__content').removeClass('catalogue__content_active').eq($(this).index()).addClass('catalogue__content_active');
      });
  
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalogue-item__content').eq(i).toggleClass('catalogue-item__content_active');
                $('.catalogue-descr').eq(i).toggleClass('catalogue-descr_active');
            })
        });
    };
    toggleSlide('.catalogue-item__more');
    toggleSlide('.catalogue-descr__back');

}); 