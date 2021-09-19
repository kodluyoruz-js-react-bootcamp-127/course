// callback functions
// States
// pending -> aksiyon başladı
// fulfilled -> başarılı
// reject -> başarısız

const promise = new Promise((success, error) => {
  let x = 0;
  // fetch('url') ->
  x = 10;

  if (x == 10) {
    setTimeout(() => {
      success(x);
    }, 3000);
  } else error("Error, cannot find data");
});

// Multi thread? x -> Single thread

promise
  .then((x) => {
    console.log(x);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Fetch end");
  });

// Timer
// setTimeout(() => {
//   console.log("Hello");
// }, 1000);
// console.log("Hello 2");

// const myInterval = setInterval(() => {
//   console.log("Interval!!");
// }, 1000);

// async & await ES2017
// // async function timeout() {
// //   return new Promise((resolve) =>
// //     setTimeout(() => {
// //       resolve();
// //     }, 1000)
// //   );
// // }

// // async function getUsers() {
// //   await timeout();
// //   let users = [];
// //   return users;
// // }

// // console.log("1");
// // console.log(getUsers());
// // console.log("2");
