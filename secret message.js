//declare variable secretMessage which is array contains secretmessage 
let secretMeesage =['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript']
console.log(secretMeesage.length)
// an array method to remove the last string of the array secretMessage.
secretMeesage.pop();
//logging in secretmeesage to checkout if last element was removed
console.log(secretMeesage.length);
//an array method to add the words to and Program as separate strings to the end of the secretMessage array.
secretMeesage.push('to','program');
//display secretmeesage after adding element to check if there is it in array
//console.log(secretMeesage)
//Change the word easily to the word right by accessing the index and replacing it
secretMeesage[7]='right'
//console.log(secretMeesage)
//an array method to remove the first string of the array.
secretMeesage.shift()
//console.log(secretMeesage)
//an array method to add the string 'Programming' to the beginning of the array.
secretMeesage.unshift('Programming')
///console.log(secretMeesage)
//an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,
secretMeesage.splice(6,5,'Know,')
//console.log(secretMeesage)
//On one line, use console.log() and .join() to print the secret message as a sentence.
console.log(secretMeesage.join(' '))