
    //'./product.html?pname=베이스'
    var key, value;
  
    function getParams() {
   
    // 현재 페이지의 url   ./product.html?pname=베이스
    var url = decodeURIComponent(location.href);
    // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
    url = decodeURIComponent(url);  //  'ex2.html?num=1'
 
    var params='';
    // url에서 '?' 문자 이후의 파라미터 문자열까지 자르기
    params = url.substring( url.indexOf('?')+1, url.length );   // 'abcdefg'.substring(2,40);=> 'cdef'
    // '문자열'.substring(시작인덱스 , 자를개수) 
    // 'abcdefg'.substring(2 , 3) ->  'cde'
    // params = 'pname=베이스' 
    
    key = params.split("=")[0];  //'pname'
    value = params.split("=")[1];  // '베이스'
    }   
    getParams();  //함수호출



   //ajax 처리

   $.ajax({
       url: './js/dearim.json',
       dataType: 'json',
       success: function(data){
           var useData = data.dearim; //useData -> 모든 상품 리스트
           
           function dataPrint(arr){ // 해당 상품 객체를 출력한다
                   console.log(arr);
                   var txt = '<ul>';
                   
                   for(var i in arr){
                       
                       var $Name = arr[i].name;
                       var $Image = arr[i].image;

                       txt+='<li>';
                       txt+='<img src="'+ $Image +'" alt="">';
                       txt+='<span>'+$Name+'</span>'; 
                       txt+='<a href="#" class="pop_open">자세히보기</a>';
                       txt+='</li>';
                   }

                   txt += '</ul>';

                   $('.product_list').html(txt);
              
           };
           
           var newArray = []; //검색된 상품리스트를 담을 배열
           var search_on =false;  //검색 안되었을때 false , 검색 되었을때 true
           //초기실행, 함수호출
            
           if(value){ // 다른페이지에서 검색어가 넘어왔을때
                //다른페이지에서 검색어 입력을 하였을때...
                newArray = useData.filter(function(element){ //넘어온 검색어로 상품검색
                    return element.name.includes(value);
                });
                // console.log(newArray);

                if(newArray.length!=0){ //검색된 제품 리스트가 1개라도 있다면..
                  dataPrint(newArray); //검색된 제품만 출력
                }else{ //검색된 제품리스트가 없으면..
                    $('.product_list').html('<span style="display:block;text-align:center; font-size:30px; color:#999; margin-bottom:100px">검색된 상품이 없습니다</span>');
                }
                search_on =true;
           }else{ //다른 페이지에서 검색어가 넘어오지 않았을때
                dataPrint(useData); //모든 상품리스트를 출력해라
                search_on =false;
           }
           

           //검색버튼을 클릭했을때...
           $('#btn').click(function(){
                newArray = useData.filter(function(element){
                    //console.log($('#title').val());
                    //return element.Name == $('#title').val();
                    return element.name.includes($('#title').val());
                });
                //상품페이지에서 입력된 검색어로 상품리스트 검색
                //console.log(newArray);
                if(newArray.length!=0){ //검색된 상품이 있으면
                    dataPrint(newArray); //검색된 상품리스트 출력
                }else{ //검색된 상품이 없으면
                      $('.product_list').html('<span style="display:block;text-align:center; font-size:30px; color:#999">검색된 상품이 없습니다</span>');
                }
                search_on =true;
           });

           $('.btn_all').click(function(){  //모두보기 클릭시
               dataPrint(useData); //모든상품 리스트 출력
               search_on =false;
           });

        //팝업처리 함수
        var pop_txt="";
        function popchange(obj){ //팝업창에 내용을 출력하는 함수
            pop_txt="";
            
            pop_txt+='<div class="product_img"><img src="'+ obj.bigimg +'" alt=""></div>';
            pop_txt+='<div class="product_warp">';
            pop_txt+='<h4>'+ obj.name +'</h4>';
            pop_txt+='<p>'+ obj.memo +'</p>';
            pop_txt+='<dl class="product_info">';
            pop_txt+='<div>';
            pop_txt+='<dt>제품유형</dt>';
            pop_txt+='<dd>'+ obj.type +'</dd>';
            pop_txt+='</div>';
            pop_txt+='<div>';
            pop_txt+='<dt>브랜드/제조사</dt>';
            pop_txt+='<dd>'+ obj.brand +'</dd>';
            pop_txt+='</div>';
            pop_txt+='<div>';
            pop_txt+='<dt>판매사</dt>';
            pop_txt+='<dd>'+ obj.seller +'</dd>';
            pop_txt+='</div>';
            pop_txt+='<div>';
            pop_txt+='<dt>제품원료</dt>';
            pop_txt+='<dd>'+ obj.material +'</dd>';
            pop_txt+='</div>';
            pop_txt+='</dl>';
            pop_txt+=`<a href="https://www.sajomall.co.kr/" target="_blank" title="사조몰 새 창으로 열기">
                          <span class="btn_txt">사조몰 바로가기</span>
                          <span class="material-symbols-outlined">storefront</span>
                     </a>
                     </div>`;


            $('.modal_area .product_detail').html(pop_txt);
        }
      
        //팝업창 열기
        $(document).on('click', '.pop_open', function(e) {//json 파일을 불러와서 dom을 새로만들때... <a> 태그가 처리되지 않을때..
            e.preventDefault();
            $('.modal_bg').show();
            $('.modal_area').fadeIn('fast'); //팝업창 열기
            ind = $(this).parent('li').index(); // 0 1 2 3 4 상품리스트의 배열의 index번호를 추출
      
            if(search_on==false){//검색 안되었을때
                popchange(useData[ind]); //클릭한 인덱스에 맞는 객체만 전달
            }else if(search_on==true){//검색 되었을때
                popchange(newArray[ind]);
            }
        });

        //팝업창 닫기
        $('.modal_close, .modal_bg').click(function(e){  //모두보기 클릭시
            e.preventDefault();
             $('.modal_bg').hide();
            $('.modal_area').fadeOut('fast'); //팝업창 열기
        });


            
       } 
   });
    