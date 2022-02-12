function tra_tien_em_anh_oi() {
    // tạo và trả về 1 Promise, khi này Promise ở trang thái pending
    return new Promise(function (resolve, reject) {
        // tâm sinh lý ngẫu nhiên 
        var isHappy = Math.random() >= 0.5;

        // nếu vui thì gọi resolve để trả tiền 
        if (isHappy) {
            var tien = 1000;
            return resolve(tien); //  Promise dc fulfilled  
        }

        // không vui quịt luôn
        // nhớ cho ng ta biết lý do vì chúng ta là lập trình viên lịch sự.
        var reason = 'lịt pẹ bố dek trả đấy làm gì nhau';
        reject(reason); //  Promise ở trạng thái reject
    });
}

function nhau_an_mung(tien) {
    return new Promise(function (resolve, reject) {
        console.log('Chúng ta có ' + tien + "$ để ăn nhậu hôm nay!");
        var isMoneyLeft = Math.random() >= 0.5;

        if (isMoneyLeft) {
            var moneyLeft = 300;
            return resolve(moneyLeft);
        }

        reject("Nhậu hết mẹ tiền rồi!");
    });
}

function mat_xa(tien) {
    console.log('Chúng ta còn lại ' + tien + "$ để đi mát xa!");
}

tra_tien_em_anh_oi()
    .then(nhau_an_mung)
    .then(mat_xa)
    .catch(console.error.bind(console));

//VD2
// thay vì
e_nhau_khong()
    .then(uong_ruou)
    .then(hut_thuoc)
    .then(ve_nha)
    .catch(console.log);

// nên viết thế này
e_nhau_khong()
    .then(function () {
        return Promise.all([
            uong_ruou(),
            hut_thuoc()
        ])
    })
    .then(ve_nha)
    .catch(console.error.bind(console));
//Cách viết đầu tiên chậm vì muốn đốt điếu thuốc phải ráng nhịn đến khi tàn cuộc nhậu, tỉ dụ uong_ruou cần 1 tiếng, hut_thuoc cũng 1 tiếng thì ta cần 2 tiếng mới về đến nhà.
//Cách viết thứ 2 dùng Promise.all code chạy nhanh gấp nhiều lần so với cách 1 vì uong_ruou và hut_thuoc sẽ dc chạy song song, cùng lúc ( parallel ) nên chỉ tốn 1 tiếng là đã xong. Nhanh gấp đôi
