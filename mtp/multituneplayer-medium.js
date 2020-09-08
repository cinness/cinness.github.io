// C̴͓̩̗̻̯̯̕I͔͇̜̦̹̦̝͟N͏̝̱̞͉͍͍N̛͈̟E̶̥̗͕̳͕̟Ś̡͖͘S̸͍͎̫̺̮̗ 



mtp();

function mtp() {
    var soundtrackinfo = document.getElementById("multi-info").innerHTML;
    var automatic = soundtrackinfo.split(" ");
    var jump = automatic.length - 1;

    var soundtracktitles = document.getElementById("multi-names").innerHTML;
    var tracks = soundtracktitles.split(",");

    (function() {
         var limit = 0;
         for ( limit; limit < automatic.length; limit++ ) {
             if ( tracks[limit] === undefined ) {
                 tracks[limit] = " ";
                 }
             else {}
            }
            return;
    })();

    document.getElementById("mtplayer").innerHTML = '<audio id="audio" preload="auto"><source src="' + automatic[2] +'" type="audio/mpeg"></audio><div id="controls1"><div id="play"></div><div id="pause"><div id="pause1"></div><div id="pause2"></div><div id="isolate2"></div></div></div><div id="controls2"><div id="skip"><div id="skip1"></div><div id="skip2"></div><div id="isolate3"></div></div></div><div id="tracktitle"></div><div id="isolate"></div>';
    document.getElementById("mtplayer").style.display = "block";
    document.getElementById("mtplayer").style.width = "25px";
    document.getElementById("mtplayer").style.padding = "0px 15px";

    var audio = document.getElementById("audio");
    audio.style.display = "none";

    document.getElementById("isolate").style.clear = "both";
    document.getElementById("isolate2").style.clear = "both";
    document.getElementById("isolate3").style.clear = "both";

    var controls1 = document.getElementById("controls1");
    controls1.style.display = "block";
    controls1.style.float = "left";

    var controls2 = document.getElementById("controls2");
    controls2.style.display = "block";
    controls2.style.float = "right";

    var tracktitle = document.getElementById("tracktitle");
    tracktitle.style.display = "block";
    tracktitle.style.textAlign = "left";
    tracktitle.style.fontFamily = "arial, sans-serif";
    tracktitle.style.fontSize = "12px";
    tracktitle.style.fontWeight = "600";
    tracktitle.style.lineHeight = "13px";
    tracktitle.style.marginTop = "-1px";
    tracktitle.style.marginLeft = "32px";
    tracktitle.style.width = "500px";
    tracktitle.style.position = "absolute";
    tracktitle.style.overflow = "hidden";
    tracktitle.style.cursor = "default";
    tracktitle.style.color = automatic[0];
    tracktitle.innerHTML = tracks[2];

    var play = document.getElementById("play");
    play.onmouseover = function() { this.style.opacity = "0.5"; };
    play.onmouseout = function() { this.style.opacity = "1"; };
    play.style.display = "block";
    play.style.width = "0px";
    play.style.height = "0px";
    play.style.borderTop = "5px solid transparent";
    play.style.borderLeft = "7px solid " + automatic[0];
    play.style.borderBottom = "5px solid transparent";
    play.style.cursor = "pointer";

    var pause = document.getElementById("pause");
    pause.onmouseover = function() { this.style.opacity = "0.5"; };
    pause.onmouseout = function() { this.style.opacity = "1"; };
    pause.style.display = "none";
    pause.style.cursor = "pointer";

    var pause1 = document.getElementById("pause1");
    var pause2 = document.getElementById("pause2");

    pause1.style.display = "block";
    pause1.style.float = "left";
    pause1.style.marginRight = "2px";
    pause1.style.width = "3px";
    pause1.style.height = "8.5px";
    pause1.style.marginTop = "0.5px";
    pause1.style.background = automatic[0];

    pause2.style.display = "block";
    pause2.style.float = "left";
    pause2.style.width = "3px";
    pause2.style.height = "8.5px";
    pause2.style.marginTop = "0.5px";
    pause2.style.background = automatic[0];

    var skip = document.getElementById("skip");
    skip.onmouseover = function() { this.style.opacity = "0.5"; };
    skip.onmouseout = function() { this.style.opacity = "1"; };
    skip.style.display = "block";
    skip.style.cursor = "pointer";

    var skip1 = document.getElementById("skip1");
    var skip2 = document.getElementById("skip2");

    skip1.style.display = "block";
    skip1.style.float = "left";
    skip1.style.width = "0px";
    skip1.style.height = "0px";
    skip1.style.borderTop = "5px solid transparent";
    skip1.style.borderLeft = "5px solid " + automatic[0];
    skip1.style.borderBottom = "5px solid transparent";

    skip2.style.display = "block";
    skip2.style.float = "left";
    skip2.style.width = "0px";
    skip2.style.height = "0px";
    skip2.style.borderTop = "5px solid transparent";
    skip2.style.borderLeft = "5px solid " + automatic[0];
    skip2.style.borderBottom = "5px solid transparent";

    if ( automatic[1] == "on" ) {
        audio.play();
        play.style.display = "none";
        pause.style.display = "block";
    }
 
    else {}

    play.onclick = function() {
        this.style.display = "none";
        pause.style.display = "block";
        audio.play();
        return;
    };

    pause.onclick = function() {
        this.style.display = "none";
        play.style.display = "block";
        audio.pause();
        return;
    };

    var list = 2;

   function skipend() {
        if ( list == jump ) {
            audio.src = automatic[2];
            tracktitle.innerHTML = tracks[2];
            list = 2;
            audio.play();
            play.style.display = "none";
            pause.style.display = "block";
            return;
            }
        else {
            ++list;
            audio.src = automatic[list];
            tracktitle.innerHTML = tracks[list];
            audio.play();
            play.style.display = "none";
            pause.style.display = "block";
            return;
            }
    }

    skip.onclick = function() {
        skipend();
        };

    audio.onended = function() {
        skipend();
    };

};
