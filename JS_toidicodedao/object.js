//Trong các ngôn ngữ OOP như C++, Java, C#, … Có thể tạm hiểu Class chính là cái khung, còn Object là vật thể tạo ra dựa vào cái khung đó. Js không có class, ta có thể khởi tạo 1 object mà không cần xác định class của nó
//có thể hiểu toàn bộ object đều có class chung là Object.
//Trong một số ngôn ngữ khác, để khởi tạo object, ta dùng từ khóa new + tên class. Tuy nhiên, do trong JavaScript không có khái niệm class, ta có thể tạo object theo 1 trong 2 cách sau. Cách khởi tạo object bằng Object Literal thường được sử dụng nhiều hơn.
// Cách 1 : Object literal
// Khai báo toàn bộ các trường và hàm
var person = {
    firstName: 'Hoang',
    lastName: 'Pham',
    showName: function () {
        console.log(this.firstName + ' ' + this.lastName);
    }
};

// Cách 2 : Object constructor
var psn = new Object();
psn.firstName = 'Hoang';
psn.lastName = 'Pham';
psn.showName = function () {
    console.log(this.firstName + ' ' + this.lastName);
};

//với một số bài toán phức tạp hơn, nếu dùng object literal mỗi lần khởi tạo object sẽ khiến code dài và trùng lặp (Lần nào cũng phải khai báo lại các property và method). Để giải quyết vấn đề này, người ta sử dụng một pattern gọi là Constructor pattern. Một function sẽ đóng vai trò constructor để khởi tạo object (Cách này na ná khai báo class trong các ngôn ngữ khác).
// Cach 3: using function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.showName = function () {
        console.log(this.firstName + ' ' + this.lastName);
    };
}

// Khi muốn tạo object person chỉ cần gọi constructor
var psn1 = new Person('Hoang', 'Pham');
var psn2 = new Person('Hoang', 'Nguyen');

//Cach 4: Một cách khác cũng hay được sử dụng đó là dùng prototype
function Person2() { }

Person2.prototype.firstName = 'Hoang';
Person2.prototype.lastName = 'Pham';
Person2.prototype.showName = function () {
    console.log(this.firstName + ' ' + this.lastName);
};

// Object được tạo sẽ có sẵn các trường firstName, lastName
// và hàm showName
var psn1 = new Person2();
console.log(psn1.firstName); //Hoang
psn1.showName; //Hoang Pham

/*=============== Nghịch ngợm với object =================*/
//1. Truy xuất một trường/hàm của object
//Để truy xuất một trường/hàm của object, ta có thể dùng dấu . (dot notation) và dấu [] (bracket notation). Dot notation thường được sử dụng nhiều hơn, nhưng bracket notation có thể làm được nhiều trò hay hơn.
var person3 = {
    firstName: 'Hoang',
    lastName: 'Pham',
    50: 'Hi', // Property có tên là số, không dùng dotNotation được
    showName: function () {
        console.log(this.firstName + ' ' + this.lastName);
    }
};

console.log(person3.firstName); // Hoang
console.log(person3['firstName']); // Hoang
console.log("\n=========== 1 ==============\n")

//console.log(person.50); // Bị lỗi
console.log(person3['50']); // Hi

person3.showName(); // Hoang Pham
person3['showName'](); // Hoang Pham
console.log("\n=========== 2 ==============\n")

// Để duyệt qua toàn bộ các trường của một object, ta chỉ cần dùng hàm for đơn giản
for(var prop in person3) {
    console.log(prop);
}

//2. Thêm/Xóa một trường/hàm của object
//Với các ngôn ngữ static typing như C#, Java, một object được khởi tạo dựa trên class, do đó chúng luôn có các trường và hàm cố định. Tuy nhiên, do JavaScript là ngôn ngữ dynamic typing, ta có thể dễ dàng thêm/xóa các trường trong code
delete person3.lastName; // Xóa trường lastName
person3.showName();     //Hoang undefined
person3.lastName = 'Just adding'; // Thêm trường lastName
person3.showName();     //Hoang Just adding

//3. Serialize và deserialize
//Để giao tiếp với server, JavaScript thường submit dữ liệu dưới dạng pair-value (thông qua form) hoặc JSON. Do đó, javascript hỗ trợ sẵn việc chuyển object sang chuỗi JSON và ngược lại
// Serialize sẽ làm mất method, chỉ giữ các property
var person3String = JSON.stringify(person3);
console.log(person3String); //{"50":"Hi","firstName":"Hoang","lastName":"Just adding"}

var person4 = JSON.parse(person3String);
console.log(person4);   //{ '50': 'Hi', firstName: 'Hoang', lastName: 'Just adding' }   //chú ý: tên key ko có nháy kép/đơn nếu nó là 1 từ. Điều này chứng tỏ đây là 1 object chứ ko phải string

