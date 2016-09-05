$(document).ready(function(){
    var links = $('.sidebar-menu a');
    links.each(function(){
        $($(this).attr('href')).hide();
        if($(this).hasClass('selected changecolor')){
            $($(this).attr('href')).show();
        }
        $(this).click(function(e){
            e.preventDefault();
            if(!$(this).hasClass('selected changecolor')){
                links.each(function(){
                    $(this).removeClass('selected changecolor');
                    $($(this).attr('href')).hide();
                });

                $(this).addClass('selected changecolor');
                $($(this).attr('href')).show();
            }
        });
    });
    var msg = $('#msg-dialog');
    var button = $('.search');
    button.click(function(){
        msg.show();
    });
    msg.find('.close').click(function(){
        msg.hide();
    });
});

