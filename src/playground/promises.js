const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is my resolved data!!!');
    // resolve('THis is my other resolve date!!!');
    reject('This is an error!!!');
  }, 5000);

});

console.log('before');

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('After');
