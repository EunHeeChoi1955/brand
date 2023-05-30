$(function () {
	
	var swiper2 = new Swiper('.hdtopbn_slide', {
		/*slidesPerView: "auto",
		loop : true,*/
		autoplay: {
            delay: 4500
        }
	});

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".mySwiper .swiper-button-next",
            prevEl: ".mySwiper .swiper-button-prev"
        }
    });

    var mainCardSwiper = new Swiper('.main_slide .card-swiper', {
        slidesPerView: 'auto',
        speed: 500,
        autoplay: {
            delay: 4500
        },
        loop: true,
        pagination: {
            el: '.card-swiper .swiper-pagination',
            type: 'fraction'
        },
        navigation: {
            nextEl: '.card-swiper .swiper-button-next',
            prevEl: '.card-swiper .swiper-button-prev'
        },
        breakpoints: {
            1024: {
                spaceBetween: 10
            }
        },
        watchSlidesProgress: true,
        on: {
            progress: function (swiper) {
                var space = parseInt($(swiper.slides[0]).css('padding-left'));

                setTimeout(function () {
                    for (var i = 0; i < swiper.slides.length; i++) {
                        var slideProgress = swiper.slides[i].progress;
                        var distX = slideProgress * space;
                        if (i == swiper.activeIndex - 1) {
                            distX -= 400;
                        }
                        swiper.slides[i].querySelector('.box').style.transform = "translate3d(" + distX + "px, 0, 0)";
                    }
                }, 0)
            },
            touchStart: function (swiper) {
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                    swiper.slides[i].querySelector('.box').style.transition = "";
                }
            },
            setTransition: function (swiper) {
                var speed = swiper.params.speed;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector('.box').style.transition = speed + "ms";
                }
            },
            transitionEnd: function (swiper) {
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                    swiper.slides[i].querySelector('.box').style.transition = "";
                }
                swiper.slideToLoop(swiper.realIndex, 0, false);
            }

        }
    });

    //header - search
    function searchArea() {
        var $scope = $('.header'),
            $container = $scope.find('.search-area'),
            $openSearch = $scope.find('.open-search'),
            $closeSearch = $container.find('.close-search');

        $openSearch.on('click', function () {
            $container.addClass('active');
            return false;
        })
        $closeSearch.on('click', function () {
            $container.removeClass('active');
        })
    }
    searchArea();




    $(document).ready(function () {
        $('#go_top').click(function () {
            $("html, body").stop().animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });



    $('.m_menu').click(function (e) {
        e.preventDefault();
        $('.m_gnb_wrap').addClass('on')
    });

    $('.m_gnb_wrap .close').click(function (e) {
        e.preventDefault();
        $('.m_gnb_wrap').removeClass('on')
        $('.m_gnb').find('.sub').removeClass('show').animate({
            height: 0
        })
        $('.m_gnb').find('.dept1').removeClass('rot');
    });



    $(window).scroll(function () {
        curr = $(window).scrollTop();
        if (curr > 300) {
            $('.float_top').addClass('visib');
        } else {
            $('.float_top').removeClass('visib');
        }
    });

    // subpage title ad 2022-09-16 추가
    $(window).scroll(function () {
        curr = $(window).scrollTop();
        if (curr > 65) {
            $('.gnb_menu.gnbmain').addClass('fix');
            $('.main_vis').addClass('admg');
        } else {
            $('.gnb_menu.gnbmain').removeClass('fix');
            $('.main_vis').removeClass('admg');
        }
    });
    // subpage title ad 2022-09-16 추가
    // subpage title ad 2022-09-16 추가
    $(window).scroll(function () {
        curr = $(window).scrollTop();
        if (curr > 65) {
            $('.gnb_menu.sub').addClass('fix');
            $('.subpage_tit').addClass('admg');
        } else {
            $('.gnb_menu.sub').removeClass('fix');
            $('.subpage_tit').removeClass('admg');
        }
    });
    // subpage title ad 2022-09-16 추가


    $(window).scroll(function () {
        curr = $(window).scrollTop();
        if (curr > 200) {
            $('.header').addClass('dark');
        } else {
            $('.header').removeClass('dark');
        }
    });


    $(function () {
        $('.faq_nav li').click(function () {
            idx = $(this).index() + 1; //제로베이스로 순서를 줌()+1하면 1부터 시작
            $('.faq_nav li').removeClass('on')
            $(this).addClass('on')

            $('.faq_con div').removeClass('on')
            $('#faqCon' + idx).addClass('on')
        })

    });

    $('.m_gnb > li > a.dept1').click(function (e) {
        e.preventDefault();
        h = $(this).siblings('.sub').find('ul').outerHeight();

        if ($(this).siblings('.sub').height() > 0) {
            $('.m_gnb .sub').stop().animate({
                height: 0
            }, 300)
            // $(this).removeClass('plus')

        } else {
            $('.m_gnb .sub').stop().animate({
                height: 0
            }, 300)
            $(this).siblings('.sub').stop().animate({
                height: h
            }, 300)
            // $('.plus').not(this).removeClass('plus');
            // $(this).addClass('plus');

        }
    });


    $(".viewm").click(function (e) {
        e.preventDefault();
        var subMenu = $(this).next();

        $('.show').not(subMenu).removeClass('show');
        subMenu.toggleClass('show');

        $('.rot').not(this).removeClass('rot');
        $(this).toggleClass('rot');

        return false
    });


    // customer-paidlist receipt checkbox
    // check all
    $(".result_wrap").on("click", "#check_all", function () {
        $(this).parents(".result_wrap").find('input').prop("checked", $(this).is(":checked"));
    });
    // check individual
    $(".result_wrap").on("click", ".rcpt", function () {
        var is_checked = true;
        $(".result_wrap .rcpt").each(function () {
            is_checked = is_checked && $(this).is(":checked");
        });
        $("#check_all").prop("checked", is_checked);
    });


    AOS.init();

    
 
    
})