var copyObject = function(target) {//"얕은 복사"
  var result = {};//빈거 먼저 만들기
  for (var prop in target) {       //target에서 복사
    result[prop] = target[prop];
  }
  return result;
};
