// // Callback example
//
// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback("City not found");
// }
//
//
// getTempCallback("london", function(err,temp) {
//   if(err) {
//     console.log("error", err);
//   } else {
//     console.log("Success", temp);
//   }
// });
//
// // Promise example
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject("City not found")
//     }, 1000);
//   });
// }
//
// getTempPromise("london").then(function(temp) {
//   console.log("promise success", temp);
// },function(err) {
//   console.log("promise error", err);
// });

// Challenge Area

// return a + b. If neither are an integer, return error.
function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (typeof a !== "number" || typeof b !== "number") {
        reject("You need two numbers");
      } else {
        resolve(a + b);
      }
    }, 1000);
  });
}

addPromise(2,3).then(function(sum) {
  console.log("Promise success:", sum);
}, function(err) {
  console.log("Promise error:", err);
});

addPromise(2,"x").then(function(sum) {
  console.log("Promise success:", sum);
}, function(err) {
  console.log("Promise error:", err);
});
