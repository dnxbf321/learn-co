var co = require('co');

co(function*() {
  var result = yield myPromise();
  return result;
}).then(function(value) {
  console.log(value);
}, function(err) {
  console.error(err.stack);
});

function * myPromise() {
	var a = yield Promise.resolve('a');
  console.log('a:', a);
	var b = yield Promise.resolve('b');
  console.log('b:', b);
  return new Promise(function(resolve, reject) {
  	setTimeout(function() {
  		resolve(true);
  	}, 1000);
  });
}

function* depYield() {
  var i = 0;
  var a = yield ++i;
  var a2 = yield ++i;
  return {
    1: a,
    2: a2
  };
}

co(function*() {
  var ret = yield depYield();
  return ret;
}).then(function(ret) {
  console.log(ret);
});