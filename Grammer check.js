let par1 = 'Last weekend, I took literally the most beautifull bike ride of my life.'
let par2='The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey.'
let par3='It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day.' 
let par4='I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, '
let par5='because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse '
let par6='I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long!'
let par7='I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, '
let par8='an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the'
let par9=' end of the route you literally cross back into New York! At this point, you are very close to the end.';
let story=par1.concat(par2,par3,par4,par5,par6,par7,par8,par9)
let storyWords=story.split(' ');

let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';

let badWord = 'freaking';
//console.log(storyWords)
let count=0;
storyWords.forEach((word)=>{ count++;
})
//console.log(count)
//console.log(storyWords)
/*filtering words*/
storyWords.filter((word)=>{ return count})
    // filter out literally word
storyWords=storyWords.filter((word)=>{return word!==unnecessaryWord})
//replacing word
let  spell_check=storyWords.map((word)=> {
   (word===misspelledWord)? `correct spelling of the ${word}` :` ${word}`})
//finding index of badword
let badWordIndex=storyWords.findIndex((word)=>word===badWord)

//we have the index of the bad word, we can easily replace it with something more appropriate
storyWords[badWordIndex]='really';
//console.log(storyWords)
// We can make sure every word in the story is 10 characters or less 
let lengthCheck=storyWords.every((word)=>{return word.length<=10})
//console.log(lengthCheck)
//removing words that has length greaterthan 10
storyWords=storyWords.filter((word)=>{return word.length<10})
//console.log(storyWords)

//Some additional improvements could be:
///removing word very
storyWords=storyWords.filter((word)=>word!=='very')
//Replacing “GW” with “George Washington”.
let gwindex=storyWords.findIndex((word)=>word==='GW')
storyWords[gwindex]='George Washington';
//Changing the imperial units of measurement (feet and miles) to metric units (meters and kilometers).
/*To convert imperial units (feet and miles) to metric units (meters and kilometers), you can use the following conversion factors:

1 mile = 1.60934 kilometers
1 foot = 0.3048 meters*/
let mileindex=storyWords.findIndex((word)=>word==='mile')
storyWords[mileindex-1]*=1.60934;
let footindex=storyWords.findIndex((word)=>word==='foot')
storyWords[footindex-1]*=0.3048;
console.log(storyWords.join(' '))