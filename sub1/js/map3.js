$('.map_info').on('click', function(e){

    e.preventDefault();

    let currentMap = $(this).closest('.etc_map');
    let mapArea = currentMap.find('.map_area');
    let icon = currentMap.find('.trigger .material-symbols-outlined');


    if(mapArea.is(':visible')){

        // 현재 지도 닫기
        mapArea.stop().slideUp(300);

        // 화살표 아래로
        icon.text('keyboard_arrow_down');

        // 열린 스타일 제거
        currentMap.removeClass('active');

    }else{

        // 다른 지도 닫기
        $('.etc_map .map_area').stop().slideUp(300);

        // 다른 화살표 아래로
        $('.etc_map .trigger .material-symbols-outlined')
            .text('keyboard_arrow_down');

        // 다른 active 제거
        $('.etc_map').removeClass('active');


        // 현재 지도 열기
        mapArea.stop().slideDown(300);

        // 화살표 위로
        icon.text('keyboard_arrow_up');

        // 열린 스타일 적용
        currentMap.addClass('active');
    }

});