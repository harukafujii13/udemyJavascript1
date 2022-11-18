// function hello(callback) {
//     console.log(callback);
//     console.log('hello ' + callback());
// }

// function getName() {
//     return 'Haruka Fujii';
// }
// function getFirstName(){
//     return 'Haruka'
// }

// hello(getName);

// function hello(callback) {
//     console.log(callback);
//     console.log("hello " + callbuck());
// }

// function getName() {
//     return "Code Mafia";
// }

// function getFirstName() {
//     return "Code";
// }


// hello(function(){
//     return "Code";
// });

// function doSomething(a, b, callback) {
//     const result = callback(a,b);
//     console.log(result);
// }

// function multiply(a,b) {
//     return a * b;

// }

// function plus(a, b){
//     return a + b;
// }

// doSomething(2, 2, multiply);
// doSomething(2, 3, plus);

// function hello(name) {
//     console.log("hello" + name);
// }

// function getName() {
//     return "Code Mafia";
// }

// hello(getName);

function doSomething(a, b, callback){
    const result = callback(a,b);
    console.log(result);
}

function multiply(a, b) {
    return a * b;
}

function plus(a, b) {
    return a + b;
}

doSomething(2, 2, multiply);
doSomething(2, 3, plus);