$(function(){
  var bofangzt=$('.bofang-zhangting');
  var audio=$('audio').get(0);
  var bfsc=$('.bfsc');
  var zsc=$('.zsc');
  var playinfo=[
    {name:'李照',musicname:'人海',src:'mp3/李照-人海.mp3',bjsrc:'img/renhai.jpg',yuantusrc:'img/lizhao.jpg',toalltime:'04:19'},
    {name:'薛之谦',musicname:'演员',src:'mp3/演员.mp3',bjsrc:'img/yanyuan.jpg',yuantusrc:'img/xuezhiqian.jpg',toalltime:'04:21'},
    {name:'程琳',musicname:'酒干倘卖无',src:'mp3/程琳-酒干倘卖无.mp3',bjsrc:'img/jiugan.jpg',yuantusrc:'img/clin.jpg',toalltime:'04:27'},
    {name:'金南玲',musicname:'逆流成河',src:'mp3/金南玲-逆流成河.mp3',bjsrc:'img/niliu.jpg',yuantusrc:'img/jinnanling.jpg',toalltime:'02:05'},
    {name:'庄心妍',musicname:'以后的以后',src:'mp3/庄心妍-以后的以后.mp3',bjsrc:'img/yihou.jpg',yuantusrc:'img/zhuangxinyan.jpg',toalltime:'05:00'},
    {name:'李宇春',musicname:'蜀绣',src:'mp3/李宇春-蜀绣.mp3',bjsrc:'img/shuxiu.jpg',yuantusrc:'img/liyuchun.jpg',toalltime:'04:43'},
    {name:'梁咏琪',musicname:'阴天',src:'mp3/梁咏琪-阴天(Live).mp3',bjsrc:'img/yintian.jpg',yuantusrc:'img/liangyongqi.jpg',toalltime:'03:54'},
    {name:'金莎',musicname:'最后一个夏天',src:'mp3/金莎-最后一个夏天.mp3',bjsrc:'img/xiatian.jpeg',yuantusrc:'img/jinsha.jpg',toalltime:'03:55'},
    {name:'邓紫棋',musicname:'画(Live Piano Session II)',src:'mp3/G.E.M.邓紫棋-画(Live Piano Session II).mp3',bjsrc:'img/hua.jpg',yuantusrc:'img/dengziqi.jpg',toalltime:'02:48'}
  ];
  var lyric=[
    {musicname:'人海',
    name:'李照',
    src:'mp3/李照-人海.mp3',
    geci:[
      {time:"00:04","lrc":"人海 - 李照"},
      {time:"00:05","lrc":""},
      {time:"00:25","lrc":"就像风中飞扬的裙摆"},
      {time:"00:25","lrc":""},
      {time:"00:31","lrc":"天空一样明媚的洁白"},
      {time:"00:31","lrc":""},
      {time:"00:37","lrc":"你的手在我手中交换着对白"},
      {time:"00:37","lrc":""},
      {time:"00:42","lrc":"单车后座紧抱的臂弯"},
      {time:"00:42","lrc":""},
      {time:"00:49","lrc":"就像生活终归有无奈"},
      {time:"00:50","lrc":""},
      {time:"00:55","lrc":"推开窗不见阳光和云彩"},
      {time:"00:55","lrc":""},
      {time:"01:01","lrc":"我们描绘的未来美好的时代"},
      {time:"01:01","lrc":""},
      {time:"01:07","lrc":"成为别人手中的沙袋"},
      {time:"01:07","lrc":""},
      {time:"01:14","lrc":"真无奈 逃不出来"},
      {time:"01:14","lrc":""},
      {time:"01:20","lrc":"当往事太多次演出的淋漓尽致"},
      {time:"01:20","lrc":""},
      {time:"01:26","lrc":"在人海 瞬间掩埋"},
      {time:"01:26","lrc":""},
      {time:"01:32","lrc":"当现实太讽刺做了自己的人质"},
      {time:"01:32","lrc":""},
      {time:"01:38","lrc":"我还在追逐时间的黑白"},
      {time:"01:38","lrc":""},
      {time:"01:44","lrc":"那女孩却寻着铜臭味离开"},
      {time:"01:44","lrc":""},
      {time:"02:16","lrc":"就像生活终归有无奈"},
      {time:"02:16","lrc":""},
      {time:"02:21","lrc":"推开窗不见阳光和云彩"},
      {time:"02:21","lrc":""},
      {time:"02:28","lrc":"我们描绘的未来美好的时代"},
      {time:"02:28","lrc":""},
      {time:"02:34","lrc":"成为别人手中的沙袋"},
      {time:"02:34","lrc":""},
      {time:"02:40","lrc":"真无奈 逃不出来"},
      {time:"02:40","lrc":""},
      {time:"02:46","lrc":"当往事太多次演出的淋漓尽致"},
      {time:"02:46","lrc":""},
      {time:"02:53","lrc":"在人海 瞬间掩埋"},
      {time:"02:53","lrc":""},
      {time:"02:58","lrc":"当现实太讽刺做了自己的人质"},
      {time:"02:58","lrc":""},
      {time:"03:05","lrc":"我还在追逐时间的黑白"},
      {time:"03:05","lrc":""},
      {time:"03:10","lrc":"那女孩却寻着铜臭味离开"},
      {time:"03:10","lrc":""},
      {time:"03:17","lrc":"真无奈 逃不出来"},
      {time:"03:17","lrc":""},
      {time:"03:23","lrc":"当往事太多次演出的淋漓尽致"},
      {time:"03:23","lrc":""},
      {time:"03:29","lrc":"在人海 瞬间掩埋"},
      {time:"03:29","lrc":""},
      {time:"03:35","lrc":"当现实太讽刺做了自己的人质"},
      {time:"03:35","lrc":""},
    ]},{},{},{},{},{},{},{},{}
  ]

  var playlist=$('.play-list');
  var prevm=$('.prevmusic');
  var nextm=$('.nextmusic');
  var single=$('.single');
  var random=$('.random');
  var gm=$('.play-list .gm');
  var cancle=$('.play-list .sc');
  var gedan=$('.tools .gedan');
  var mname=$('.musicinfo .mname');
  var songer=$('.musicinfo .songer');
  var musicbj=$('.musiclist');
  var yuantu=$('.musictu .yuantu');
  var sc=$('.play-list .sc');
  ////删除/////
  sc.on('click',false);
  $("body").delegate(".sc","click",function(){
    var idsc=$(this).parent().index();
    // playinfo.splice(idsc,1);
    $(this).parent().hide();
    if (idsc===playinfo.length-1) {
      idsc=-1;
    };
    gongyou(idsc+1)
    // return console.log(playinfo);
    
    
  })
  ///歌单///
  gedan.on('click',function(){
    playlist.slideToggle();
  })
  /////////////////////////////////随机播放//////////////////////////////////
  var randomkg=true;
  random.on('mousedown',false);
  random.on('click',function(){
     if(randomkg){
     	randomkg=false;
     }else{
     	randomkg=true;
     }
     	random.toggleClass('ran');
  	})
/////////////////////////////////歌曲名///////////////////////////////////////
  $(playinfo).each(function(i,v){
    $('<li></li>').html('<span class="gm">'+v.musicname+'</span><span class="gs">'+v.name+'</span><span class="sc"></span><span class="totall">'+v.toalltime+'</span>').appendTo(playlist);
  	})
  //////默认///////
  var playlis=$('.play-list li');
  var index=0;
  playlis.eq(0).addClass('geming');
  mname.text(playinfo[0].musicname);
  songer.text(playinfo[0].name);
  musicbj.css({background:'url('+playinfo[0].bjsrc+') no-repeat',backgroundSize:'cover'});
  yuantu.css({background:'url('+playinfo[0].yuantusrc+') no-repeat',backgroundSize:'cover'});
  ////////////////上一首与下一首的公共部分////////////////////////
  function gongyou(index){
    playlis.filter('.geming').removeClass('geming');
    playlis.eq(index).addClass('geming');
    $('audio').removeAttr('src').attr('src',playinfo[index].src);
    musicbj.css({background:'url('+playinfo[index].bjsrc+') no-repeat',backgroundSize:'cover'});
    yuantu.css({background:'url('+playinfo[index].yuantusrc+') no-repeat',backgroundSize:'cover'});
    mname.text(playinfo[index].musicname);
    songer.text(playinfo[index].name);
    bofangzt.addClass('ting');
    yuantu.addClass('dong');
    audio.play();
  }
  ///////////////////////////////下一首//////////////////////////////////////
  nextm.on('click',xiayishou)
  function xiayishou(){
  	if(randomkg){
  		index+=1;
  	}else{
  		index=Math.floor(Math.random()*playinfo.length);
  	}
  	if(index===playinfo.length){index=0}
  	   gongyou(index)
  	}
  	//////////////////////////////上一首////////////////////////////////////////
  prevm.on('click',function(){
  	if(randomkg){
  		index-=1;
  	}else{
  		index=Math.floor(Math.random()*playinfo.length);
  	}
  	if(index===-1){index=playinfo.length-1};
  	  gongyou(index);
  	})
  //////////////////////////////////歌单////////////////////////////////////////
  var gm=$('.play-list li .gm');
   playlist.on('click','.gm',function(){
   	var j=$(this).parent().index();
    // console.log(j);
   	gongyou(j);
   })
  ////////////////////////单曲循环 循环播放切换///////////////////////////
   var round=true;
   single.on('mousedown',false);
   single.on('click',function(){
   	     if(round){
   	     	$(audio).on('ended',function(){
		   		audio.play();
	   		});
	   		round=false;
   	     }else{
   	     	round=true;
   	     }
         single.toggleClass('round');
   	})

  /////////播放////////////
  bofangzt.on('click',function(){
  	if(audio.paused){
  		audio.play();
  		}else{
  			audio.pause();
  		}
  		bofangzt.toggleClass('ting');
      yuantu.toggleClass('dong');
  	})
  /////////////秒转化成分///////////////////
 function time(t){
 	var a=Math.floor(t/60);
 	var b=Math.floor(t%60);
 	a=a<10 ? '0'+a : a;
 	b=b<10 ? '0'+b : b;
     return a+':'+b;
 }
 var sjzhishi=$('.sjzhishi');
 var ylzhishi=$('.ylzhishi');
 var sjyuan=$('.sjzhishi .yuan');
 var ylyuan=$('.ylzhishi .yuan');
 var sjcolor=$('.sjzhishi .colorzs');
 var ylcolor=$('.ylzhishi .colorzs');
 var yllb=$('.yinliang .yllb');
 /////////////歌曲下载完之后//////////////
 $(audio).on('canplay',function(){
   	bfsc.text(time(audio.currentTime));
    zsc.text(time(audio.duration));
   	audio.volume=al;
 	})  
 ///////////////播放后/////////////////////////// 	
 // $(audio).on('play',function(){
 //  	bofangzt.addClass('ting');
 // 	})
 ////////////////////播放的过程中过一直////////////////////////
 $(audio).on('timeupdate',function(){
 	bfsc.text(time(audio.currentTime));
	 	sjyuan.css({
	 		left:sjzhishi.width()*(audio.currentTime/audio.duration)-sjyuan.width()/2
	 		})
    sjcolor.css({
      width:sjzhishi.width()*(audio.currentTime/audio.duration)
    })
  	if(audio.currentTime===audio.duration&&round){
        xiayishou()
  	   }

    ////歌词//////
    var geciss=$('.musiclist .geci');
    var lrc=lyric[index].geci;
    // console.log(index)
    if (!(lyric[index].geci)) {
      geciss.html("");
      $('<li>').text('暂无歌词').appendTo(geciss);

    }else{
        for(var i=0;i<lrc.length;i++){
          if (lrc[i].time==time(audio.currentTime-5)) {
            geciss.html("");
            for(var a=i;a<lrc.length;a++){
              $('<li>').text(lrc[a].lrc).appendTo(geciss);
              $('.musiclist .geci li').eq(0).css({color:'red'})
            }
          };
        }    
      }
	 	})
 ///////////////////声音发生变化的时候////////////////////////////
 $(audio).on('volumechange',function(){
 	ylyuan.css({
	 		left:ylzhishi.width()*audio.volume-ylyuan.width()/2
	 		})
  ylcolor.css({
      width:ylzhishi.width()*audio.volume
      })
 	})

 //////////////////////进度指示条   声音指示条//////////////////////////////////
 sjyuan.on('click',false);
  sjzhishi.on('click',function(e){
    var leftt=e.offsetX-sjyuan.width()/2;
     sjyuan.css({left:leftt });
     audio.currentTime=e.offsetX/sjzhishi.width()*audio.duration;
  })
  ylyuan.on('click',false)
  ylzhishi.on('click',function(e){
    var jb=e.offsetX/ylzhishi.width();
    ylyuan.css({left:ylzhishi.width()*jb-ylyuan.width()/2});
    audio.volume=jb;
    al=jb;
  })
  /////////静音///////
  var al=1;
  yllb.on('click',function(){
    if (audio.volume!==0) {
        audio.volume=0;
    }else{
      audio.volume=al;
    }
    yllb.toggleClass('jingyin');
  })
 
   //拖拽效果//
   var statu=false;
   sjyuan.on('mousedown',false)
   sjyuan.on('mousedown',function(e){
      statu=true;
   	});
   $(document).on('mouseup',function(){
      statu=false;
   	})
   sjzhishi.on('mousemove',function(e){
		if(statu){
	     leftl = e.pageX - sjzhishi.offset().left;
	     if(leftl < 0){
	      leftll = 0;
	     }
	     if(leftl > 330){
	      leftl = 330;
	     }
	     sjyuan.css({left:leftl-sjyuan.width()/2});
	     audio.currentTime=leftl/sjzhishi.width()*audio.duration;
	  }
   	})


   var statuyl=false;
   ylyuan.on('mousedown',false)
   ylyuan.on('mousedown',function(e){
      statuyl=true;
    });
   $(document).on('mouseup',function(){
      statuyl=false;
    })
   ylzhishi.on('mousemove',function(e){
    if(statuyl){
       leftl = e.pageX - ylzhishi.offset().left;
       if(leftl < 0){
        leftl = 0;
        yllb.addClass('jingyin');
       }else{
        yllb.removeClass('jingyin');
       }
       if(leftl > 100){
        leftl = 100;
       }
       ylyuan.css({left:leftl-ylyuan.width()/2});
       audio.volume=leftl/ylzhishi.width();
       al=audio.volume;
       // console.log(al)
    }
    })





})