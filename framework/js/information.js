$(document).ready(function(){
   var links = $('.sidebar-menu li a');
    links.each(function(){
        $($(this).attr('href')).hide();
        if($(this).hasClass('selected')){
            $($(this).attr('href')).show();
        }
        $(this).click(function(e){
            e.preventDefault();
            if(!$(this).hasClass('selected')){
                links.each(function(){
                    $(this).removeClass('selected');
                    $($(this).attr('href')).hide();
                });

                $(this).addClass('selected');
                $($(this).attr('href')).show();
            }
        });
    });
    $('.title').each(function(){
        var maxwidth = 60;
        if($(this).text().length>maxwidth){
            $(this).text($(this).text().substring(0,maxwidth));
            $(this).html($(this).html()+'...');
        }
    });
});

