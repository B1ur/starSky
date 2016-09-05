$(document).ready(function() {
    var login = $('#login');
    var complaint = $('#compdialog');
    var register = $("#regdialog");
    var userlogin = $('#userlogin');
    var userregister = $('#register');
    $('.carousel').carousel({
       interval: 4000
    });
    userlogin.click(function () {
        $('#login').show();
    });
    login.on('click', '.close', function () {
        $(this).parent().hide();
    });
    login.on('click', '.concel', function () {
        login.hide();
    });
    $('#startcomp').click(function () {
        $('#compdialog').show();
    });
    complaint.on('click', '.close', function () {
        $(this).parent().hide();
    });
    userregister.click(function(){
        register.show();
    });
    register.on('click','.close',function(){
        $(this).parent().hide();
    });
    register.on('click','#regmanager',function(){
        $('#regdialog').css('height','300px');
        $('#verifydialog').removeClass('hidden');
    });
    register.on('click','#reguser',function(){
        $('#regdialog').css('height','250px');
        $('#verifydialog').addClass('hidden');
    });
    login.on('click','#logining',function(e){
            if(e) {
                var username = $('#form-user').val();
                $('#userlogin').css('display', 'none');
                $('#register').css('display', 'none');
                $('#userinfo').show();
                $('.twobtn').addClass('dropdown').append('<button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" id="userinfo"><span class="glyphicon glyphicon-user"></span>&nbsp; ' + username + '</button>' +
                    '<ul class="dropdown-menu"><li><a href="" target="_blank">������Ϣ</a></li><li><a href="" target="_blank">�˳�</a></li></ul>');
            }});

    //login.on('blur','#form-user',function(){
    //    validateUsername();
    //});
    //login.on('blur','#form-password',function(){
    //   validatePassword();
    ////});
    var weatherframe = $('#weatherframe');
    var weathericon = $('#weather').find('button span');
    $('#weather').click(function(e){
        e = e||window.event;
        e.stopPropagation();
        if(weatherframe.css('visibility')=='hidden'){
            weatherframe.css('visibility','visible');
            weathericon.removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
        }else{
            weatherframe.css('visibility','hidden');
            weathericon.removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
        }
    });
        $(document).click(function(e){
            weatherframe.css('visibility','hidden');
        })
});

//function validateUsername(){
//    return wrongInfo('form-user','�û���');
//}
//function validatePassword(){
//    return wrongInfo('form-password','����');
//}
//
//function wrongInfo(eleId,name){
//    if($('#'+eleId).val() == ''){
//        $(this).addClass('has-error');
//        $(this).parent().append('<p class="text-danger">'+ name + '����Ϊ��</p>');
//        return false;
//    }else{
//        $(this).addClass('has-success');
//        $(this).parent().append('<p class="text-success">'+ name + '����Ϸ�</p>');
//        return true;
//    }
//}

//function weather(){
//    var span = $('#location').find('.dropdown button span');
//    var city = span.text();
//    var icon = $('#weather').find('button span');
//    var city2 = $('#mobile6').find('.mleft a');
//    icon.removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
//    city2.text(city);
//}