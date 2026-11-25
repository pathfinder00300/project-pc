$(document).ready(function(){

    // 페이지가 처음 열렸을 때
    // 오른쪽 큰 이미지 중 첫 번째 이미지만 보여줌
    $('.company_right ul li:eq(0)').show();


    // 왼쪽 썸네일 이미지를 클릭했을 때 실행
    $('.company_left .btn a').click(function(e){

        // a태그의 기본 링크 이동 기능을 막음
        e.preventDefault();


        // 클릭한 썸네일이 몇 번째인지 번호를 구함
        // 첫 번째 = 0, 두 번째 = 1, 세 번째 = 2
        var ind = $(this).index('.company_left .btn a');


        // 오른쪽에 있는 큰 이미지를 전부 숨김
        $('.company_right ul li').hide();


        // 클릭한 썸네일과 같은 번호의 큰 이미지만
        // 서서히 나타나게 함
        $('.company_right ul li:eq(' + ind + ')').fadeIn('slow');

    });

});

// 숫자 스크롤링
$(document).ready(function(){

    // 숫자 카운트 함수
    function count_ani(target, finalNumber){

        $({ val : 0 }).animate({ val : finalNumber }, {
            duration: 1500, // 1.5초
            step: function(){
                var number = Math.floor(this.val);
                $(target).text(number);
            },
            complete: function(){
                $(target).text(finalNumber);
            }
        });
    }
    // company_bottom 위치
    var count_top = $('.company_bottom').offset().top;

    // 한 번만 실행하기 위한 변수
    var onecount = false;
    // 스크롤 이벤트
    $(window).on('scroll', function(){

        var scroll_top = $(window).scrollTop();
        // company_bottom 근처까지 스크롤했을 때
        if(scroll_top > count_top - 500 && onecount == false){
            count_ani('.count1', 1964);
            count_ani('.count2', 12);
            count_ani('.count3', 6);
            count_ani('.count4', 30);
            onecount = true;
        }
    });
});

