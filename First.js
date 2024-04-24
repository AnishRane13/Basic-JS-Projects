const promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promise1.then(function () {
  console.log("promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise2 done");
});

const promise3 = new Promise(function (resolve, rej) {
  setTimeout(function () {
    resolve({ username: "Anish", email: "anish@gmail.com" });
  }, 1000);
});

promise3.then(function (user) {
  console.log(user);
});

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "an", password: "123" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

promise4
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Finally");
  });

const promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JSSS", password: "123" });
    } else {
      reject("JS went wrong");
    }
  }, 1000);
});

async function consumePromis() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromis();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//        const data = await response.json()
//        console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    return response.json()
}).catch((error) =>{
    console.log(error)
})

.then((data) =>{
    console.log(data)
}).catch((error) =>{
    console.log(error)
})