const arry = [1,2,3,4,5];

function forEach(ary, callback) {

    for (let i = 0; i < arry.length; i ++) {
        callback(ary[i]);
    }

}

function log(val) {
    console.log(val);
}

function double(val) {
    val = val * 2;
    console.log(val);
}

forEach(arry, double);


