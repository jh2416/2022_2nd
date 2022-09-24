var user = {
  name: 'Jaenam',//Jung으로 바뀜
  gender: 'male',
};

var changeName = function(user, newName) {
  var newUser = user;//위에 Jung가리킴
  newUser.name = newName;
  return newUser;
};

var user2 = changeName(user, 'Jung');//첫줄의 user를 Jung으로 바꿈

if (user !== user2) {
  console.log('유저 정보가 변경되었습니다.');
}
console.log(user.name, user2.name); // Jung Jung
console.log(user === user2); // true
