    

   (function($){
    
   
   const Hwalgi = {
        init:function(){//메소드 (함수)
            this.parallax();
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.section5();
            this.section6();
            this.section7();
            this.section8();
            this.section9();
            this.section10();
            this.footer();
         },
         parallax:function(){
   

            // 객체화 : 패럴럭스의 모든 섹션에서 발생되는 변수 충돌 피하기 위해서 
            const scrollEvent = {
               init: function(){
                  this.header();
                  this.section2();
                  this.section3();
                  this.section4();
               },
               header : function(){
                     // 스크롤 이벤트
                     // 현재스크롤값(newScroll) newScr
                     // 이전스크롤값(oldScroll) oldScr            
                     // 방향을 판단
                     let newScr = $(window).scrollTop(); // 위에 배치
                     let oldScr = newScr;                // 아래에 배치
                     let result = '';


                     $(window).scroll(function(){
                        newScr = $(window).scrollTop();
                        //스크롤 값 비교
                        //console.log('newScr :'+ newScr, 'oldScr:' + oldScr);
                        
                        result = (newScr-oldScr) > 0 ? "DOWN":"UP";  //내려가면 DOWN 리턴, 올라가면 UP 리턴
                        //console.log( result );
                        if(result=="DOWN"){
                           //console.log('스크롤이 아래로 내려가고 있다 헤더영역을 위로 올려서 숨겨라!');
                           $('#header').addClass('addParallaxUp');
                        }
                        if(result=="UP"){
                           //console.log('스크롤이 위로 올라가고 있다  헤더영역을 아래로 내려서 보여라!');
                           $('#header').removeClass('addParallaxUp');
                           if($(window).scrollTop()==0){ //top이 0일때 60에서 72로 늘어나라
                            $('#header').addClass('addParallaxUp');
                           }
                        }
                     
                        oldScr = newScr; 
                     });
               },
               section2: function(){// 빨간박스위 거품, txt들
                 
                  // 타이틀 누구.title 맨위에서 타이틀까지 간격(offset().top) 스크롤 탑값 .scrollTop 구하기
                  // console.log( '$(\'.title\').offset().top :', $('#section2 .title').offset().top );
                  // console.log( '$(window).height() :', $('#section2 .title').offset().top - $(window).height() );
                  // 타이틀 탑값 위치를 창높이 만큼 빼주고 미리 애니메이션이 수행 되도록 계산

                  let titT = $('#section1').offset().top;
                  let winH = $(window).height();
                  let titTop = titT - winH; // 윈도우의 스크롤 탑값이 여기에 도달하면(if ~ then) 애니메이션 구현 
                  
                  // 윈도우.스크롤 이벤트  scroll(); 메서드 : 스크롤 값이 발생이 되어야 구현된다.
                  $(window).scroll(function(){
                     //console.log('$(window).scrollTop():',$(window).scrollTop());
                     if( $(window).scrollTop() >= titTop ){  //스크롤탑값이 130px 이상이면 구현해라 애니메이션을  addClass
                        //섹션2 선택자에 클래스를 추가해라 addClass
                        $('#section1').addClass('addParallax');

                     }
                     if( $(window).scrollTop() == 0 ){  // 맨위 스크롤 탑값이 0이면 추가된 클래스 삭제
                        //섹션2 선택자에 클래스를 추가해라 addClass
                        $('#section1').removeClass('addParallax'); //초기화 되서 스크롤 넘기면 반복적으로 됌

                     }



                  }); 




               },
               section3: function(){ //홈삼
                 
                 
                  const titT = $('#section2').offset().top;
                  let winH = $(window).height();
                  let titTop = titT - winH; // 윈도우의 스크롤 탑값이 여기에 도달하면(if ~ then) 애니메이션 구현 
                  
                  // 윈도우.스크롤 이벤트  scroll(); 메서드 : 스크롤 값이 발생이 되어야 구현된다.
                  $(window).scroll(function(){
                     //console.log('$(window).scrollTop():',$(window).scrollTop());
                     if( $(window).scrollTop() >= titTop ){  //스크롤탑값이 130px 이상이면 구현해라 애니메이션을  addClass
                        //섹션3 선택자에 클래스를 추가해라 addClass #section3 .addParallax
                        $('#section2').addClass('addParallax');

                     }
                     if( $(window).scrollTop() == 0 ){  // 맨위 스크롤 탑값이 0이면 추가된 클래스 삭제
                        //섹션3 선택자에 클래스를 추가해라 addClass #section3 .addParallax
                        $('#section2').removeClass('addParallax'); //초기화 되서 스크롤 넘기면 반복적으로 됌

                     }



                  }); 




               }
               
            }
            
            scrollEvent.init();

         },
         header:function(){
            const container = $('#header .container');
            const mainBtn   = $('#header .main-btn');
            const sub       = $('#header .sub');
            const subBtn    = $('#header .sub-btn');
            const subSub    = $('#header .sub-sub');
            

            //메인버튼
            mainBtn.on({
                mouseenter: function(){
                     sub.stop().fadeOut(0);
                     $(this).next().stop().fadeIn(300);
                     mainBtn.removeClass('addDeco');//이전 추가된 클래스 삭제
                     $(this).addClass('addDeco');
                }
            });

            //서브버튼
            subBtn.on({
                mouseenter: function(){
                     subSub.stop().fadeOut(0);
                     $(this).next().stop().fadeIn(300);
                }
            });
            //마우스가 헤더안에 컨테이너 영역 범위를 벗어나면(떠나면)mouseleave
            //어디를 - 헤더안에 컨테이너 선택자
            //그러면 모든 서브메뉴가 사라진다.
            container.on({
               mouseleave: function(){
                  sub.stop().fadeOut(300);
                  subSub.stop().fadeOut(300);
                  mainBtn.removeClass('addDeco');
               }
            }); 
         },
         section1:function(){

         
         },
         section2:function(){ //패럴럭스- 마우스 스크롤링 이벤트 애니메이션
            
         },
         section3:function(){
           
         },
         
         footer:function(){
            
         }

    };    // 객체



    Hwalgi.init();


})(jQuery);