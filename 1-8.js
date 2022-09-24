var a = 10;
var b = a;
var obj1 = { c: 10, d: 'ddd' };
var obj2 = obj1;

b = 15;//할당 바꿈
obj2.c = 20;//할당 바꿈(property를 변경할 경우 가변)
