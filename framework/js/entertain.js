$(document).ready(function(){
    var links = $('.sidebar-menu a');
    var cats = $('.tags a');
    var search = $('.act-search button');
    var result = $('.result');
    var close = $('.result button');
    change(links);
    change(cats);
    search.click(function(){
        result.show();
    });
    close.click(function(){
        result.hide();
    });
});

function change(a) {
    a.each(function () {
        $($(this).attr('href')).hide();
        if ($(this).hasClass('selected changecolor')) {
            $($(this).attr('href')).show();
        }
        $(this).click(function (e) {
            e.preventDefault();
            if (!$(this).hasClass('selected changecolor')) {
                a.each(function () {
                    $(this).removeClass('selected changecolor');
                    $($(this).attr('href')).hide();
                });

                $(this).addClass('selected changecolor');
                $($(this).attr('href')).show();
            }
        });
    });
}