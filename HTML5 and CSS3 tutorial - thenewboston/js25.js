function getStuff() {
	document.querySelector('#tuna').onclick=talk;	//Tìm thằng ĐẦU TIÊN có id=tuna và setEvent click cho nó, vì hàn querySelector chỉ return 1 element thôi
	var list = document.querySelectorAll("#tuna");	//lấy tất cả các thằng có id=tuna và cho vào 1 mảng
	list[1].onclick=talk2;	//chú ý: tên hàm ko có 2 dấu ngoặc ()
	
	//////////
	var list2 = document.querySelectorAll(".att");
	for(var i=0; i<list2.length; i++) {
		list2[i].onclick=talk3;
	}
}

function talk() {
	alert("OMG! This's awesome!");
}

function talk2() {
	alert("OMG! This's talk2()!");
}

function talk3() {
	alert("OMG! This's att!");
}
window.onload=getStuff;