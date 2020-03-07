function playmusic(i){
	var my = document.getElementById("player"); 	
	switch(i)
	{
        //每添加一个歌，则增加一个case，数字和html里设置的匹配
	case 1:
		my.setAttribute("src","https://m7.music.126.net/20200306001316/17cb00e244627f024a0ef6c2ef501cf1/ymusic/0759/030f/540b/039ace5c004ebd382de4ca163145cf9b.mp3");   //2.添加歌曲url
		document.getElementById("mp3name").innerText  = "正在获取歌曲。。。";
		my.addEventListener("canplaythrough",
			function() {
				document.getElementById("mp3name").innerText  = "大眠";  //3.添加歌名
			},false);
                my.play();
		break;
	case 2:
		my.setAttribute("src","https://m7.music.126.net/20200306112233/388ef4ea8a8977ea3985c1fd4614d539/ymusic/0758/550f/545f/028d3b9421be8425d60dc57735cf6ebc.mp3"); 
		document.getElementById("mp3name").innerText  = "正在获取歌曲。。。";
		my.addEventListener("canplaythrough",
			function() {
				document.getElementById("mp3name").innerText  = "起风了-买辣椒也用券";
			},false);
                my.play();
		break;
	case 3:
		my.setAttribute("src","https://dl.stream.qqmusic.qq.com/M8000047djBl2R7UwU.mp3?guid=2104747292&vkey=8449BFA032E3108CA7D2DD207F5C872767A1439F8204422BC1FAAA12E43526B4A568A7D5B72C4F59EB28519A877EFAB5EBF620276D57EEB0&uin=0&fromtag=66"); 
		document.getElementById("mp3name").innerText  = "正在获取歌曲。。。";
		my.addEventListener("canplaythrough",
			function() {
				document.getElementById("mp3name").innerText  = "打开-黄霄云";
			},false);
                my.play();
		break;
	default:
	}
	var Musics=
		[{mp3name="大眠",src="https://m7.music.126.net/20200306001316/17cb00e244627f024a0ef6c2ef501cf1/ymusic/0759/030f/540b/039ace5c004ebd382de4ca163145cf9b.mp3"},
		{mp3name="起风了-买辣椒也用券",src="https://m7.music.126.net/20200306112233/388ef4ea8a8977ea3985c1fd4614d539/ymusic/0758/550f/545f/028d3b9421be8425d60dc57735cf6ebc.mp3"},
		{mp3name="打开-黄霄云",src="https://dl.stream.qqmusic.qq.com/M8000047djBl2R7UwU.mp3?guid=2104747292&vkey=8449BFA032E3108CA7D2DD207F5C872767A1439F8204422BC1FAAA12E43526B4A568A7D5B72C4F59EB28519A877EFAB5EBF620276D57EEB0&uin=0&fromtag=66"}
		]
		 for (let i = 0; i < Musics.length; i++) {
		      const music = Musics[i]
	 btnNext.onclick = function(){//下一首
            var index = getPlay();
            if(index == lis.length-1){//判断是否为最后一首，然后循环播放
                index = -1;
            }
            aud.src = lis[index+1].innerHTML;//切换到下一首
             for(var j = 0 ; j < lis.length ; ++j){
                    lis[j].className = '';
                }
            lis[index+1].className = 'play';
        }
        btnPre.onclick = function(){//上一首
            var index = getPlay();
            if(index == 0){//判断是否为第一首首，然后循环播放
                index = lis.length;
            }
            aud.src = lis[index-1].innerHTML;//切换到上一首
             for(var j = 0 ; j < lis.length ; ++j){
                    lis[j].className = '';
                }
            lis[index-1].className = 'play';
        }