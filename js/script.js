'use strict';

// const category = "toys";

// //interpolyatsiya
// console.log(`https://some.url/${category}/5`);

// const user = "Nameuser";

// alert(`Hello ${user}`);

let person = "Mike";
let age = 31;

function myTag(strs, personExp, ageExp) {
    let str1 = strs[0];
    let str2 = strs[1];

    let ageStr;
    if (ageExp > 99) {
        ageStr = "much older";
    } else {
        ageStr = "young";
    }

    return `${str1}${personExp}${str2}${ageStr}`;
}

let output = myTag`That is ${ person } are ${ age }`;

console.log(output);


console.log(5%2);
console.log(4*2 == '8');
console.log(4*2 === '8');