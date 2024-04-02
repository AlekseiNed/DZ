 //zadanie 1//
const Str1='abc';
const Str2='efg';
function sumStr(val1, val2){return val1+val2};
const Str3=sumStr(Str1, Str2);
console.log(Str3)

 //zadanie 2//
let massiveStr=['abc','def','ghj'];
function sumStr1(){return massiveStr.join('')}
console.log(sumStr1())

//zadanie 3//
const startStr = '012345';
function zerkaloStr(){return startStr.split('').reverse().join('')};
console.log(zerkaloStr());

//zadanie 4//
const Str4='asdf';
function firstSignUp(){ return Str4[0].toUpperCase()+Str4.slice(1)};
console.log(firstSignUp())

//zadanie 5//
const num1=1;
const num2=10;
function minMaxRandom(){minNum=Math.min(num1,num2);
                        maxNum=Math.max(num1,num2);
                       return Math.random()*(maxNum-minNum)};
console.log(minMaxRandom())

