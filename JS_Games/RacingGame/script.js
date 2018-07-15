var anim_id;

//saving dom objects to variables
var container = document.getElementById("container");
var car = document.getElementById("car");
var car_1 = document.getElementById("car_1");
var car_2 = document.getElementById("car_2");
var car_3 = document.getElementById("car_3");
var car_4 = document.getElementById("car_4");
var car_5 = document.getElementById("car_5");
var line_1 = document.getElementById("line_1");
var line_2 = document.getElementById("line_2");
var line_3 = document.getElementById("line_3");
var restart_div = document.getElementById("restart_div");
var restart_btn = document.getElementById("restart");
var score = document.getElementById("score");
var level = document.getElementById("level");
var jump_tag = document.getElementById("jump_tag");

//saving some initial setup
var container_width = parseInt(container.offsetWidth);
var container_height = parseInt(container.offsetHeight);
var car_width = parseInt(car.offsetWidth);
var car_height = parseInt(car.offsetHeight);
console.log("container_width = " + container_width);
console.log("container_height = " + container_height);
console.log("car_width = " + car_width);
console.log("car_height = " + car_height);

//some other declarations
var game_over = false;

var score_counter = 1;

var car_speed = 3;
var line_speed = 2;
var game_level = 1;
var jump_times = 1;

var move_right = false;
var move_left = false;
var move_up = false;
var move_down = false;
var jump = false;

var _reqAnimation;

window.onload = function(){
    _reqAnimation = window.requestAnimationFrame    ||
        window.mozRequestAnimationFrame     ||
        window.webkitRequestAnimationFrame  ||
        window.msRequestAnimationFrame      ||
        window.oRequestAnimationFrame;

    if(_reqAnimation) {

    }
    else alert("Your browser doesn't support requestAnimationFrame.");
};

restart_btn.addEventListener("click", function() {
    location.reload();
})

document.addEventListener("keydown", function(e) {
    if(game_over === false) {
        var key = e.keyCode;
        //console.log("key = " + key);

        switch(key) {
            case 37:
                if(move_left === false) {
                    move_left = _reqAnimation(moveLeft);
                }
                break;
            case 38:
                //Nếu ko check move_up === false thì khi ấn và giữ nút lên,
                //xe sẽ đi lên rất nhanh, và khi thả tay ra rồi thì nó vẫn
                //đi lên, nghĩa là _reqAnimation vẫn còn tác dụng khi thả tay ra
                if(move_up === false) {
                    move_up = _reqAnimation(moveUp);
                }
                break;
            case 39:
                if(move_right === false) {
                    move_right = _reqAnimation(moveRight);
                }
                break;
            case 40:
                if(move_down === false) {
                    move_down = _reqAnimation(moveDown);
                }
                break;
            case 32:
                //Dấu cách space: cho xe nhảy lên
                jumpOverCars();
                break;
        }
    }
});

function jumpOverCars() {
    if(jump === false && jump_times > 0) {
        jump = _reqAnimation(jumpOver);
        console.log("jump = " + jump);
        car.classList.add("zoom-125-percent");

        var timeToStop;
        if(game_level >= 3) timeToStop = 600;
        else timeToStop = 800;

        setTimeout(function() {
            //hạ cánh sau khi nhảy
            cancelAnimationFrame(jump);
            jump = false;
            car.style.zIndex = 10;
            car.classList.remove("zoom-125-percent");
            jump_times--;
            jump_tag.innerHTML = jump_times;
        }, timeToStop);
    }
}

document.addEventListener("keyup", function(e) {
    if(game_over === false) {
        var key = e.keyCode;

        switch(key) {
            case 37:
                cancelAnimationFrame(move_left);
                move_left = false;
                break;
            case 38:
                cancelAnimationFrame(move_up);
                move_up = false;
                break;
            case 39:
                cancelAnimationFrame(move_right);
                move_right = false;
                break;
            case 40:
                cancelAnimationFrame(move_down);
                move_down = false;
                break;
        }
    }
});

//move the car to the left
function moveLeft() {
    if(parseInt(getCssProperty(car, "left")) > 0) {
        car.style.left = (parseInt(getCssProperty(car, "left")) - 3) + "px";
        move_left = _reqAnimation(moveLeft);
    }
}

//move the car to the right
function moveRight() {
    if(parseInt(getCssProperty(car, "left")) < container_width - car_width) {
        car.style.left = (parseInt(getCssProperty(car, "left")) + 3) + "px";
        move_right = _reqAnimation(moveRight);
    }
}

//move the car to the top
function moveUp() {
    if(parseInt(getCssProperty(car, "top")) > 0) {
        car.style.top = (parseInt(getCssProperty(car, "top")) - 3) + "px";
        move_up = _reqAnimation(moveUp);
    }
}

