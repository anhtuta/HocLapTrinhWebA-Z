function doFirst() {
	pic = document.getElementById('goku_pic');
	leftbox = document.getElementById('leftbox');
	
	pic.addEventListener("dragstart", startDrag, false);
	pic.addEventListener("dragend", endDrag, false);
	leftbox.addEventListener("dragenter", dragEnter, false);	//e = event
	leftbox.addEventListener("dragleave", dragLeave, false);	//e = event
	leftbox.addEventListener("dragover", function(e) {e.preventDefault();}, false);
	leftbox.addEventListener("drop", dropped, false);
	
}

function startDrag(e) {
	var code = '<img id="goku_pic" src="images/goku.png">';
	e.dataTransfer.setData('Text', code);	//khi bắt đầu drag thì thông tin của img đó đc lưu lại
	
}

function endDrag(e) {
	pic2 = e.target;	//pic2 = hình sẽ đc drag
	pic2.style.visibility = 'hidden';	//cái hình đc kéo đó sẽ biến mất sau khi kéo nó sang leftbox
}

function dragEnter(e) {
	e.preventDefault();
	leftbox.style.background="SkyBlue";
	leftbox.style.border="3px solid red";
}

function dragLeave(e) {
	e.preventDefault();
	leftbox.style.background="white"
	leftbox.style.border="3px solid blue";
}

function dropped(e) {
	e.preventDefault();
	leftbox.innerHTML = e.dataTransfer.getData('Text');	//lấy thông tin của img vừa lưu ở trên
	//leftbox.innerHTML = ND; : Thay nội dung bên trong thẻ leftbox bằng nội dung của ND
}

window.addEventListener("load", doFirst, false);