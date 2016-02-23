function * myPromise() {
	var a = yield Promise.resolve('a');
	console.log('a:', a);
	var b = yield Promise.resolve('b');
	console.log('b:', b);
  return new Promise(function(resolve, reject) {
  	setTimeout(function() {
  		resolve(true);
  	}, 2000);
  });
}
var gen = myPromise();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());