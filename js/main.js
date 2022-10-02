$(document).ready(function() {

    $('#show-hidden-menu').click(function() {
        $('.hidden-menu').show("200");
        $('.hidden-menu1').hide();
        $('.hidden-menu2').hide();
        $('.hidden-menu3').hide();
        $('.hidden-menu4').hide();
        $('.hidden-menu5').hide();
        $('.hidden-menu6').hide();
        $('.post1').show();
        $('.post2').hide();
        $('.post3').hide();
        $('.post4').hide();
        $('.post5').hide();
        $('.post6').hide();
        $('.post7').hide();
        $('.post-para1').show();
        $('.post-para2').hide();
        $('.post-para3').hide();
        $('.post-para4').hide();
        $('.post-para5').hide();
        $('.post-para6').hide();
        $('.post-para7').hide();
                    
    });
    
    $('#show-hidden-menu1').click(function() {
        $('.hidden-menu1').show("200");
        $('.hidden-menu').hide();
        $('.hidden-menu2').hide();
        $('.hidden-menu3').hide();
        $('.hidden-menu4').hide();
        $('.hidden-menu5').hide();
        $('.hidden-menu6').hide();
        $('.post2').show();
        $('.post1').hide();
        $('.post3').hide();
        $('.post4').hide();
        $('.post5').hide();
        $('.post6').hide();
        $('.post7').hide();
        $('.post-para1').hide();
        $('.post-para2').show();
        $('.post-para3').hide();
        $('.post-para4').hide();
        $('.post-para5').hide();
        $('.post-para6').hide();
        $('.post-para7').hide();
    });
    
    $('#show-hidden-menu2').click(function() {
        $('.hidden-menu2').show("200");
        $('.hidden-menu').hide();
        $('.hidden-menu1').hide();
        $('.hidden-menu3').hide();
        $('.hidden-menu4').hide();
        $('.hidden-menu5').hide();
        $('.hidden-menu6').hide();
        $('.post3').show();
        $('.post1').hide();
        $('.post2').hide();
        $('.post4').hide();
        $('.post5').hide();
        $('.post6').hide();
        $('.post7').hide();
        $('.post-para1').hide();
        $('.post-para2').hide();
        $('.post-para3').show();
        $('.post-para4').hide();
        $('.post-para5').hide();
        $('.post-para6').hide();
        $('.post-para7').hide();
    });

    $('#show-hidden-menu3').click(function() {
        $('.hidden-menu3').show("200");
        $('.hidden-menu').hide();
        $('.hidden-menu1').hide();
        $('.hidden-menu2').hide();
        $('.hidden-menu4').hide();
        $('.hidden-menu5').hide();
        $('.hidden-menu6').hide();
        $('.post4').show();
        $('.post1').hide();
        $('.post2').hide();
        $('.post3').hide();
        $('.post5').hide();
        $('.post6').hide();
        $('.post7').hide();
        $('.post-para1').hide();
        $('.post-para2').hide();
        $('.post-para3').hide();
        $('.post-para4').show();
        $('.post-para5').hide();
        $('.post-para6').hide();
        $('.post-para7').hide();
    });
    
    $('#show-hidden-menu4').click(function() {
        $('.hidden-menu4').show("200");
        $('.hidden-menu').hide();
        $('.hidden-menu1').hide();
        $('.hidden-menu2').hide();
        $('.hidden-menu3').hide();
        $('.hidden-menu5').hide();
        $('.hidden-menu6').hide();
        $('.post5').show();
        $('.post1').hide();
        $('.post2').hide();
        $('.post3').hide();
        $('.post4').hide();
        $('.post6').hide();
        $('.post7').hide();
        $('.post-para1').hide();
        $('.post-para2').hide();
        $('.post-para3').hide();
        $('.post-para4').hide();
        $('.post-para5').show();
        $('.post-para6').hide();
        $('.post-para7').hide();
    });
    
    $('#show-hidden-menu5').click(function() {
        $('.hidden-menu5').show("200");
        $('.hidden-menu').hide();
        $('.hidden-menu1').hide();
        $('.hidden-menu2').hide();
        $('.hidden-menu3').hide();
        $('.hidden-menu4').hide();
        $('.hidden-menu6').hide();
        $('.post6').show();
        $('.post1').hide();
        $('.post2').hide();
        $('.post3').hide();
        $('.post4').hide();
        $('.post5').hide();
        $('.post7').hide();
        $('.post-para1').hide();
        $('.post-para2').hide();
        $('.post-para3').hide();
        $('.post-para4').hide();
        $('.post-para5').hide();
        $('.post-para6').show();
        $('.post-para7').hide();
    });

    $('#show-hidden-menu6').click(function() {
        $('.hidden-menu6').show("200");
        $('.hidden-menu').hide();
        $('.hidden-menu1').hide();
        $('.hidden-menu2').hide();
        $('.hidden-menu3').hide();
        $('.hidden-menu4').hide();
        $('.hidden-menu5').hide();
        $('.post7').show();
        $('.post1').hide();
        $('.post2').hide();
        $('.post3').hide();
        $('.post4').hide();
        $('.post5').hide();
        $('.post6').hide();
        $('.post-para1').hide();
        $('.post-para2').hide();
        $('.post-para3').hide();
        $('.post-para4').hide();
        $('.post-para5').hide();
        $('.post-para6').hide();
        $('.post-para7').show();
    });
});
    
    
    
$("#photos").change(function(){
                _data_image =
            $('option:selected',this).data('image');
              $('.active').removeClass('active');
              $(_data_image).addClass('active');
    
});
      