/**
 * Created by Jerry on 16/1/31.
 */
    var scanResult;
    function scanSongID(nameSong){
        var xmlhttp = new XMLHttpRequest();
        nameSong = "400875269"
        xmlhttp.open("GET","http://music.163.com/api/song/detail/?id=["+nameSong+"]&ids=%5B["+nameSong+"]%5D",true);
        xmlhttp.setRequestHeader("Cookie","appver=2.0.2");
        xmlhttp.setRequestHeader("Referer","http://music.163.com");
        xmlhttp.send();
        scanResult = eval("("+xmlhttp.responseText+")");
        console.log(xmlhttp.responseText);
    }

