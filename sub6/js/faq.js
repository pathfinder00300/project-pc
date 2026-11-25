$('.article .question').on('click', function(e){

    e.preventDefault();

    // 내가 클릭한 질문의 답변
    let answer = $(this).next('.answer');

    // 내가 클릭한 질문의 + 아이콘
    let icon = $(this).find('.toggle');


    // 현재 답변이 열려 있는지 확인
    if(answer.is(':visible')){

        // 열려 있으면 닫기
        answer.stop().slideUp(300);

        // - 를 + 로 변경
        icon.text('add');

    }else{

        // 다른 답변은 전부 닫기
        // $('.article .answer').stop().slideUp(300);

        // 다른 아이콘은 전부 + 로 변경
        $('.article .toggle').text('add');


        // 내가 클릭한 답변만 열기
        answer.stop().slideDown(300);

        // + 를 - 로 변경
        icon.text('remove');
    }

});

$('.all').on('click', function(e){

    e.preventDefault();

    let text = $(this).find('span').eq(0);
    let icon = $(this).find('.material-symbols-outlined');

    if($('.article .answer:hidden').length > 0){

        // 모든 답변 열기
        $('.article .answer').stop().slideDown(300);

        // 질문 아이콘을 - 로 변경
        $('.article .toggle').text('remove');

        // 모두열기 → 모두닫기
        text.text('모두닫기');

        // 아래 화살표 → 위 화살표
        icon.text('arrow_drop_up');

    }else{

        // 모든 답변 닫기
        $('.article .answer').stop().slideUp(300);

        // 질문 아이콘을 + 로 변경
        $('.article .toggle').text('add');

        // 모두닫기 → 모두열기
        text.text('모두열기');

        // 위 화살표 → 아래 화살표
        icon.text('arrow_drop_down');
    }

});