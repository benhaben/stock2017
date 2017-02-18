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

const TRY_NUMBER = 1000;
const TOTAL = 50000;


// ----------------------------------------------

function Partition(partitionNumber) {
    function calc1(m, n) {
        for (var i = 0; i < n; i++) {
            m = m + m * getRate() / 100;
            m = parseInt(m);
        }
        return m;
    }
    var onePart = TOTAL/partitionNumber;
    var money1 = 0;
    for (var i = 0; i < partitionNumber; i++) {
        money1 += calc1(onePart, TRY_NUMBER);
    }
    // console.log(`the money_b is ${money1}`);
    return money1;
};

// -----------------------------------------------比较两种操作1万次, 分仓操作效果确实可以降低系统风险，让收益更多
var a = 0,
    b = 0;
for (var i = 0; i < 10000; i++) {
    if (Partition(1) > Partition(6)) {
        a++;
    } else {
        b++;
    }
}
console.log(`a is ${a},b is ${b}`);