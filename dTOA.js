let a = 1;// = 1
let b = a++;// = 1
let c = ++a;// = 3
// what is the value of a, b, and c?
let d = "hello"; b, and c?// =
let e = false;// = false

d++;// = nan
e++;// = 1
let perplexed; // perplexed is undefined (no value is assigned)
// =
perplexed + 2;exed is undefined (no value is assigned)
let price = 2.7;// = price
price.toFixed(2);
let price = "2.7";
price.toFixed(2);// = err
isNaN(0)// false

isNaN(1)// false

isNaN("")// = true

isNaN("string")// = true

isNaN("0")// = true

isNaN("1")// = true

isNaN("3.145")// = true

isNaN(Number.MAX_VALUE)// = false
),
isNaN(Infinity)// - false

isNaN("true")// = true

isNaN(true)// = true

isNaN("false")// = true

isNaN(false)// = true

// to illustrate why the isNaN() function is needed:
NaN == NaNsNaN() function is needed:
!true // = false

!false// = true

!!true// = true

!!false// false

!!0// = false

!!-0// = true

!!1// = true

!!-1// = true

!!0.1// = true

!!"hello"// = true

!!""// false

!!''// false

!!"false"// true

!!"0"// true

//EXERCISE 3

let sample = 'Hello Codeup Class'
undefined
let sam = sample.replace('Class', 'Students')

sam.indexOf('C'
VM803:1 Uncaught SyntaxError: missing ) after argument list
sam.indexOf('C')
6
sam.indexOf('c')
-1



let LM = 3; let BB = 5; let H = 1; let T = LM + BB + H; let totalCost = 3 * T;
undefined
totalCost
27
let G = 400; let A = 380; let F = 350; let hoursG = 6 * G; let hoursA = 4 * A; let hoursF = 10 * F;

console.log(hoursG, hoursA, hoursF)
//VM1461:1 2400 1520 3500


//EXERCISE 4

let username = 'codeup';
let password = 'notastrongpassword';

let check5char = password.length>4;
let notusernm = password.includes(username);
let max20 = password.length<21;
let spacepass = password.trim;
let spaceuser = username.trim