// function hello(name = 'Tom') {
//     console.log('hello' + name);
// }

// const hello = (name, age) => 40;

// const arry = [1,2,3,4,5,6];

// arry.forEach(value => console.log(value));



// console.log(hello());

// hello('Code Mafia', 10);
// hello('Code Mafia2', 20);

// function hello(name = 'Taylor') {
//     console.log('Hello!' + name);
// }

// const hello = (name, age) => 40;
// console.log(hello());


    
// hello('Haruka', 10);
// hello('Fujii', 20);

// function myAlert() {
//     console.log('Hello!');
//     console.log('Im Haruka Fujii');
// }

// myAlert();
// myAlert();
// myAlert();

//引数
// function myAlert(greeting) {
//     console.log(greeting);
//     console.log('I am Haruka Fujii');
// }
// myAlert('Good evening!!');
// myAlert('Good morning');
// myAlert('Konnichiha!!');


// function myAlert(greeting, channelName) {
//     console.log(greeting);
//     console.log('hahahaha' + channelName);
// }

// myAlert('Good morning', ' Haruka');

// function myAlert(greeting = 'Waaaa') {
//     console.log(greeting);
//     console.log('I am Haruka Fujii');
// }

// myAlert('こんちは');

//戻り値
// function myCalc(a,b) {
//     return a + b;
// }
// console.log(myCalc(1,2));


// function myCalc(a,b) {
    
//     return a + b;
//     console.log(a + b);//実行されない
// }
// console.log(myCalc(1,2));

// //無名関数 anonymous function
// const myAlert = function() {
//     console.log('Hello!');
//     console.log()
// }

// myAlert();//実行できる
// myAlert;//実行できない

// //関数宣言
// function myCalc(a,b) {
//     return a + b;
// }
// console.log(myCalc(1,2));

// //無名関数を使った書き方
// const myCalc = function(a,b) {
//     return a + b;
// }

// console.log(myCalc(1,2));

// //アロー関数
// const myAlert = () => {
//     console.log('Hello!');
//     console.log('I am Haruka');
// }

// myAlert();

// //従来の関数式
// const myAlert = function() {
//     console.log('Hello!');
//     console.log('I am Haruka');  
// }

// アロー関数のルール
// ・引数が一つだけだったら、その引数を囲むカッコを省略できる。
// （引数が２つ以上の場合はカッコが必要）
// ・関数の中身の処理が１行だけだったら、波カッコと「return」キーワードを省略できる。

//従来の無名関数（関数式）
const myAlert = function(massage) {
    console.log(massage);
}
myAlert('Hello!');

//アロー関数（省略前）
const myAlert = (massage) => {
    console.log(massage);
}
myAlert('Hello!');

//アロー関数（省略後）
const myAlert = massage => console.log(massage);
myAlert('Hello!')

//戻り値ありの場合

//従来の無名関数(関数式)
const myCalc = function(a) {
    return a * a;
}
console.log(myCalc(2));

//アロー関数（省略前）
const myCalc = (a) => {
    return a * a;
}
console.log(myCalc(2));

//アロー関数（省略後）
const myCalc = a => a * a;
console.log(myCalc(2));

