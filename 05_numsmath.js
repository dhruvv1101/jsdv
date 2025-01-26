// Math.abs(-Infinity); // Infinity
// Math.abs(-1); // 1
// Math.abs(-0); // 0
// Math.abs(null); // 0
// Math.abs(""); // 0
// Math.abs([]); // 0
// Math.abs([2]); // 2
// Math.abs([1, 2]); // NaN
// Math.abs({}); // NaN
// Math.abs("string"); // NaN
// Math.abs(); // NaN
// // Round
// round10(55.55, -1); // 55.6
// round10(55.549, -1); // 55.5
// round10(55, 1); // 60
// round10(54.9, 1); // 50
// round10(-55.55, -1); // -55.5
// round10(-55.551, -1); // -55.6
// round10(-55, 1); // -50
// round10(-55.1, 1); // -60
// // Floor
// floor10(55.59, -1); // 55.5
// floor10(59, 1); // 50
// floor10(-55.51, -1); // -55.6
// floor10(-51, 1); // -60
// // Ceil
// ceil10(55.51, -1); // 55.6
// ceil10(51, 1); // 60
// ceil10(-55.59, -1); // -55.5
// ceil10(-59, 1); // -50
// Math.hypot(3, 4, "foo"); // NaN, since +'foo' => NaN
// Math.hypot(3, 4, "5"); // 7.0710678118654755, +'5' => 5
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
console.log(getRandomInt(90));
// Expected output: 0, 1 or 2

console.log(getRandomInt(1));
// Expected output: 0

console.log(Math.random());
// Expected output: a number 
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }