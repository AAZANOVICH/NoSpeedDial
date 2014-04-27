/**********************************************************************
 *  Copyright (C) 2014 by a.azanovich@gmail.com
 *  All rights reserved.
 *
 **********************************************************************/

$( document ).ready(function () {

    function openLocalResource(resName) {
        window.location= "http://nenkfddcinieejhaipddbmdpkhajbpff/chrome/" + resName;
    }

    $('#downloads').click(function () {
        openLocalResource("downloads");
    });

    $('#bookmarks').click(function () {
        openLocalResource("bookmarks");
    });

    $('#history').click(function () {
        openLocalResource("history");
    });

    $('#extensions').click(function () {
        openLocalResource("extensions");
    });

    $('#settings').click(function () {
        openLocalResource("settings");
    });

});




