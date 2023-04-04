lesson8;
let abs = [10, 3, -4, 20];

// 여기에 아래 있는 두가지 문제를 풀었습니다

const positiveSum = (arr) =>
  abs.filter((value) => value > 0).reduce((a, b) => a + b, 0);
console.log(positiveSum());


// ==================================

const makeNegative = (num) => {
  return -Math.abs(num);
};