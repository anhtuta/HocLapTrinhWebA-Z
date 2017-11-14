function doFirst() {
	var x = document.getElementById("canvas");
	canvas = x.getContext('2d');   //vẽ hình 2D thôi. canvas là biến global, x là biến local. Trong hàm này thì dùng thằng nào cũng đc
	
	//draw a triangle:
	canvas.beginPath();		//notify that we begin to start drawing a shape
	canvas.moveTo(350, 50);	//starting point
	canvas.lineTo(370, 250);		//draw a line to (70, 250)
	canvas.lineTo(600, 200);
	canvas.closePath();		//sau các lệnh trên thì hình của ta chưa đc vẽ, muốn vẽ phải dùng lệnh dưới. Các lệnh trên chỉ thiết lập trước khi vẽ
	canvas.stroke();
	
	//draw a 8-point star:
	canvas.beginPath();
	canvas.moveTo(50,50);
	canvas.lineTo(120,150);
	canvas.lineTo(0,180);
	canvas.lineTo(120,210);
	canvas.lineTo(50,310);	
	canvas.lineTo(160,250);
	canvas.lineTo(190,370);
	canvas.lineTo(220,250);	
	canvas.lineTo(330,310);
	canvas.lineTo(260,210);
	canvas.lineTo(380,180);	
	canvas.lineTo(260,150);
	canvas.lineTo(330,50);
	canvas.lineTo(220,110);	
	canvas.lineTo(190,0);
	canvas.lineTo(160,110);
	canvas.closePath();
	canvas.stroke();﻿
	
	//Working with Text and Shadows:
	canvas.font="bold 20px Tahoma";
	canvas.textAlign="end";
	canvas.fillText("OMG! Today is cool!", 600, 100);	//text này sẽ kết thúc tại tọa độ (600,100), do đó ko biết chỗ bắt đầu ở đâu :v
	
	canvas.font="bold 20px Comic Sans MS, Arial";
	canvas.textAlign="end";
	canvas.fillText("You set this canvas's size is 600x400,", 700, 140);
	canvas.fillText("but you draw this String in 700, 100", 700, 180);
	canvas.fillText("So some of them will disappear", 700, 220);
	
	canvas.font="bold 36px Comic Sans MS, Arial";
	canvas.strokeText("This is a stroke text", 400, 100);
	
	//shadow:
	canvas.shadowOffsetX = 4;
	canvas.shadowOffsetY = 4;
	canvas.shadowBlur = 6;
	canvas.shadowColor = 'rgba(0,0,255,0.5)';		//màu của shadow = blue, anpha = 0.5 = capacity
	canvas.font="bold 36px Comic Sans MS, Arial";
	canvas.textAlign="start";
	canvas.fillText("This is a fill text", 0, 250);
	
}

window.addEventListener("load", doFirst, false);