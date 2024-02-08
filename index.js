// $('.modeM').on('click', function(){
//     $('.message').addClass('mode');
// })

$(document).ready(function() {
    $('.modeM').on('click', function(e) {
      e.stopPropagation(); // 이벤트 전파 방지
    $('.message').toggleClass('mode');
    });

    $(document).on('click', function(e) {
      // .modeM를 제외한 다른 영역을 클릭했을 때 mode 클래스 제거
    if (!$(e.target).is('.modeM')) {
        $('.message').removeClass('mode');
    }
    });
});