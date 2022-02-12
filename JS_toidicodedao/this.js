//Rắc rối 2 – Sử dụng this trong anonymous function
console.log('================ 2.CẦN CHẠY TRÊN CMD file this.js ==============');
///Giả sử, object person có một danh sách bạn bè, bạn muốn viết một function show toàn bộ bạn bè của person đó. Theo lý thuyết, ta sẽ viết như sau:
var person3 = {
    firstName: 'Hoang',
    lastName: 'Pham',
    friends: ['Minh', 'Sang', 'Khoa', 'Hoang'],

    //hàm chạy đúng như mong muốn
    showFriend: function () {
        for (var i = 0; i < this.friends.length; i++)
            console.log(this.firstName + ' have a friend named ' + this.friends[i]);
    },

    //this ở đây lại thành object window, do đó trường firstName bị underfined
    showFriendThis: function () {
        this.friends.forEach(function (fr) {
            console.log(this.firstName + ' have a friend named ' + fr);
        });
    },

    //cách giải quyết ta thường dùng là tạo một biến để gán giá trị this vào, và truy xuất tới giá trị đó trong anonymous function.
    showFriendFixed: function () {
        var personObj = this; //Gán giá trị this vào biến personObj
        this.friends.forEach(function (fr) {
            console.log(personObj.firstName + ' have a friend named ' + fr);
        });
    }
}
person3.showFriend(); //Hàm chạy đúng
person3.showFriendThis(); // Hàm chạy sai
person3.showFriendFixed();  ///OK

//Rắc rối 3 – Khi hàm được gán vào một biến (Trường hợp này ít xảy ra)
//Đó là trường hợp khi ta gán một hàm vào một biến, sau đó gọi hàm đó. Hàm sẽ không chạy như ta mong muốn, vì object gọi hàm lúc này chính là object window.
console.log('================ 3.CẦN CHẠY TRÊN CMD file this.js ==============');
var person2 = {
    firstName: 'Hoang',
    lastName: 'Pham',
    showName: function () {
        console.log(this.firstName + ' ' + this.lastName);
    }
};
var showNameFunc = person2.showName; //Gán function vào biến showNameFunc
showNameFunc(); //Chạy sai, ở đây this sẽ là object window

//Để giải quyết, ta cũng sử dụng hàm bind như trường hợp trên cùng, quá đơn giản phải không nào
var showNameFunc2 = person2.showName.bind(person2);
showNameFunc2();