	var width=$('.mydiv').width();
	var height=$('.mydiv').height();
	var lft,tp;
	var clock;
	var time=1500;
	var e=document.getElementById("level");
    var level= e.options[e.selectedIndex].value;	
	var gameLevel=0;
	var score=0;
	var timerFunc=setInterval(function () {startRoaming()},time);
	var scoreDisplay = document.getElementById("score");
	scoreDisplay.innerHTML = '<b>Score:</b> '+score;




    function callMainFunc(){

		setInterval(function () {getWidthAndHeight()},50);
		timerFunc;
	}
	function getWidthAndHeight(){
			width=$('.mydiv').width();
			height=$('.mydiv').height();
	}
	function startRoaming(){
		lft=Math.floor(Math.random() * (width - 100 + 1)) + 50;
		tp=Math.floor(Math.random() * (height - 100 + 1)) + 50;
		$("#circle").css({"left":lft,"top":tp}).show()
	}
	function levelChange(){

		level= e.options[e.selectedIndex].value;
		score=0;
		clearInterval(timerFunc);
		time=1500-(level*100);
		timerFunc=setInterval(function () {startRoaming()},time);

		scoreDisplay.innerHTML = '<b>Score:</b> '+score;
		timerFunc;
	}
	$("#circle").on('click', function(){

		$("#circle").css({"left":lft,"top":tp}).hide()
		score+=1;
       $.toaster({ priority : 'success', title : 'Score', message : score,'css'      : {  width    : '800px'
       }
       });

		scoreDisplay.innerHTML = '<b>Score:</b> '+score;
	})
	
/*	$(document).ready(function() {
			clock = $('.clock').FlipClock({
		        clockFace: 'HourlyCounter'
		    });
		});
	*/