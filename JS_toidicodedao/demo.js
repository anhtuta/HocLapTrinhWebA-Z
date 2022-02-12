function add(a, b) {
    setTimeout(function() {
        console.log("Kq = " + (a+b));
    }, 200)
}

add(4,5);
console.log('Done!');

function add2(a, b, cb) {
    setTimeout(function() {
        cb(a+b);
    }, 200)
}
add2(2,3, function(kq) {
    console.log('kq = ' + kq);
})
console.log('Done2!');
