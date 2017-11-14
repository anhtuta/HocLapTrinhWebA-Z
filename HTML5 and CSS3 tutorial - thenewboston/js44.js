function doFirst() {
	pic = document.getElementById('goku_pic');
	leftbox = document.getElementById('leftbox');
	
	pic.addEventListener("dragstart", startDrag, false);
	leftbox.addEventListener("dragenter", function(e) {e.preventDefault();}, false);	//e = event
	leftbox.addEventListener("dragover", function(e) {e.preventDefault();}, false);
	leftbox.addEventListener("drop", dropped, false);
	
}

function startDrag(e) {
	var code = '<img id="goku_pic" src="images/goku.png">';
	e.dataTransfer.setData('Text', code);	//khi bắt đầu drag thì thông tin của img đó đc lưu lại
	
}

function dropped(e) {
	e.preventDefault();
	leftbox.innerHTML = e.dataTransfer.getData('Text');	//lấy thông tin của img vừa lưu ở trên
	//leftbox.innerHTML = ND; : Thay nội dung bên trong thẻ leftbox bằng nội dung của ND
}

window.addEventListener("load", doFirst, false);