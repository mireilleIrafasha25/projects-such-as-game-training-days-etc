//Create a variable named input that is equal to any phrase you’d like. This variable will contain the text you want to translate into “whale talk”.
//const input='turpentine and turtle'
//const input='Hi, Human'
const input='a whale of a deal'
//creation of an array array called vowels to store all vowels except y in lowercase
const vowels = ['a', 'o', 'i', 'e', 'u'];
//declare a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string
var resultArray=[]
//a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array.
for(let i=0;i<input.length;i++)
{
    if (input[i] === 'e') {
       // resultArray.push(input[i]);
        resultArray.push(input[i]); // Double the 'e'
    } 
     if (input[i] === 'u') {
        //resultArray.push(input[i]);
        resultArray.push(input[i]); // Double the 'u'
    }
//console.log('i is '+i)
for(let j=0;j<vowels.length;j++)
{
    //console.log('inner iterator  is '+j)
    if(input[i]===vowels[j])
    {
        resultArray.push(input[i])
        //console.log(resultArray)
        }}}
console.log(resultArray)

console.log((resultArray.join('')).toUpperCase())
