const promise1 = new Promise((fulfill, reject) => {
    fulfill('FULFILLED!');
});
promise1.then(console.log);

const promise2 = Promise.resolve('RESOLVED');
promise2.then(console.log);

const promise3 = Promise.reject('REJECTED');
promise3.catch(console.log);

