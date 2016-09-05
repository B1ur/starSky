$().ready(function () {
    var validator = $('#login').validate({
        submitHandler: function(){$(this).ajaxSubmit();},
        errorPlacement: function(error,element){
            error.appendTo(element.next('.warnMsg'));
        },
        rules: {
            managername: {
                required: true,
                minlength: 2
            },
            password:{
                required: true,
                minlength: 6
            }
        },
        message: {
            managername: {
                required: '请输入管理员名',
                minlength: '管理员名不能少于2个字符'
            },
            password: {
                required: '请输入密码',
                minlength: '密码不能少于6个字符'
            }
        }

    });

    var close = $('#manager-login').find('.close');
    close.click(function () {
        if (confirm('Are you sure to close it?')) {
            window.close();
            validator.resetForm();
        }
    });

    var login_btn = $('#select-btn').find('.login-btn');
    var reg_btn = $('#select-btn').find('.register-btn');
    reg_btn.click(function () {
        $(this).addClass('select-bg');
        $('#manager-login').css('height','430px');
        login_btn.removeClass('select-bg');
        $('#login').hide();
        $('#register').show();
    });
    login_btn.click(function () {
        $(this).addClass('select-bg');
        $('#manager-login').css('height','350px');
        reg_btn.removeClass('select-bg');
        $('#register').hide();
        $('#login').show();
    });
});
