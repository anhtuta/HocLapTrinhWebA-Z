
function doFirst() {
	var btn = document.getElementById("btnSave");
	btn.addEventListener("click", saveCrap, false);
	display();
}

function saveCrap(e) {
	var one = document.getElementById("one").value;	//lấy giá trị text của cái textfield có id=one
	var two = document.getElementById("two").value;
	
	sessionStorage.setItem(one, two);	//2 tham so: key, value
	display();
	
	document.getElementById("one").value="";
	document.getElementById("two").value="";
}

function display() {
	var rightbox = document.getElementById("rightbox");
	rightbox.innerHTML = "";
	
	for(var x=0; x<sessionStorage.length; x++)  {
		var key = sessionStorage.key(x);
		var value = sessionStorage.getItem(key);
		rightbox.innerHTML += key + " - " + value + "<br />";
	}
}

window.addEventListener("load", doFirst, false);