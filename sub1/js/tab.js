$(document).ready(function(){

    // 처음에는 첫 번째 내용만 보이게
    $('.sajo_intro').show();
    $('.sajo_intro2').hide();


    $('.tabs .tab').on('click', function(e){

        e.preventDefault();

        // 내가 클릭한 탭의 순번
        let index = $(this).index('.tabs .tab');


        // 모든 탭 비활성화
        $('.tabs .tab').removeClass('active');

        // 클릭한 탭만 활성화
        $(this).addClass('active');


        // 모든 내용 숨기기
        $('.sajo_intro, .sajo_intro2').hide();


        // 첫 번째 탭
        if(index === 0){

            $('.sajo_intro').fadeIn('slow');

        }

        // 두 번째 탭
        else if(index === 1){

            $('.sajo_intro2').fadeIn('slow');

        }

    });

});