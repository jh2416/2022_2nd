var n = null;
console.log(typeof n); // null도 object ; typeof의 결과가 object면 null인 경우도 체크하자!

console.log(n == undefined); // true 덜 엄격
console.log(n == null); // true

console.log(n === undefined); // false 완전 똑같을때
console.log(n === null); // true 
