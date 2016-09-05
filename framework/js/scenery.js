$(document).ready(function(){
    var links = $('.sidebar-menu .alink');
    change(links);
});
//});


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

//function location(){
//    var map,geolocation;
//    map = new AMap.Map('container',{
//       resizeEnable: true
//    });
//    map.plugin('AMap.Geolocation',function(){
//        geolocation = new AMap.Geolocation({
//            enableHighAccuracy: true,           //�Ƿ�ʹ�ø߾���
//            timeout: 10000,                     //��ʱ
//            buttonOffset: new AMap.Pixel(10,20),        //��ťλ��
//            zoomToAccuracy: false,                  //��λ�ɹ��������Ұ��Χ Ĭ�� false
//            buttonPosition: 'RB'
//        });
//        map.addControl(geolocation);
//        geolocation.getCurrentPosition();
//        AMap.event.addListener(geolocation,'error',function(){$('#tip').text('��λʧ��')})
//    })
//}
//
//function driveWays(start,end){
//    var map = new AMap.Map('mapContainer', {
//        resizeEnable: true
//    });
//    var drivingOption = {
//        policy: AMap.DrivingPolicy.LEAST_TIME
//    };
//    var driving = new AMap.Driving(drivingOption);      //�ݳ�������
//    driving.search([{keyword: start},{keyword: end}],function(status,result){
//        if(status==='complete' && result.info==='OK'){
//            (new Lib.AMap.DrivingRender()).autoRender({
//                data: result,
//                map: map,
//                panel: 'mapPanel'
//            });
//        }else{
//            alert(result);
//        }
//    });
//}