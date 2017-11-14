function doFirst() {
	var x = document.getElementById("canvas");
	canvas = x.getContext('2d');   //vẽ hình 2D thôi. canvas là biến global, x là biến local. Trong hàm này thì dùng thằng nào cũng đc
	
	canvas.fillStyle="blue";
	canvas.fillRect(10,10,100,200);
	
	//canvas.clearStyle="yellow";	ko có lệnh này
	canvas.clearRect(20,20,50,90);
	
	canvas.strokeStyle="red";
	canvas.strokeRect(150, 10, 100, 100);
	
}

window.addEventListener("load", doFirst, false);