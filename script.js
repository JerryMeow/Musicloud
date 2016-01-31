/**
 * Created by Jerry on 16/1/31.
 */
    var scanResult;
    function scanSong(nameSong){
        var xmlhttp = new XMLHttpRequest();
        nameSong = "好久不见"
        xmlhttp.open("POST","http://s.music.163.com/search/get",true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send("type=1&s="+ nameSong +"&limit=1&offset=0&callback=");
        scanResult = eval("("+xmlhttp.responseText+")");
        console.log("DO ONCE!");
    }

