//操作样本，2017年1月
var nums = [
    1.89, -0.16, -6.69,
    4.20,
    3.30,
    5.73, -6.21,
    1.69, -2.46, -0.91, -9.22, -3.95, -0.62, -5.50, -0.07,
    29.20,
    3.44,
    11.79, -2.26, -4.25,
    8.59,
    8.96, -2.85, -2.23, -4.20
];



console.log(`the length is ${nums.length}`);

function getRate() {
    var index = Math.floor((Math.random() * nums.length));
    return nums[index];
}



function AllIn() {

    var money = 50000;
    for (var i = 0; i < 1000; i++) {
        money = money + money * getRate() / 100;
        money = parseInt(money);
    }
    // console.log(`the money_a is ${money}`);
    return money;
};


// ----------------------------------------------分仓操作效果并不明显

function Partition() {
    function calc1(m, n) {
        for (var i = 0; i < n; i++) {
            m = m + m * getRate() / 100;
            m = parseInt(m);
        }
        return m;
    }
    var money1 = 0;
    for (var i = 0; i < 5; i++) {
        money1 += calc1(10000, 1000);
    }
    // console.log(`the money_b is ${money1}`);
    return money1;
};

// -----------------------------------------------比较两种操作1万次
var a = 0,
    b = 0;
for (var i = 0; i < 10000; i++) {
    if (AllIn() > Partition()) {
        a++;
    } else {
        b++;
    }
}
console.log(`a is ${a},b is ${b}`);