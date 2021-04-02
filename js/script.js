// ハンバーガーメニュー


$(function(){
  var imgHeight = $('.p-hero__wrapper').outerHeight();  //キービジュアルの画像の高さを取得
  var bgHeight = $('.p-hero').outerHeight(); //ファーストビューの高さを取得
  

  $(".p-burger-btn").on('click',function(){
    if( $(window).scrollTop() < imgHeight -50){
      //ハンバーガーボタンがfvより上にあるとき
      $('.p-bar').toggleClass('cross'); //ハンバーガーボタンのラインをクロスさせるCSSを当てたり外したりする
      $('.p-nav').toggleClass('open'); //ナビゲーションが開くCSSを当てたり外したりする
      $('.burger-musk').fadeToggle(300); //背景を暗くするマスクをフェードイン・フェードアウトさせる
      $('body').toggleClass('noscroll'); //ハンバーガーメニューを開いたときにスクロールしないようにする
    }else{
      //ハンバーガーボタンがfvより下にあるとき
      $(this).toggleClass('black'); //ハンバーガーボタンを黒くしたり白くしたりする
      $('.p-bar').toggleClass('cross');
      $('.p-nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }
  });


// スクロールしたら、サイトロゴとハンバーガーボタンの色が変わる
  $(window).on('load scroll', function(){
     if ($(window).scrollTop() < imgHeight -50) {
       //メインビジュアル内にいるので、クラスを外す。
       $('.c-site-title').removeClass('black');
     }else {
       //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
       $('.c-site-title').addClass('black');
     }

     if ($(window).scrollTop() < bgHeight -50) {
       //メインビジュアル内にいるので、クラスを外す。
       $('.p-burger-btn').removeClass('black');
     }else {
       //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
       $('.p-burger-btn').addClass('black');
     }
  });
});