const x = {
1: '1' + 2,// = 12
2: "" ** 4,// = null
3: typeof '1' + 2,// = string2
4: 6 % 4,// = 2
5: '3 + 4 is ' + 3 + 4,// = 3 + 4 is 34
// how could you make this produce the correct output? Parenthesis the addition
6: 0 < 0,// = false
7: 'false' == false,// = false
8: true == 'true',// = false
9: 5 >= -5,// = true
10:!false || false,// = true
11:true || "42",// = true
12:!true && !false,// = false
13: 6 % 5,// = 1
14: 5 < 4 && 1 === 1,// false
15:typeof 'codeup' === 'string',// = true
16:'codeup' === 'codeup' && 'codeup' === 'Codeup',// = false
17:4 >= 0 && 1 !== '1',// = true
18:6 % 3 === 0,// = 0
19:5 % 2 !== 0,// = true
}
console.log(x)