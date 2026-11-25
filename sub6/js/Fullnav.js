

   var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
   var on_off=false;  //false(안오버)  true(오버)
   
  
       $('#headerArea').mouseenter(function(){
          // var scroll = $(window).scrollTop();
           $(this).css('background','#fff');
          //$('.dropdownmenu li .depth1').css('color','#333'); 
            //헤더영역의 텍스트 색상과 로고이미지 경로 등을 교체
           on_off=true;
       });
       var visual_height = $('.visual').height();
   
        $('#headerArea').mouseleave(function(){
           var scroll = $(window).scrollTop();  //스크롤의 거리
           
           if(scroll<smh-102 ){ // 헤더가 비주얼 위에 있을때 (비주얼높이-원래헤더높이)
               $(this).css('background','rgba(255, 255, 255, 0.8)').css('backdrop-filter', 'blur(10px)').css('border-bottom','none'); 
               //$('.dropdownmenu li .depth1').css('color','#333');
           }else{  // 헤더가 비주얼 아래에 있을때
               $(this).css('background','#fff'); 
            //    $('.dropdownmenu li .depth1').css('color','#333');
           }
          on_off=false;    
        });
   
      $(window).on('scroll',function(){//스크롤의 거리가 발생하면
           var scroll = $(window).scrollTop();  
           //스크롤의 거리를 리턴하는 함수
           //console.log(scroll);

           if(scroll>smh-102){//스크롤이 비주얼의 높이-header높이 까지 내리면
               $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
            //    $('.dropdownmenu li .depth1').css('color','#333');
           }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
              if(on_off==false){
                   $('#headerArea').css('background','rgba(255, 255, 255, 0.8)').css('border-bottom','none');
                   $('.dropdownmenu li .depth1').css('color','#333');
              }
           };
            //상단 이동 버튼(TOP)처리
            if(scroll>visual_height){ //300이상의 거리가 발생되면
                $('.top_move').fadeIn('slow');  //top보이게
            }else{
                $('.top_move').fadeOut('fast');//top안보이게
            }
           
        });

  
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('.dropdownmenu .menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:295},'fast').clearQueue();
       },function() {
          $('.dropdownmenu .menu ul').hide(); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:102},'fast').clearQueue();
     });
    
     //1depth 효과
     $('.dropdownmenu .menu').hover(
       function() { 
           $('.depth1',this).css('color','#023E73');
           $('.depth1',this).addClass('active');
       },function() {
           $('.depth1',this).css('color','#333');
           $('.depth1',this).removeClass('active');
     });
     

     //tab 처리
     $('.dropdownmenu .menu .depth1').on('focus', function () {        
        $('.dropdownmenu .menu ul').slideDown('normal');
        $('#headerArea').animate({height:295},'fast').clearQueue();
     });

    $('.dropdownmenu .m6 li:last').find('a').on('blur', function () {        
        $('.dropdownmenu .menu ul').slideUp('fast');
        $('#headerArea').animate({height:102},'normal').clearQueue();
    });

    // top버튼 클릭시 상단으로 이동
    $('.top_move').click(function(e){
        e.preventDefault();
        //상단으로 스르륵 이동합니다.
        $("html,body").stop().animate({"scrollTop":0},700); //스크롤을 부드럽게 목표지점까지 이동시키는 코드
    });

    $('.search_open').click(function(e){

    e.preventDefault();

    $('.search_modal').fadeIn(300);

});


// 검색
$(document).on('click', '.search_open', function(e){
    e.preventDefault();
    $('.search_pop').fadeIn(300);
});
// 검색 닫기
$(document).on('click', '.search_close', function(){
    $('.search_pop').fadeOut(300);
});

// 검은 배경 클릭 시 닫기
$(document).on('click', '.modal_bg1', function(){
    $('.search_pop').fadeOut(300);
});

var brand_value=1;

$('#brand_list').change(function(){
      brand_value = $('#brand_list').val();
      console.log(brand_value);  // 1 2 3
});


 $('.search_btn').click(function(){
      var pname = $('#searchKeyword').val();  //베이스
      if(pname){  //검색어를 입력했으면...
          if(brand_value==1){
             location.href = '../../sub2/sub2_1.html?pname='+  pname;
          }else if(brand_value==2){
             location.href = '../../sub2/sub2_2.html?pname='+  pname;
          }else if(brand_value==3){
             location.href = '../../sub2/sub2_3.html?pname='+  pname;
          }
      }
      else{   //검색어를 입력하지 않았다면...
        alert('검색어를 입력하세요');
      }
});

$('.search_recommend ul li a').click(function(e){  //추천검색어 검색어 입력창에 넣기
    e.preventDefault();
    var txt = $(this).text();
    $('#searchKeyword').val(txt);

     var idx = $(this).index('.search_recommend ul li a');
     //console.log(idx);

    if(idx==0 || idx==1){
        brand_value=1;
        $('#brand_list').val(1);
    }else if(idx==2 || idx==3 || idx==4){
         brand_value=2;
         $('#brand_list').val(2);
    }else if(idx==5 || idx==6 || idx==7){
         brand_value=3;
         $('#brand_list').val(3);
    }

});