//Bind là một hàm nằm trong Function.prototype, do đó chỉ có function mới có khả năng gọi nó.
//Như đã nhắc tới trong bài viết về this, bind được dùng để xác định tham số this cho một function.
//NHẮC LẠI:
var person = {
    firstName: 'Hoang',
    lastName: 'Pham',
    showName: function () {
        console.log(this.firstName + ' ' + this.lastName);
    }
};

//showName truyền vào như callback, ở đây this chính là button
//$('button').click(person.showName);

// Dùng bind để xác định giá trị this
//$('button').click(person.showName.bind(person)); //this ở đây vẫn là object person

//Không chỉ bind được giá trị this, bind còn bind được các tham số truyền vào cho hàm nữa. Do đó, Bind còn được dùng để viết partial function.
//Nói một cách đơn giản, partial function tức là tạo ra 1 function mới từ 1 function cũ bằng cách gán mặc định một số tham số cho function cũ đó
function log(level, time, message) {
    console.log(level + ' - ' + time + ': ' + message);
}

function logErrToday(message) {
    log("Error", "Today", message);
}
logErrToday("Server die.");

// Hàm trên viết cách khác như sau:
// Hàm bind: tham số đầu tiên là 1 kiểu object đê this có thể refer tới.
// Không có this nên set this là null
// Set mặc định 2 tham số level và time
var logErrToday2 = log.bind(null, 'Error', 'Today');
logErrToday2("Server die.");
// Hàm trên tương ứng với 
log('Error', 'Today', 'Server die.');

var logErrToday3 = log.bind(null, "Demo", "Demo2", "Demo3");
logErrToday3();

function demoBind() {
    console.log(this.name, this.age);
}
demoBind.bind({name: "Anh tu!", age: 23})();

//======== Call và Apply, tuy 2 mà 1, thấy 1 mà 2 =============
//Đây là 1 cặp anh em… nhầm, chị em song sinh trong JavaScript. Hai hàm này nằm trong prototype của Function (Function.prototype), do đó chỉ function mới có thể gọi. Chúng có chung một chức năng lại: Gọi 1 function, xác định tham số this, truyền các tham số còn lại vào.
//Điểm khác nhau là apply truyền vào một array chứa toàn bộ các tham số còn call truyền lần lượt từng tham số. Dể dễ nhớ, ta có thể nhẩm “A là một Array, C là nhiều Cục“.

// Tìm max bằng cách gọi hàm Math.max
Math.max(4, 3, 2, 10);

// Thay vì gọi trực tiếp hàm Math.max, ta có thể dùng call
// Set this bằng null
Math.max.call(null, 4, 3, 2, 10);

// Apply tương tự call, nhưng không truyền lần lượt
// Mà truyền một array chứa toàn bộ các tham số
Math.max.apply(null, [4, 3, 2, 10]);

//Call và apply thường được dùng để mượn hàm (borrowing function)
function test(firstParam, secondParam, thirdParam) {
    var args = Array.apply(null, arguments);    //arguments là một biến cục bộ trong function, chứa toàn bộ các tham số được truyền vào.
    console.log(args);
}
test(1, 2, 3); // [1, 2, 3]
//Arguments là một object giống array nhưng không phải là array (đấy, thấy sida chưa). Arguments giống array vì nó có field length, có thể truy cập các giá trị nó chứa thông qua index 0,1,2. Tuy nhiên, do arguments không phải là array nên nó không thể gọi các hàm của Array.prototype.
//Do đó, ta phải sử dụng call/apply để mượn một số hàm trong Array.prototype, các hàm này sẽ trả ra một array cho ta xử lý. Dòng code phía trên chuyển object arguments thành một array.

//Ngoài ra, call và apply còn được dùng để monkey-patching hoặc tạo spy. Ta có thể mở rộng chức năng của một hàm mà không cần sửa source code của hàm đó
var computer = {
    accessWeb: function (site) {
        // Đi tới site nào đó
        console.log('Go to: ' + site);
    }
};
computer.accessWeb('facebook.com/taanhtu95'); //Go to: facebook.com/taanhtu95

//Sử dụng call, ta có thể ghi thêm log trước và sau khi hàm accessWeb được gọi mà không can thiệp vào code của hàm đó
var oldFunction = computer.accessWeb;
// Tráo function accessWeb bằng hàm mới
computer.accessWeb = function () {
    console.log('Con gà bắt đầu vào web');
    oldFunction.apply(this, arguments); // giữ nguyên hàm cũ, this ở đây là Caller của hàm chứa đoạn thực thi này -> là computer
    console.log('Con gà đã vào web');
}
computer.accessWeb('facebook.com/taanhtu95');