//move the car to the bottom
function moveDown() {
    if(parseInt(getCssProperty(car, "top")) < container_height - car_height) {
        car.style.top = (parseInt(getCssProperty(car, "top")) + 3) + "px";
        move_down = _reqAnimation(moveDown);
    }
}

function jumpOver() {
    car.style.zIndex = 11;  //Các xe kia có z-index = 10;
    jump = _reqAnimation(jumpOver);
}

//https://stackoverflow.com/questions/13778439/how-to-get-the-css-left-property-value-of-a-div-using-javascript
function getCssProperty(element, property) {
    return window.getComputedStyle(element,null).getPropertyValue(property);
}

/* Move the cars and lines */
anim_id = requestAnimationFrame(moveCarsAndLines);

function moveCarsAndLines() {
    if(jump === false) {
        //Xe đang ko nhảy thì mới kiểm tra va chạm
        if(collision(car, car_1) || collision(car, car_2) || collision(car, car_3) || collision(car, car_4) || collision(car, car_5)) {
			var x = document.getElementById("myAudio");
			var kq = x.play();
			/*
			Nếu play() mà xảy ra lỗi:
			Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first
			Nghĩa là mày chưa thao tác gì với trang web. Chỉ cần cho xe nhúc nhích 1 tý, hoặc click chuột
			sau đó đâm vào xe khác sẽ ko có lỗi này!
			Nếu muốn sửa thì vào đây: https://goo.gl/xX8pDD
			*/
			
			console.log(kq);
			//console.log(kq.isResolved);
			//console.log(kq.isFulfilled);
			//console.log(kq.isPending);
			//console.log(kq.isRejected);
			console.log("Nếu có lỗi nghĩa là mày chưa thao tác gì với trang web. Chỉ cần cho xe nhúc nhích 1 tý, " +
				"hoặc click chuột sau đó đâm vào xe khác sẽ ko có lỗi này!");
            stop_the_game();
            return;
        }
    }

    countScore();

    //di chuyển các xe xuống dưới liên tục
    car_down(car_1);
    car_down(car_2);
    car_down(car_3);
    car_down(car_4);
    car_down(car_5);

    //di chuyển các thẻ line xuống dưới liên tục
    line_down(line_1);
    line_down(line_2);
    line_down(line_3);

    anim_id = requestAnimationFrame(moveCarsAndLines);
}

function countScore() {
    score_counter++;
    if (score_counter % 20 == 0) {
        //score.innerHTML = parseInt(score.innerHTML) + 1;  Lệnh này tương đương với lệnh dưới
        score.innerHTML = score_counter/20;
    }

    //cứ 25 điểm thì tăng tốc độ lên 1 đơn vị
    if (score_counter % 500 == 0) {
        car_speed++;
        game_level++;
        jump_times++;
        level.innerHTML = game_level;
        jump_tag.innerHTML = jump_times;
    }
	
	if (score_counter % 1200 == 0) {
        line_speed++;
	}
}

//di chuyển thẻ car xuống dưới
function car_down(car) {
    var current_car_top = parseInt(getCssProperty(car, "top"));
    if(current_car_top > container_height) {
        current_car_top = -200;
        var car_left = parseInt(Math.random() * (container_width - car_width));
        car.style.left = car_left + "px";
    }
    car.style.top = current_car_top + car_speed + "px";
}

//di chuyển thẻ line xuống dưới
function line_down(line) {
    var current_line_top = parseInt(getCssProperty(line, "top"));
    //console.log("current_line_top = " + current_line_top);
    if(current_line_top > container_height) {
        //Cho thẻ line này lên đầu của container
        current_line_top = -300;
    }

    line.style.top = current_line_top + line_speed + "px";
    //console.log(line);
}

function collision(div1, div2) {
    var x1 = parseInt(getCssProperty(div1, "left"));
    var y1 = parseInt(getCssProperty(div1, "top"));
    var h1 = parseInt(div1.offsetHeight);
    var w1 = parseInt(div1.offsetWidth);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = parseInt(getCssProperty(div2, "left"));
    var y2 = parseInt(getCssProperty(div2, "top"));
    var h2 = parseInt(div2.offsetHeight);
    var w2 = parseInt(div2.offsetWidth);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}

function stop_the_game() {
    game_over = true;
    cancelAnimationFrame(anim_id);
    cancelAnimationFrame(move_right);
    cancelAnimationFrame(move_left);
    cancelAnimationFrame(move_up);
    cancelAnimationFrame(move_down);
    restart_div.setAttribute("style", "display: block; z-index: 12;");
    restart_btn.focus();
}
