// JavaScript Document
	var article = $('.etc_map .map_info');  //모든 질문 답변 리스트 li
	//article.find('.a').slideUp(100); // 모든 답변 닫아라
    map_info.find('span').html('<span class="material-symbols-outlined">keyboard_arrow_down</span>'); // 모든 li의 질문에 아래 방향의 아이콘 삽입
    // $('.faq .article:first').find('.a').slideDown(100); // li 첫번쨰 답변만 열어라
    // $('.faq .article:first').find('span').html('<i class="fas fa-chevron-up"></i>');  // 첫번째 li 아이콘방향
    // 시작시 맨첫 탭 열어놓기
	
	$('.etc_map .map_info .trigger').click(function(e){  // 각각의 질문을 클릭하면
	    e.preventDefault();  //<a href="#"> 태그 링크 처리
        var myArticle = $(this).parents('.map_info'); //클릭한 해당 list -> li
	
        if(myArticle.hasClass('hide')){   //클릭한 해당 리스트의 상태가 hide냐?? 답변이 닫혀있냐??
            // article.find('.a').slideUp(100); //모든 답변을 닫아라
            // article.removeClass('show').addClass('hide'); // 모든 리스트를 hide교체
            // article.find('span').html('<i class="fas fa-chevron-down"></i>');  <-- 하나씩만 열리게 하는 코드

            myArticle.removeClass('hide').addClass('show');  // show로 바꾼다 
            myArticle.find('.a').slideDown(100);  //해당 리스트의 답변을 열어라  
            myArticle.find('span').html('<span class="material-symbols-outlined">keyboard_arrow_up</span>');
        } else {  // 'show' 답변이 열려있냐??
            myArticle.removeClass('show').addClass('hide');  // hide로 바꾼다 
            myArticle.find('.a').slideUp(100);  //해당 리스트의 답변을 닫아라  
            myArticle.find('span').html('<span class="material-symbols-outlined">keyboard_arrow_down</span>');
        }  
    });
  
//   //모두 여닫기 처리
//   $('.all').toggle(function(e){ // 홀수번쨰 클릭 시 -> 모두열기
//         e.preventDefault(); 
//         article.find('.a').slideDown(100); // 모든 답변을 열어라
//         article.removeClass('hide').addClass('show'); // show 클래스 변경
//         article.find('span').html('<span class="material-symbols-outlined">keyboard_arrow_up</span>'); //위쪽방향 아이콘 변경
//         $(this).text('모두닫기▲');
//   },function(e){  // 짝수번째 클릭시 -> 모두열기
//         e.preventDefault(); 
//         article.find('.a').slideUp(100); // 모든 답변을 닫아라
//         article.removeClass('show').addClass('hide'); // hide 클래스 변경
//         article.find('span').html('<span class="material-symbols-outlined">keyboard_arrow_down</span>');
//         $(this).text('모두열기▼');
//   });

//   $('.all').on('click', function(e){
//     e.preventDefault();

//     if (article.hasClass('hide')) {
//         // 모두 열기
//         article.find('.a').slideDown(100);
//         article.removeClass('hide').addClass('show');
//         article.find('span').html('<i class="fas fa-chevron-up"></i>');
//         $(this).text('모두닫기▲');

//     } else {
//         // 모두 닫기
//         article.find('.a').slideUp(100);
//         article.removeClass('show').addClass('hide');
//         article.find('span').html('<i class="fas fa-chevron-down"></i>');
//         $(this).text('모두열기▼');
//     }
// });

// JavaScript Document

const mapInfo = $('.etc_map .map_info');

$('.etc_map .map_info .trigger').on('click', function(e){
    e.preventDefault();

    const myMapInfo = $(this).closest('.map_info');

    if(myMapInfo.hasClass('hide')){

        // 닫혀있으면 열기
        myMapInfo.removeClass('hide').addClass('show');

        myMapInfo.find('.map_content').slideDown(300);

        $(this).find('span').text('keyboard_arrow_up');

    } else {

        // 열려있으면 닫기
        myMapInfo.removeClass('show').addClass('hide');

        myMapInfo.find('.map_content').slideUp(300);

        $(this).find('span').text('keyboard_arrow_down');

    }

});