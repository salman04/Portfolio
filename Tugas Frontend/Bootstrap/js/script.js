//parallax

//navbar
$(window).on('load', function(){
    // $('.nav-link').addClass('navmuncul');

        $('.nav-item .nav-link').each(function(i){
            setTimeout(function(){
                $('.nav-item .nav-link').eq(i).addClass('navmuncul');
            }, 400 * (i+1));
        });
        

});

//jumbotron

$(window).on('load', function(){

   
    $('.hfirst').addClass('hmuncul');
    $('.hsecond').addClass('hmuncul');


});

//destinasi
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll > $('.destinasi').offset().top - 350){
        $('.destinasi .thumbnail').each(function(i){
            setTimeout(function(){
                $('.destinasi .thumbnail').eq(i).addClass('muncul');
            }, 200 * i);
        });
        
    }

    //testimoni
    if(wScroll > $('.testimoni').offset().top - 280){
    $('.testimoni .testi').each(function(i){
            setTimeout(function(){
                $('.testimoni .testi').eq(i).addClass('testimuncul');
            }, 400 * (i+1));
        });
    }


});




