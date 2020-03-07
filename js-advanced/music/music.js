var btnPre = document.getElementById('btnPre');
        var btnNext = document.getElementById('btnNext');
        var mlist = document.getElementById('mlist');
        var aud = document.getElementById('aud');
        var lis = mlist.getElementsByTagName('li');
        for(var i = 0 ; i < lis.length ; ++i){
            lis[i].ondblclick = function(e){//双击播放该音乐
                e.preventDefault();
                aud.src = this.innerHTML;
                for(var j = 0 ; j < lis.length ; ++j){
                    lis[j].className = '';
                }
                this.className = 'play';
            }
        }
        aud.onended = function(){//当音乐播放完自动播放下一首
            var index = getPlay();
            // alert(index);
            if(index == lis.length-1){//判断是否为最后一首，然后循环播放
                index = -1;
            }
            aud.src = lis[index+1].innerHTML;//切换到下一首
             for(var j = 0 ; j < lis.length ; ++j){
                    lis[j].className = '';
                }
            lis[index+1].className = 'play';
        }
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
        function getPlay(){//获取当前正在播放的音乐的索引值
            for(var i = 0 ; i < lis.length ; ++i){
                if (lis[i].getAttribute('class') == 'play') {
                    return i;
                }
            }
        }