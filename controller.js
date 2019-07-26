$(document).ready(function () {

    const app = require('electron').remote.app;
    const { remote } = require('electron');

    $('.btnCancel').click(function () {
        remote.BrowserWindow.getFocusedWindow().close();
    });

    $('.btnPlus').click(function () {

        if (remote.BrowserWindow.getFocusedWindow().isMaximized()) {
            remote.BrowserWindow.getFocusedWindow().restore();

        } else {
            remote.BrowserWindow.getFocusedWindow().maximize();
        }

        $('.menu_balloon_popover').css({ display: "none" });
        // var cor = $('.menu_balloon_popover').css("background-color");
        // alert(cor);

    });

    $('.btnMinus').click(function () {
        remote.BrowserWindow.getFocusedWindow().minimize();

    });



});
