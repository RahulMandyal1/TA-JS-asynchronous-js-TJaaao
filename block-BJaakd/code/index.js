// first program 
let promise = Promise.resolve(
    setTimeout(() => {
      return "Promise Resolved!";
    })
  ).then((data) => {
    console.log(data);
  });
//   2 : 
let promise = Promise.reject("Rejected Promise!").catch((data) => {
    console.log(data);
  });

// 3rd promise 
  let promise = Promise.reject("Rejected Promise!")
  .catch((data) => {
    console.log(data);
  })
  .finally(() => {
    console.log("Promise Settled !");
  });

// 4th program :
  
//output
// logs A
// logs D

// then call stack gets empty and then it will move to the Microtask Queue
// logs C
// after  the micro taks gets empty  then it will move forward to the call queue
// logs B


// 5th promise 

function wait(time){
    return Promise.resolve(
        setTimeout(()=>{
            console.log('Promise Completed Sucessfully');
        } , time)
    )
}

// 6th program 

let newPromise = Promise.resolve(21);
newPromise.then((data)=>{
    return data+10;
}).then((data)=>{
    return data + 100;
}).then(data=>{
     if(data>100){
         throw new Error('Value is greater then 100');
     }
}).catch(data=>{
    console.error(data);
})

// 7th program 
let promise2 = Promise.resolve(['A']).then((data)=>{
    return data.concat('B');
  })
  .then(data=>{
      data.reduce((acc,cv ,index)=>{
          acc[index] = cv;
          return acc;
      },{})
  })
  .then((data)=>{
      console.log(data);
  })

//   8th program 
let first = Promise.resolve(1).then(data=>{
    console.log(data);
    return 2;
}).then(data=>{
    console.log(data);
    return 3;
}).then(data=>{
    console.log(data);
    return 4;
})

// 9th program 
let first = Promise.resolve(1).then(data=>{
    console.log(data);
    return 2;
}).then(data=>{
    console.log(data);
    return 3;
}).then(data=>{
    console.log(data);
    return 4;
})
// 10th Answer 
// <!-- both seems to be same because we both we are doing the same operation  -->

// 11th program 
let lastPromise  = Promise.resolve('John').then(()=>{
    return Promise.resolve('Arya').then(data=>{
        return Promise.resolve(
            setTimeout(()=>{
                return 'Bran';
            },2000)
        ).then(data=>{
            return data;
        })
    })
})