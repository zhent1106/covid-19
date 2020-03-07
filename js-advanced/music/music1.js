
	var btn1 = document.getElementById("btn-play");
		btn1.onclick = function(){
		 	 if(audio.paused){                 
				audio.play();
			}
		}
	var btn2 = document.getElementById("btn-stop");
		btn2.onclick = function(){
		 	 if(audio.played){                 
				audio.pause();
			}
		}
		
	var music = new Array();
	music = ["https://m7.music.126.net/20200306001316/17cb00e244627f024a0ef6c2ef501cf1/ymusic/0759/030f/540b/039ace5c004ebd382de4ca163145cf9b.mp3","血腥爱情故事-苏诗丁"];//歌单
	var num = 0;
	var name = document.getElementById("name");
	var btn3 = document.getElementById("btn-pre");
	btn3.onclick = function(){
			num = (num +2)%3;
		 	audio.src =  "music-total/"+music[num]+".mp3";
			name.innerHTML = music[num];
			audio.play();
		}
		
	<!--下一首-->
	var btn4 = document.getElementById("btn-next");
	btn4.onclick = function(){
		 	num = (num +1)%3;
		 	audio.src =  "music/"+music[num]+".mp3";
			name.innerHTML = music[num];
			audio.play();
		}
        <!--自动播放下一首--> 
        audio.addEventListener('ended', function () {       
                     btn4.onclick(); 
        }, false);
  