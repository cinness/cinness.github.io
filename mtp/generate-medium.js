// C̴͓̩̗̻̯̯̕I͔͇̜̦̹̦̝͟N͏̝̱̞͉͍͍N̛͈̟E̶̥̗͕̳͕̟Ś̡͖͘S̸͍͎̫̺̮̗ 



var color;
function changecolor() {
    color = document.getElementById("playercolor").value;
    document.getElementById("tracktitle").style.color = "#" + color;
    document.getElementById("pause1").style.background = "#" + color;
    document.getElementById("pause2").style.background = "#" + color;
    document.getElementById("play").style.borderLeft = "7px solid " + "#" + color;
    document.getElementById("skip1").style.borderLeft = "5px solid " + "#" + color;
    document.getElementById("skip2").style.borderLeft = "5px solid " + "#" + color;
}

var autos = "off";
function auto() {
    if ( autos == "off" ) {
        autos = "on";
        document.getElementById("autobox").style.background = "#0CDB58";
        document.getElementById("autobox").value = "autoplay is on";
    }
    else if ( autos == "on" ) {
        autos = "off";
        document.getElementById("autobox").style.background = "#FF0054";
        document.getElementById("autobox").value = "autoplay is off";
    }
    else {}
}

function generate() {
    document.getElementById("index-color-select").style.display = "none";
    document.getElementById("code1").style.display = "block";
    document.getElementById("code2").style.display = "block";
    document.getElementById("desc").style.textAlign = "left";
    document.getElementById("desc").innerHTML = "The preview for your custom music player isn't viewable here, but it will appear correctly once installed.<br><br><b>First code:</b> Paste just before <code>/body</code><br><br><b>Second code:</b> This is where you can add any amount of audio. Positioning and audio help is provided in the code comments. First paste after <code>body</code><br><br><span>💬 For additional support, reach me <a href = 'https://cinness.tumblr.com/message'  target= '_blank'>here</a>.</span>"
            
    var design = "#" + color + " " + autos + " ";
    var display = "0,0,";

    var limit, url, url2, title, title2;

    for (limit=1; limit < 7; limit++) {
        url = "trackurl" + limit;
        title = "trackname" + limit;
        url2 = document.getElementById(url);
        title2 = document.getElementById(title);
        if ( url2.value != "" ) {
            url2.value += " ";
            design += url2.value;
        }
        if ( title2.value != "" ) {
            title2.value += ",";
            display += title2.value;
        }
    }

    (function() {
        var designlength = design.length - 1;
        var designcompressed = design.slice(0,designlength);
        var displaylength = display.length - 1;
        var displaycompressed = display.slice(0,displaylength);

        document.getElementById("code1").innerHTML = "&lt;script src&equals;&quot;https://cinness.github.io/mtp/multituneplayer-medium.js&quot;&gt;&lt;&sol;script&gt;";
        document.getElementById("code2").innerHTML = "<!--------------------------------------------------------------------------------  Positioning → The player is automatically positioned to be at the bottom left of your site. If you specifically want it somewhere, paste it there and replace BOTTOM with MARGIN-TOP and replace LEFT with MARGIN-LEFT. Adjust the margin numbers to your liking. Depending on your site's coding, you may have to remove POSITION:FIXED. Unlimited Audio → Simply separate the track URLs with a single space, and if you chose to display titles, seperate with a single comma. --------------------------------------------------------------------------------> &lt;div id&equals;&quot;mtplayer&quot; style=&quot;bottom: 16px; left: 5px; position: fixed;&quot;&gt;&lt;span id&equals;&quot;multi-info&quot; style&equals;&quot;display: none;&quot;&gt;" + designcompressed + "&lt;&sol;span&gt;&lt;span id&equals;&quot;multi-names&quot; style&equals;&quot;display: none;&quot;&gt;" + displaycompressed + "&lt;&sol;span&gt;&lt;&sol;div&gt;";
    })();
}
