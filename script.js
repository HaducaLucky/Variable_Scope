//! variable scope = where a varible is recognized
//!                  and accessible (local vs global)

//* LOCAL

// function function1(){
//     let x = 2;
//     console.log(x);
// }

// function function2(){
//     let x = 4;
//     console.log(x);
// }

// function2();

//* GLOBAL
//TODO: not recommended for large program

let x = 5

function function1(){
    // let x = 1;
    console.log(x);
}

function function2(){
    // let x = 2;
    console.log(x);
}

function1();