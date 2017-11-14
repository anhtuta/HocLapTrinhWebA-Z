function doFirst() {
	barSize=600;	/* = size of defaultBar in file mycss28.css. NOTE THAT DON'T PUT px after 600 */
	/*Tham chiếu tới các đối tượng bên file .html: */
	/*khá giống với java và xml trong android */
	myMovie = document.getElementById('myMovie');
	playBtn = document.getElementById('playBtn');
	defaultBar = document.getElementById('defaultBar');
	progressBar = document.getElementById('progressBar');
	
	/* thêm các sự kiện cho các đối tượng trên */
	playBtn.addEventListener("click",playOrPause, false);
	defaultBar.addEventListener('click', clickedBar, false);
}

function playOrPause() {
	if(!myMovie.paused && !myMovie.ended) {//click playBtn khi video đang chạy: ta sẽ pause movie. nếu như video đang chạy và chưa chạy hết thì click vào mới có tác dụng
		myMovie.pause();
		playBtn.innerHTML='Play';	//playBtn.setText("Play") 
		window.clearInterval(updateBar);	//stop updating the progressBar while pausing 
	}else{
		myMovie.play();
		playBtn.innerHTML='Pause';	//playBtn.setText("Pause")
		updateBar=setInterval(updateProgressbar, 100);
	}
}

function updateProgressbar() {
	if(!myMovie.ended) {
		var size=parseInt(myMovie.currentTime*barSize/myMovie.duration);  /*Ví dụ myMovie.duration = 3min, myMovie.currentTime = 1min26s */
		progressBar.style.width=size+'px';
	} else {
		progressBar.style.width='0px';
		playBtn.innerHTML='Play';
		window.clearInterval(updateBar)	/*stop updating progressBar after end video */
	}
}

function clickedBar(e) {	/* e =position of the mouse */
	if(!myMovie.paused && !myMovie.ended) {		//nếu như video đang chạy và chưa chạy hết thì click vào mới có tác dụng
		var mouseX = e.pageX-defaultBar.offsetLeft;
		var newTime = mouseX*myMovie.duration/barSize;	/*barSize = the entire size of the bar = 600px*/
		myMovie.currentTime = newTime;
		progressBar.style.width = mouseX+'px';
	}
}

window.addEventListener('load',doFirst,false);
/* window.onload=doFirst; */















