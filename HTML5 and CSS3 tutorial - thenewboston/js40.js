function doFirst() {
	var x = document.getElementById("canvas");
	canvas = x.getContext('2d');   //vẽ hình 2D thôi. canvas là biến global, x là biến local. Trong hàm này thì dùng thằng nào cũng đc
	
	canvas.font = "bold 30px Tahoma";
	canvas.textAlign="start";
	canvas.fillText("start translate", 30,40);
	
	canvas.translate(100, 150);
	canvas.fillText("after translate", 30,40);		//rõ ràng dòng này có cùng tọa đọ với dòng trên nhưng đc dịch đi do dùng translate(100, 150);
	
	canvas.rotate((Math.PI/180)*25);	//xoay 25 độ
	canvas.fillText("after rotate", 30,40);		//rõ ràng dòng này có cùng tọa đọ với dòng trên nhưng đc dịch đi do dùng translate(100, 150);
	
	canvas.scale(1.5, 4);
	canvas.fillText("after scale", 30,40);		//rõ ràng dòng này có cùng tọa đọ với dòng trên nhưng đc dịch đi do dùng translate(100, 150);
	
}

window.addEventListener("load", doFirst, false);