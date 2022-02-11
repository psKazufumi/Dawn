'use strict';

{

    const whatisdawn = document.getElementById('whatisdawn');
    const what = document.getElementById('what');

    //SVGアニメーションの描画
    var stroke;
    stroke = new Vivus('mask', {//アニメーションをするIDの指定
        start:'manual',//自動再生をせずスタートをマニュアルに
        type: 'scenario-sync',// アニメーションのタイプを設定
        duration: 50,//アニメーションの時間設定。数字が小さくなるほど速い
        forceRender: false,//パスが更新された場合に再レンダリングさせない
        animTimingFunction:Vivus.EASE,//動きの加速減速設定
    }
    );

    // 要素をスクロールでふわっと表示させる

    $(window).on('load',function(){
        $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェイドアウト
    $("#splash_logo").delay(1500).fadeOut('slow');//ロゴを1.5秒（1500ms）待機してからフェイドアウト
            stroke.play();//SVGアニメーションの実行
    });

    $(function(){
        　$(window).scroll(function (){
            $('.effect-fade').each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight){
                    $(this).addClass('effect-scroll');
                }
            });
        　});
        });
}