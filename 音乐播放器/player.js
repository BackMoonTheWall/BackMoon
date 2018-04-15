var totalTime ;
var tp=0;
var showLyric = document.querySelector(".showLyric");

var playSong = document.querySelector(".playSong");
var nextSong = document.querySelector(".nextSong");
var myAudio = document.querySelector(".myAudio");
var songname = document.querySelector(".songname");
var songnamediv = document.querySelector(".songnamediv");
var songArtist = document.querySelector(".songArtist");
var Time = document.querySelector(".Time");
var currentTime = document.querySelector(".currentTime");
var dot = document.querySelector("#progressDot");
var played = document.querySelector(".progressPlayed");
var progressBar = document.querySelector(".progressBar");

var artistImg = document.querySelector(".artistImg");
var volume = document.querySelector(".volume");
var volumeControl = document.querySelector(".volumeControl");
var volumeProgress = document.querySelector(".volumeProgress");
var content = document.querySelector(".content");
getsong();
 showLyric.onclick = function () {
        content.style.transition = "opacity 1s";
        if(artistImg.style.opacity == "0.5"){
            content.style.opacity=0;
            artistImg.className = "artistImg_1";
            artistImg.style.transform="rotateY(0deg)";
            artistImg.style.opacity = "1";
            setTimeout(function(){artistImg.className = "artistImg";},1000);
        }
        else{
            content.style.opacity=1;
            artistImg.className = "artistImg_1";
            artistImg.style.opacity = "0.5";
            artistImg.style.transform="rotateY(180deg)";
        }


    };
    playSong.onclick = function () {
        if(myAudio.paused){
            window.temp=window.setInterval(getCurrentTime,1000);
            window.temp_1=window.setInterval('setProgress(totalTime)',1000);
            play();


        }
        else{
            window.clearInterval(window.temp);
            window.clearInterval(window.temp_1);
            pause();

        }

    };
    nextSong.onclick = function () {

        artistImg.className = "artistImg";

        $(".songname").fadeOut("fast");
        $(".songArtist").fadeOut("fast");
        $(".artistImg").fadeOut("fast");
        $(".currentTime").fadeOut("fast");
        getsong();

    };
function play() {
    myAudio.play();
    playSong.className = "pauseSong";


}
function pause() {
   myAudio.pause();
   playSong.className = "playSong";

}
myAudio.onended = function () {
    getsong();

};
progressBar.onclick = function () {

    myAudio.currentTime = event.offsetX / 450 * totalTime;
    setProgress(totalTime);
    if(myAudio.paused) {
        window.temp = window.setInterval(getCurrentTime, 1000);
        window.temp_1 = window.setInterval('setProgress(totalTime)', 1000);
        play();
    }

};
volume.onclick = function () {

    if(tp==0){
        document.querySelector(".volumeControl").style.width = '50px';
        tp=1;
    }
    else{
        document.querySelector(".volumeControl").style.width = '0px';
        tp=0;
    }
};
volumeControl.onclick = function () {

     myAudio.volume=event.offsetX/parseInt(volumeControl.style.width);

    volumeProgress.style.width =100*myAudio.volume+"%";
};



function translatetime(Time) {
    var m = parseInt(Time/60);
    var s= parseInt(Time%60);
    m = m < 10 ? "0"+m : m;
    s = s < 10 ? "0"+s : s;
    return m+":"+s;
}
function getCurrentTime() {
    currentTime.innerHTML = translatetime(myAudio.currentTime)+"/"+translatetime(totalTime);


}

function setProgress(num) {
    var pre = Math.floor(myAudio.currentTime) / num * 100 + "%";

    played.style.width = pre;

    dot.style.left = pre;
    



}

function getsong() {
    playSong.className="pauseSong";
        content.innerHTML = "";

    window.clearInterval(window.temp);
    window.clearInterval(window.temp_1);
    $.ajax({
        url: 'https://api.douban.com/v2/fm/playlist',
        Method: 'get',


        dataType: 'jsonp',
        jsonpCallback: "cb",

        data: {

        channel:'2',
            from: 'mainsite',
            pt: '0.0',
            kbps: '192',
            formats: 'aac',
            alt:'jsonp',
            app_name: 'radio_iphone',
            apikey: '02646d3fb69a52ff072d47bf23cef8fd',
            client: 's:mobile|y:iOS 10.2|f:115|d:b88146214e19b8a8244c9bc0e2789da68955234d|e:iPhone7,1|m:appstore',
            client_id: '02646d3fb69a52ff072d47bf23cef8fd',
            icon_cate: 'xlarge',
            udid: 'b88146214e19b8a8244c9bc0e2789da68955234d',
            douban_udid: 'b635779c65b816b13b330b68921c0f8edc049590',
            version: '115',
            type: 'n'
        },
        success: function(response) {
            var song = response.song;
            var urll= song[0].url;
            var title = song[0].title;
            var artist = song[0].singers[0].name;
            var imgUrl = song[0].singers[0].avatar;
            var songTime =song[0].length;
             songsid = song[0].sid;
             songssid = song[0].ssid;
            totalTime = songTime;
            document.querySelector(".myAudio").setAttribute('src',urll);
            songname.innerHTML = title;

            songArtist.innerHTML = artist;


            artistImg.style.backgroundImage = `url(${imgUrl})`;
            myAudio.play();
            getCurrentTime();
            setProgress(totalTime);
            window.temp=window.setInterval(getCurrentTime,1000);
            window.temp_1=window.setInterval('setProgress(totalTime)',1000);
            $(".songname").fadeIn("slow");
            $(".songArtist").fadeIn("slow");
            $(".artistImg").fadeIn("slow");
            $(".currentTime").fadeIn("slow");
            getlyric();
        }


    });

}

function getlyric() {
    $.ajax({
        url:'https://api.douban.com/v2/fm/lyric',
        Method : 'get',
        dataType: 'jsonp',
        data: {
            sid: songsid,                        //songsid ,
            ssid : songssid
        },
        success:function (back) {
            var olyricArray = back.lyric;
            var lyricArray= olyricArray.split("\r\n");

            for(var mm=0;mm<lyricArray.length;mm++){
                lyricArray[mm]=lyricArray[mm].replace("[","<");
                lyricArray[mm]=lyricArray[mm].replace("]",">");
                lyricArray[mm]=lyricArray[mm].replace(/<[^>]+>/g,"");
                console.log(lyricArray[mm]);

            }
                    if(artistImg.className == "artistImg"){
                        content.style.transition = "none";
                        content.style.opacity=0;

                    }
                    for (var l = 0; l < lyricArray.length; l++) {
                        let a = document.createElement("p");
                        a.innerHTML = lyricArray[l];
                        content.appendChild(a);

                    }





        }



    })
}


