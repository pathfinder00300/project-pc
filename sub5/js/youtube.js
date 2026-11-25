$(function() {

    // ==============================
    // 유튜브 리스트 복제
    // ==============================
    $('.youtube_list').each(function() {
        $(this).append($(this).children().clone());
    });


    // ==============================
    // 유튜브 리스트 흐르기
    // ==============================
    function youtubeSlide() {

        $('.youtube_list').animate(
            {
                marginLeft: '-=1px'
            },
            20,
            'linear',
            function() {

                // 첫 번째 썸네일 너비 + 간격
                var itemWidth = $('.youtube_list li:first').outerWidth(true);

                // 첫 번째 썸네일을 뒤로 이동
                if (parseInt($('.youtube_list').css('margin-left')) <= -itemWidth) {

                    $('.youtube_list').css('margin-left', 0);

                    $('.youtube_list li:first').appendTo('.youtube_list');
                }

                youtubeSlide();
            }
        );
    }

    youtubeSlide();


    // ==============================
    // 마우스를 올리면 멈춤
    // ==============================
    $('.youtube_wrap').on('mouseenter', function() {
        $('.youtube_list').stop(true);
    });


    // ==============================
    // 마우스를 빼면 다시 이동
    // ==============================
    $('.youtube_wrap').on('mouseleave', function() {
        youtubeSlide();
    });


    // ==============================
    // 썸네일 클릭 → 메인 영상 변경
    // ==============================
    $(document).on('click', '.youtube_item a', function(e) {

        e.preventDefault();

        var videoId = $(this).data('video');

        $('.youtube_main iframe').attr(
            'src',
            'https://www.youtube.com/embed/' + videoId
        );

    });

});