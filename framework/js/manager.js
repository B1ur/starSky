$(document).ready(function() {
    var validator1 = $('#login').validate({
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
            validator1.resetForm();
        }
    });
        var links = $('.sidebar-menu a');
        links.each(function () {
            $($(this).attr('href')).hide();
            if ($(this).hasClass('selected changecolor')) {
                $($(this).attr('href')).show();
            }
            $(this).click(function (e) {
                e.preventDefault();
                if (!$(this).hasClass('selected changecolor')) {
                    links.each(function () {
                        $(this).removeClass('selected changecolor');
                        $($(this).attr('href')).hide();
                    });

                    $(this).addClass('selected changecolor');
                    $($(this).attr('href')).show();
                }
            });
        });
    var trs = $('tr');
    trs.each(function(){
           $(this).click(function(){
               $(this).siblings().removeClass('tr-act');
               $(this).toggleClass('tr-act');
               var tds0 = $(this).find('td:eq(0)').text();
               var tds1 = $(this).find('td:eq(1)').text();
               var tds2 = $(this).find('td:eq(2)').text();
               var tds3 = $(this).find('td:eq(3)').text();
               var input0 = $(this).parents('.pane').find('.result .input0');
               var input1 = $(this).parents('.pane').find('.result .input1');
               var input2 = $(this).parents('.pane').find('.result .input2');
               var input3 = $(this).parents('.pane').find('.result .input3');
               input0.val(tds0);
               input1.val(tds1);
               input2.val(tds2);
               input3.val(tds3);
               //alert(tds0+tds1+tds2+tds3);
           });
        });
    var add = $('.add');
    add.each(function(){
        $(this).click(function() {
            var inputNum = $(this).parents('.result').find('.form-group-sm');
            var i = inputNum.length;
            var input = [];
            var table = $(this).parents('pane').find('table');
            for (var j = 0; j < i; j++) {
                input[j] = $(this).parents('.result').find('.input' + j).val();
            }
            //var input0 = $(this).parents('.result').find('.input0').val();
            //var input1 = $(this).parents('.result').find('.input1').val();
            //var input2 = $(this).parents('.result').find('.input2').val();
            //var input3 = $(this).parents('.result').find('.input3').val();
            if($.inArray('',input)>-1){
                alert('Check your form,please!');
                return false;
            }else{
                //var newTr = '';
                //for(var x=0;x<input.length;x++){
                //    newTr+='<td>'+input[x]+'</td>';
                //}
                //table.append('<tr>'+newTr+'</tr>');
            }
        });
    });
    });

