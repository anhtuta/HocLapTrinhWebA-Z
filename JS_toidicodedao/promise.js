// //các điểm hay của Promise nhé.

// //1. Promise chaining
// //Giá trị trả về của hàm then là 1 promise khác. Do vậy ta có thể dùng promise gọi liên tiếp các hàm bất đồng bộ.
// // Dùng callback hell
// xin_mẹ_mua_xe(function (xe) {
//     chở_gái_đi_chơi(xe, function (gái) {
//         chở_gái_vào_hotel(hotel, function (z) {
//             // Làm gì đó, ai biết
//         });
//     });
// });

// // Dùng promise, code gọn nhẹ dễ đọc
// xin_mẹ_mua_xe
//     .then(chở_gái_đi_chơi)
//     .then(chở_gái_vào_hotel)
//     .then(function () { /*Làm gì đó, ai biết*/ });

// //2. Bắt lỗi với promise
// //Trong ví dụ trên, ta gọi lần lượt 3 hàm: xin_mẹ_mua_xe, chở_gái_đi_chơi, chở_gái_vào_hotel.

// //Chỉ cần một trong 3 hàm này bị lỗi, promise sẽ chuyển qua trạng thái reject. Lúc này callback trong hàm catch sẽ được gọi. Việc bắt lỗi trở nên dễ dàng rất nhiều
// // Khi một function bị lỗi, promise bị reject (thất hứa)
// function chở_gái_vào_hotel() {
//     return Promise((response, reject) => {
//         reject("Xin lỗi hôm nay em đèn đỏ");
//     });
// }


// xin_mẹ_mua_xe
//     .then(chở_gái_đi_chơi)
//     .then(chở_gái_vào_hotel)
//     .then(function () { /*Làm gì đó, ai biết*/ })
//     .catch(function (err) {
//         console.log(err); //"Xin lỗi hôm nay em đèn đỏ"
//         console.log("xui vl");
//     });

//3. Xử lý bất đồng bộ
//Giả sử bạn muốn 3 hàm AJAX khác nhau. Bạn cần kết quả trả về của 3 hàm này trước khi tiếp tục chạy. Với callback, việc này sẽ khá khó thực hiện. Tuy nhiên, promise hỗ trợ hàm Promise.all, cho phép gộp kết quả của nhiều promise lại với nhau.
// Ba hàm này phải được thực hiện "cùng lúc"
// chứ không phải "lần lượt"
var sờ_trên = new Promise((resolve, reject) => {
    resolve("Phê trên");
});
var sờ_dưới = new Promise((resolve, reject) => {
    resolve("Phê dưới");
});
var sờ_tùm_lum = new Promise((resolve, reject) => {
    resolve("Phê tùm lum chỗ");
});

// Truyền 1 array chứa toàn bộ promise vào hàm Promise.all
// Hàm này trả ra 1 promise, tổng hợp kết quả của các promise đưa vào
Promise.all([sờ_trên, sờ_dưới, sờ_tùm_lum])
    .then(function (result) {
        console.log(result); // ["Phê trên", "Phê dưới", "Phê tùm lum chỗ"]
        // Phê xong làm gì ai biết
    }) 