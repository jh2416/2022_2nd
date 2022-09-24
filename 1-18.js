var copyObjectViaJSON = function(target) {
  return JSON.parse(JSON.stringify(target));//JSON.stringify : obj target이 str형으로 바꿈  JSON.parse : str형 obj를 일반 obj로 바꿈 ; 순수한 데이터만 복사됨
};
var obj = {
  a: 1,
  b: {
    c: null,
    d: [1, 2],
    func1: function() {//무시됨
      console.log(3);
    },
  },
  func2: function() {//무시됨
    console.log(4);
  },
};
var obj2 = copyObjectViaJSON(obj);

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj); // { a: 1. b: { c: null, d: [1, 3], func1: f() }, func2: f() }
console.log(obj2); // { a: 3. b: { c: 4,    d: [1, 2] } }
