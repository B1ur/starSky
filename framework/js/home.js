$(document).ready(function(){
    var menubtn = $('#menu-img');
    var twomenu = $('#two-menu');
    // var imgshow = $('#dia-one');
    menubtn.click(function(e){
        e = e||window.event;
        e.stopPropagation();
        twomenu.find('.menu-container').show(500);
    });
    $(document).click(function(){
        twomenu.find('.menu-container').hide(500);
    });
   //var img = imgshow.find('img');
   // img.each(function(){
   //     if($(this).hasClass('current')){
   //         $(this).show();
   //         setInterval(function(){
   //             $(this).hide().removeClass('current').next().show();
   //         },2000);
   //     }
   // });
    var validator1 = $('#login').validate({
        submitHandler: function(){$(this).ajaxSubmit();},
        errorPlacement: function(error,element){
            error.appendTo(element.next('.warnMsg'));
        },
        rules: {
            username: {
                required: true,
                minlength: 2
            },
            password:{
                required: true,
                minlength: 6,
                maxlength: 15
            }
        },
        message: {
            username: {
                required: '用户名不能为空',
                minlength: '用户名不能少于2个字符'
            },
            password: {
                required: '密码不能为空',
                minlength: '密码不能少于6个字符',
                maxlength: '密码不能超过15个字符'
            }
        }

    });
    var validator2 = $('#register').validate({
        submitHandler: function(){$(this).ajaxSubmit();},
        errorPlacement: function(error,element){
            error.appendTo(element.next('.warnMsg'));
        },
        rules: {
            regname: {
                required: true,
                minlength: 2
            },
            regpassword:{
                required: true,
                minlength: 6,
                maxlength: 15
            }
        },
        message: {
            regname: {
                required: '请输入用户名',
                minlength: '用户名不能少于2个字符'
            },
            regpassword: {
                required: '请输入密码',
                minlength: '密码不能少于6个字符',
                maxlength: '密码不能超过于15个字符'
            }
        }

    });
    var close = $('#page-login').find('img');
    var login = $('#login-btn');
    login.click(function(){
        $('#page-login').slideDown(500);
    });
    close.click(function(){
        $('#page-login').fadeOut(800);
        validator1.resetForm();
    });
    var close2 = $('#page-register').find('img');
    var register = $('#register-btn');
    register.click(function(){
        $('#page-register').slideDown(500);
    });
    close2.click(function(){
        $('#page-register').fadeOut(800);
        validator2.resetForm();
    });
    var weather = $('#page-weather');
    var weatherBtn = $('#weather-btn');
    var a=true;
    weatherBtn.click(function () {
        // weatherBtn.find('img').toggleClass('.btn-slide');
        if(a){
            weather.animate({left:'0'},800);
            weatherBtn.find('img').css('transform','rotate(180deg)');
        }else{
            weather.animate({left:'-290px'},400);
            weatherBtn.find('img').css('transform','rotate(360deg)');
        }
        a=!a;
    });
    // var keyword = $('#two-search').find('input');
    // keyword.focus(function () {
    //     if(keyword.val()!=''){
    //         keyword.next('.close').show();
    //     }else{
    //         keyword.next('.close').hide();
    //     }
    // });
    var searchbtn = $('#search-btn');
    var search = $('#two-search');
    var b = true;
    searchbtn.click(function (e) {
        e.stopPropagation();
        search.animate({width:'300px'},250);
        search.find('input').show().animate({width:'240px'},250).focus();
        search.find('.close').show();
    // e=e||window.event;
});
    search.find('input').click(function (e) {
        return false;
    });
    $(document).click(function (e) {
        if(e.target!=search) {
            search.animate({width: '30px'}, 250);
            search.find('input').hide();
        }
    });
    search.find('.close').click(function () {
        search.find('input').val('');});
});