function doFirst() {
	var x = document.getElementById("canvas");
	canvas = x.getContext('2d');   //vẽ hình 2D thôi. canvas là biến global, x là biến local. Trong hàm này thì dùng thằng nào cũng đc
	
	canvas.font = "bold 30px Tahoma";
	canvas.textAlign="start";
	
	canvas.save();
	canvas.font = "normal 15px Comic Sans MS";
	canvas.fillText("let's begin!", 10, 30);
	
	canvas.rotate(1);
	canvas.fillText("After rotation", 60, 10);
	
	canvas.restore();
	canvas.fillText("after restoring!", 10, 30);	//đoạn text này sẽ lấy các cài đặt của canvas trước khi có lệnh save(), nghĩa là font = "bold 30px Tahoma"; chứ ko phải font = "normal 15px Comic Sans MS";
	
	//////////bài 42:
	var pic = new Image();
	pic.src="images/goku.png";
	pic.addEventListener("load", function() {canvas.drawImage(pic,220,0)}, false);	//nếu dùng (pic,220,0, x.width, x.height) thì nó kéo dãn theo kích thước của x(của canvas)
	
	
	/////////bai 43:
	window.addEventListener("mousemove", anhtu, false);
	x.addEventListener("mouseout", anhtu2, false);
}

function anhtu(e) {
	//canvas.clearRect(0,0,600,400);		//clear entire canvas
	var xPos = e.clientX;	//clientX = horizontal coordinates of the mouse event
	var yPos = e.clientY;	//clientY = ... 2 lệnh này lấy tọa đọ của chuột
	canvas.fillRect(xPos-50, yPos-50, 100, 100);
}

function anhtu2(e) {
	canvas.clearRect(0,0,600,400);
	doFirst();
}

window.addEventListener("load", doFirst, false);