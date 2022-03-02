// - Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value. Using `Promise.all` log the value of each promise that it resolved with.
let promiseOne  = Promise.resolve('One');
let pormiseTwo = Promise.resolve('Two');
let promiseThree = Promise.resolve('Three');
let promiseFour  = Promise.resolve('Four');

let all = Promise.all([promiseOne,pormiseTwo , promiseThree, promiseFour])
.then((data)=>{
    data.forEach(item=>{
        setTimeout(() => {
            console.log(item);
        }, 1000);
    })
})
console.log(all);

// - Use `Promise.race` to see which API resolves faster from the given list of URLs. Log the object you get from the promise that is resolved faster.
  let firstApi = fetch('https://random.dog/woof.json')
  .then((data)=> data.json())
  .then((data)=> data);

let secondApi = fetch('https://aws.random.cat/meow').then((data)=> data.json())
.then((data)=> data);
console.log(secondApi);
console.log(Promise.race([firstApi , secondApi]));
//Dog api reoslve faster more  than the cat Api 

// Question three 

const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);
Promise.allSettled([one , two  , three ]);

// Yes all setteled Promise is working fine even with the rejected promise also

Promise.all([one , two  , three ]);
// An Error got occured  because we have passed a rejected promise in the all method 
// and all method is not working with rejected one 



// Question Four 
Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => resolve('Arya'), 1000);
    }),
    'Sam',
    { name: 'John' },
  ]).then(console.log);

  ['Arya', 'Sam',{ name: 'John' }]
//   this will take a total of 1s time to resolve  this one 
