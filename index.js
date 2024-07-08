function takeShower() {
  console.log("Shower");
}

function swim() {
  console.log("Swim 10 laps");
}
function run() {
  console.log("run 5 km");
}

function chores() {
  console.log("Clean the house and do laundry");
}

function task() {
  console.log("Check emails");
}

function receivesAFunction(postWorkout) {
  run();
  postWorkout();
}

// function returnsANamedFunction(exercise) {
//   let breakfast;

//   if (exercise === run) {
//     breakfast = "energy smoothie";
//   } else if (exercise === swim) {
//     breakfast = "kale smoothie";
//   } else {
//     breakfast = "tea and biscuits";
//   }

//   receivesAFunction(exercise);
//   return function () {
//     console.log(`This ${breakfast} is delicious!!!`);
//   };
// }
// const afterExecise = returnsANamedFunction(run);

function returnsANamedFunction() {
  return function greetings() {
    console.log("Hi, this is a named function!!!");
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("This anonymous function is awesome!!!");
  };
}
