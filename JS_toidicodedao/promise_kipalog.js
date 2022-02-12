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
    console.log('Chúng ta có ' + tien + "$ để ăn nhậu hôm nay!");
}

tra_tien_em_anh_oi() // trả về 1 Promise.
    .then(function (tien) {
        // chúng ta có thể làm gì đó với số tiền này ngay lập tức
        // ơ làm gì đây
        return nhau_an_mung(tien);
    })
    .catch(function (ly_do_quit) {
        console.log(ly_do_quit);
    })
