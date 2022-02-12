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
    }
}
person3.showFriend(); //Hàm chạy đúng
person3.showFriendThis(); // Hàm chạy sai