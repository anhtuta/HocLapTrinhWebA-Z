function doFirst() {
	var x = document.getElementById("canvas");
	canvas = x.getContext('2d');   //vẽ hình 2D thôi. canvas là biến global, x là biến local. Trong hàm này thì dùng thằng nào cũng đc
	
	canvas.fillStyle="blue";
	canvas.fillRect(150,10,100,200);
	
	canvas.strokeStyle="red";
	canvas.strokeRect(270, 10, 100, 100);
	
	var g = canvas.createLinearGradient(0,300,100,400);	//(0,300 là vị trí bắt đầu của Gradient, (100, 400) là vị trí stop,
	//Do đó gradient này nên áp dụng cho hình nào đc bắt đầu vẽ tại (0, 300) và kết thúc tại (100, 400) hoặc quá vị trí đó cũng đc
	g.addColorStop(.0, "red");
	g.addColorStop(.167	, "orange");
	g.addColorStop(.333, "yellow");
	g.addColorStop(.5, "green");
	g.addColorStop(.667, "blue");
	g.addColorStop(.833, "indigo");
	g.addColorStop(1, "violet");
	
	canvas.fillStyle=g;
	canvas.fillRect(0,250,200,200);﻿		//(bắt đầu từ tọa độ 0,300 vẽ HCN có kích thước = 2 tham số cuối cùng)
	
}

window.addEventListener("load", doFirst, false);