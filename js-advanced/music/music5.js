// JavaScript Document
var music=document.getElementById("mymusic");
 var prograss=document.getElementById("prograss");
 var curtxt=document.getElementById("currenttime");
 var duration=document.getElementById("duration");
 var music_pic=document.getElementById("music_pic");
 var deg=0;//旋转角度
 var disctimer,prograsstimer;//碟片计时器,进度条计时器
 var musicindex=0;//音乐索引
 var musics=new Array("https://m7.music.126.net/20200306001316/17cb00e244627f024a0ef6c2ef501cf1/ymusic/0759/030f/540b/039ace5c004ebd382de4ca163145cf9b.mp3",
 "https://m7.music.126.net/20200306112233/388ef4ea8a8977ea3985c1fd4614d539/ymusic/0758/550f/545f/028d3b9421be8425d60dc57735cf6ebc.mp3",
 "https://dl.stream.qqmusic.qq.com/M8000047djBl2R7UwU.mp3?guid=2104747292&vkey=8449BFA032E3108CA7D2DD207F5C872767A1439F8204422BC1FAAA12E43526B4A568A7D5B72C4F59EB28519A877EFAB5EBF620276D57EEB0&uin=0&fromtag=66");//音乐数组
 var music_pics=new Array("https://pic1.kz06.cn/?rename=%E4%B8%93%E8%BE%91%E5%9B%BE%E7%89%87.jpg&furl=https%3A%2F%2Fy.gtimg.cn%2Fmusic%2Fphoto_new%2FT002R300x300M000002O8LJu4dw26X.jpg%3Fmax_age%3D2592000","000001","000001");
  
  
 //旋转碟片
 var disc=document.getElementsByClassName('disc');
  
 //音乐时间显示
 function curtime(txt,misic)
 {
  if(music.currentTime<10)
  {
   txt.innerHTML="0:0"+Math.floor(music.currentTime);
  }else
  if(music.currentTime<60)
  {
   txt.innerHTML="0:"+Math.floor(music.currentTime);
  }
  else
  {
   var minet=parseInt(music.currentTime/60);
   var sec=music.currentTime-minet*60;
   if(sec<10)
   {
    txt.innerHTML="0"+minet+":"+"0"+parseInt(sec);
   }
   else
   {
    txt.innerHTML="0"+minet+":"+parseInt(sec);
   }
  }
 }
  
 //播放暂停
 function playPause()
 {
  var btn=document.getElementById("playbtn");
  if(music.paused)
  {
   music.play();
   clearInterval(disctimer);//清除碟片的定时器
   btn.style.background="url(images/music/pictures/pause.png) no-repeat 10px";//改变播放暂停键的图标
   disctimer=setInterval(function(){
   disc[0].style.transform="rotate("+deg+"deg)";
   deg+=5;
    
   //每秒设置进度条长度
   },100);
   prograsstimer=setInterval(function(){
   prograss.style.width=(music.currentTime)*100 / (music.duration)+"%";
   curtime(curtxt,music);
   if(music.currentTime>=music.duration-1)//片尾跳转下一曲
   {
   musicindex++;//音乐索引加一
   if(musicindex>=musics.length)//如果音乐索引超过长度，将音乐索引清零
   {
    musicindex=0;
   }
   getMusic();
   music.play();//重载音乐后进行播放
   }
   },1000);
  }
  else
  {
   music.pause();//停止音乐
   btn.style.background="url(images/music/pictures/play.png) no-repeat 10px";
   clearInterval(disctimer);//清除碟片滚动的定时器
   clearInterval(prograsstimer);//清除进度条的定时器
  }
 }
  
 //下一曲
 function nextMusic()
 {
 musicindex++;//音乐索引加一
 if(musicindex>=musics.length)//如果音乐索引超过长度，将音乐索引清零
  {
  musicindex=0;
  }
 getMusic();
 music.play();
 }
  
 //上一曲
 function backMusic()
 {
 musicindex--;
 if(musicindex<0)//如果索引小于0，将索引变为最大值
  {
  musicindex=musics.length-1;
  }
 getMusic();
 music.play();
 }
  
 //读取音乐
 function getMusic()
 {
  music.src="images/music/"+musics[musicindex];//改变音乐的SRC
  music_pic.src="images/music/pictures/"+music_pics[musicindex]+".jpg";
  if(music.readyState="complete")
  {
   setTimeout(function(){
   duration.innerHTML=parseInt(music.duration/60)+":"+parseInt(music.duration%60);
   },1000);//一秒后读取音乐的总时长
    
  }
 }
  
  
 window.onload=function(){
  getMusic();
   
 }