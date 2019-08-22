$(document).ready(function () {

    const app = require('electron').remote.app;
    const { remote } = require('electron');

    $('.btnCancel').click(function () {
        remote.BrowserWindow.getFocusedWindow().close();
    });

    $('.btnPlus').click(function () {

        var ss = $('.menu_balloon_popover').removeAttr("opened")

        if (remote.BrowserWindow.getFocusedWindow().isMaximized()) {
            remote.BrowserWindow.getFocusedWindow().restore();

        } else {
            remote.BrowserWindow.getFocusedWindow().maximize();
        }

        // alert($('.btn_menu').attr('expanded'));
        // console.log($('.btn_menu').attr('expanded'));
        // var ss = $('.btn_menu').removeAttr("expanded")
        //$('.menu_balloon_popover').css({ opacity: 0.5 });
        //var teste = "{ display: 'none' }"
        //  if(
        //    $('.menu_balloon_popover').css(teste)
        //     != $('.menu_balloon_popover').css({ display: "none" })){
        //     $('.menu_balloon_popover').css({ display: "none" })
        //  } else {
        //      $('.menu_balloon_popover').css({ display: "block" })
        // }
        // var cor = $('.menu_balloon_popover').css("background-color");
        // alert(cor);
    });
    
    $('.menu_balloon_popover x-menuitem').click(function () {
         var ss = $('.menu_balloon_popover').removeAttr("opened");
    });
    
    $('.menu_balloon_popover_sub x-menuitem').click(function () {
         var s = $('.menu_balloon_popover_sub').removeAttr("opened");
        var s1= $('.btn_menu_sub').removeAttr("expanded");
        
    });
        

    $(".menu_balloon_popover").blur(function () {
        //   $('.menu_balloon_popover').css({ display: "none" });
    });


    $('.btnMinus').click(function () {
        remote.BrowserWindow.getFocusedWindow().minimize();
    });

});
