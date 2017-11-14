function doFirst() {
	var btn = document.getElementById("btnSave");
	btn.addEventListener("click", saveCrap, false);
}

function saveCrap(e) {
	var one = document.getElementById("one").value;	//lấy giá trị text của cái textfield có id=one
	var two = document.getElementById("two").value;
	
	sessionStorage.setItem(one, two);	//2 tham so: key, value
	display(one);
}

function display(nameOfItem) {
	var rightbox = document.getElementById("rightbox");
	var two = sessionStorage.getItem(nameOfItem);
	
	rightbox.innerHTML = "name of variable: "+nameOfItem+"<br >Value: "+two;
}

window.addEventListener("load", doFirst, false);