// let showMultiplicationTable = (number, multiple) => (number * multiple++);
//
// for (showMultiplicationTable();  multiple <= 10); {
//
//     console.log(showMultiplicationTable);
// }


//
// for (let i =  0;   i < 10; i++) {
//     console.log(i);
// }



for (let i =  0;   i < 10; i++) {
    console.log(i);
}

/* program to generate a multiplication table
upto a range */

// take number input from the user
const number = parseInt(prompt('Enter an integer: '));

const range = 10;

//creating a multiplication table
for(let i = 1; i <= range; i++) {
    const result = i * number;
    alert(`${number} * ${i} = ${result}`);
}

/* if(i <= 10) { i++ }
console.log()
 */