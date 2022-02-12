function wait(ms) {
    return new Promise(r => setTimeout(r, ms))
}

async function main() {
    console.log('sắp rồi...')
    await wait(2007)
    console.log('chờ tí...')
    await wait(2012)
    console.log('thêm chút nữa thôi...')
    await wait(2016)
    console.log('xong rồi đấy!')
}

main();
console.log('Done');

//Để sử dụng hàm async, ta cần khai báo từ khóa async ngay trước từ khóa định nghĩa hàm. Tức là, với hàm định nghĩa với từ khóa function ta phải khai báo ngay trước function, với hàm mũi tên (arrow function) ta phải khai báo trước tập tham số đầu vào, với phương thức của lớp Class thì ta phải khai báo ngay trước tên hàm.
/*Với từ khóa async này, ta có thể đợi các Promise (thao tác bất đồng bộ) xử lý trong hàm đó mà không tạm dùng luồng chính bằng từ khóa await như ví dụ trên.

Kết quả trả ra của hàm async luôn là một Promise dù bạn có gọi await - có xử lý bất đồng bộ hay không. Promise này sẽ ở trạng thái thành công với kết quả được trả ra với từ khóa return của hàm async, hoặc trạng thái thất bại với kết quả được đẩy qua từ khóa throw trong hàm async.

Như vậy, bản chất của hàm async chính là Promise*/

async function runner() {
    console.log('sắp rồi...')
    await wait(2007)
    console.log('chờ tí...')
    await wait(2012)
    console.log('thêm chút nữa thôi...')
    await wait(2016)
    throw new Error(2016)
}

async function main2() {
    try {
        await runner()
        console.log('xong rồi đấy!')
    } catch (e) {
        console.log(`có vấn đề tại ${e}`)
    }
}
main2();

/*
một số chú ý sau:

await luôn luôn nằm trong hàm async như ví dụ trên ( await không thể nằm trong hàm không được khai báo từ khóa async phía trước)

Thứ tự thực hiện các câu lệnh trong js nói chung hay nodejs nói riêng đều là chạy từ trên xuống dưới (nghĩa là chạy sync chứ không phải async), trừ những hàm liên quan tới I/O thì mới được chạy async (Tham khảo thêm ở bài viết event loop trong js )

Khi gặp await, nó sẽ convert hàm đó thành promise với callback là tất cả những phần code phía sau await đó. Bản chất await là một promise, phần code nằm sau await thực chất là code nằm trong callback của hàm await đó. Ví dụ 2 đoạn mã dưới đây là tương đương nhau:

*/
// async function test() {
//     var result = await db.collection('hospitals').findOne({ name: '医療法人神甲会隈病院' })
//     console.log('after findResult: ', result)
//     //...more code here ...
// }
// //
// //tương đương với
// function test() {
//     db.collection('hospitals').findOne({ name: '医療法人神甲会隈病院' }, function (result) {
//         console.log('after findResult: ', result)
//         //...more code here ...
//     })
// }
/*
Hàm async luôn trả về một promise.
Gọi hàm có từ khóa async phía trước luôn trả về một promise, dù trong hàm đó có await hay không
*/
function test() {
    var promise = returnTen()
    console.log(promise)
}

async function returnTen() {
    return 10
}

test() // Promise { 10 }

function test2() {
    var promise = returnTen2()
    console.log(promise)
}

async function returnTen2() {
    return await 10
}

test2()  // Promise { <pending> } VD này promise trả về chưa có kết quả luôn.

