//Ta có 2 cách để khởi tạo object, đó là sử dụng object literal và 
//Constructor Function. Nếu dùng object literal, object được tạo ra sẽ 
//có prototype là Object.protoype. Nếu dùng constructor function, 
//object sẽ có một prototype mới, prototype mới này kế thừa Object.prototype.
//Prototype dùng để làm gì?
//Tại sao lại đẻ ra cái khái niệm prototype này làm gì? đó là do sự sida của JavaScript
//Trong JavaScript không có khái niệm class, do vậy, để kế thừa các trường/hàm của một object, 
//ta phải sử dụng prototype.


var person = {
    firstName: 'Hoang',
    lastName: 'Pham',
    showName: function () {
        console.log(this.firstName + ' ' + this.lastName);
    }
}; // object này có prototype là Object.prototype

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.showName = function () {
        console.log(this.firstName + ' ' + this.lastName);
    };
}

Person.prototype.showInfo = function () {
    console.log(this.firstName + " - " + this.lastName);
}

//Tại sao dùng arrow function lại sai thằng this?
Person.prototype.showFirstName = () => {
    console.log(this.firstName);
}


var otherPerson = new Person('Hoang', 'Pham'); // object này có prototype là Person.prototype
// Prototype mới: Person.prototype được tạo ra
// Person.prototype kế thừa Object.prototype
// Những object được tạo ra bằng cách gọi new Person() đều có prototype là Person.prototype
// Nếu muốn thêm trường hay hàm cho các object này, chỉ cần thêm 1 lần vào prototype là xong. Hiểu nôm na thì prototype cũng có vài phần giống với class, mỗi tội sida hơn.

otherPerson.showName();
otherPerson.showInfo();
otherPerson.showFirstName();    //undefined