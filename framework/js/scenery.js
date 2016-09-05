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
//            enableHighAccuracy: true,           //是否使用高精度
//            timeout: 10000,                     //超时
//            buttonOffset: new AMap.Pixel(10,20),        //按钮位置
//            zoomToAccuracy: false,                  //定位成功后调整视野范围 默认 false
//            buttonPosition: 'RB'
//        });
//        map.addControl(geolocation);
//        geolocation.getCurrentPosition();
//        AMap.event.addListener(geolocation,'error',function(){$('#tip').text('定位失败')})
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
//    var driving = new AMap.Driving(drivingOption);      //驾车导航类
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