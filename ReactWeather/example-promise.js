// Callback example

function getTempCallback(location, callback) {
  callback(undefined, 78);
  callback("City not found");
}


getTempCallback("london", function(err,temp) {
  if(err) {
    console.log("error", err);
  } else {
    console.log("Success", temp);
  }
});

// Promise example

function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(79);
      reject("City not found")
    }, 1000);
  });
}

getTempPromise("london").then(function(temp) {
  console.log("promise success", temp);
},function(err) {
  console.log("promise error", err);
});
