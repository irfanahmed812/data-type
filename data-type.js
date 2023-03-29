// let a = 24; // Number type data
// let b = 'Hi everyone, how are you?'; // String type data
// console.log(typeof b);

/* Premitive Data */
// 1. Number
// 2. String
// 3. Boolean
// 4. undefined
// 5. null
// 6. Symbol

/* //Example */
// let a = 'hello';
// let b = a;
// a = 'gelo';
// a = 'dilo';
// console.log(a, b);

/* Non Premitive Data */
// 1. Object

/* //Example */
// const x = { job: 'web-developer' };
// const y = x;
// y.job = 'full-stack developer';
// console.log(x, y);

/* True or False */
// let x = 1;
// console.log('value of x', x);
// if (x) {
//     console.log('this variable is true');
// }
// else {
//     console.log('this varibale is false');
// }

/* Undifiene */
// let one;
// console.log(one);

// function second(y) {
//     console.log(x);
//     const sum = x + y;
//     return sum;
// }

// const result = second(10, 90);
// console.log(result);

// var wish = undefined;
// const ourClass = { name: 'Alison', profession: null };
// console.log(ourClass.profession);

/* Comperison */
// const frist = '3';
// const second = 3;
// if (frist == second) {
//     console.log('condition is true');
// }
// else {
//     console.log('condition is false');
// }

// const a = { name: 'Alison' };
// const b = { name: 'Alison' };

// if (a === b) {
//     console.log('both are same');
// }
// else {
//     console.log('both are not same');
// }

// const number = 100; // Global Scope

function add(first, second) {
    const add = first + second;
    console.log(first); // Block Scope & Function Scope
    if (add > 10) {
        const mode = 'happy';
    }
    console.log(mode);
    return add
}

const sum = add(35, 15);
console.log(sum);