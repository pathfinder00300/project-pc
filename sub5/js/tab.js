$(document).ready(function(){

    // 처음에는 모든 레시피 숨김
    $('.recipe_content, .recipe_content2').hide();

    // 첫 번째 레시피만 표시
    $('.recipe_content').eq(0).show();
    $('.recipe_content2').eq(0).show();


    // 탭 클릭
    $('.recipe_intro .btn .tab').click(function(e){

        e.preventDefault();

        var index = $(this).index();


        // 모든 탭 active 제거
        $('.recipe_intro .btn .tab').removeClass('active');

        // 클릭한 탭 active
        $(this).addClass('active');


        // 모든 레시피 숨기기
        $('.recipe_content, .recipe_content2').hide();


        // 클릭한 번호에 해당하는 레시피만 표시
        $('.recipe_content').eq(index).fadeIn(400);
        $('.recipe_content2').eq(index).fadeIn(400);

    });

});