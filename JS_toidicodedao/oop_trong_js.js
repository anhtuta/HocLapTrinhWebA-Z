//JavasSript thì vốn sida nên ta phải áp dụng một số chiêu trò để hiện thực
//4 đặc tính của OOP. Trong JavaScript, để hiện thực tính bao đóng , ta có 
//thể tạo ra 1 Constructor Function, đóng gói toàn bộ các trường và hàm 
//vào 1 object. Thông thường, các bạn hay khai báo như sau:
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.showName = function () {
        console.log(this.firstName + ' ' + this.lastName);
    };
}

var ps1 = new Person('Hoang', 'Pham');

// các property khai báo vào biến this có thể bị truy xuất từ bên ngoài
// object không còn bao đóng nữa
ps1.firstName = 'changed';
console.log(ps1.firstName);

//Với các khai báo này, tính bao đóng không được đảm bảo. Các property có thể bị truy cập, thay đổi từ bên ngoài. Ở đây, ta phải sử dụng biến cục bộ
function Person2(firstName, lastName) {
    var fstName = firstName;
    var lstName = lastName;

    this.setFirstName = function (firstName) { fstName = firstName; };
    this.getFirstName = function () { return fstName; };

    this.setLastName = function (lastName) { lstName = lastName; };
    this.getLastName = function () { return lstName; }

    this.showName1 = function () {
        console.log(this.fstName + ' ' + this.lstName);     //Ko thể dùng this
    };
    this.showName2 = function () {
        console.log(fstName + ' ' + lstName);   //OK
    };
}

var ps2 = new Person2('Hoang', 'Pham');
console.log(ps2.fstName); // Undefined, không thể truy cập được
console.log(ps2.getFirstName()); // Hoang
ps2.showName2();
//Tuy nhiên, biến cục bộ này chỉ có thể truy xuất trong Constructor Function, nó tương đương với các trường private trong Java. Trong javascript, không có cách nào để tạo ra các trường protected (Chỉ có thể truy cập từ class kế thừa) như Java và C# được

//Việc kế thừa còn sida hơn, trong JavaScript không có từ khóa extends cũng chẳng có class, ta phải sử dụng prototype để kế thừa
function Superman(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
// Ta muốn SuperMan sẽ kế thừa các thuộc tính của Person
// Sử dụng prototype để kế thừa
Superman.prototype = new Person();
var sm = new Superman("Anhtu", "Ta");
sm.showName();