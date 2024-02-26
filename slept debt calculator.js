/*The program will determine the actual and ideal hours of sleep for each night of the last week.
Finally, it will calculate, in hours, how far you are from your weekly sleep goal.*/
const getSleepHours=(day)=>
{
    //The function should accept a day as an argument and return the number of hours you slept that night.
  switch(day){     
    case 'monday':
        return 8;
        break;
        case 'tuesday':
            return 5;
            break;
            case 'wednesday':
                return 4;
                break;
                case 'thursday':
                    return 9;
                    break;
                    case'friday':
                return 4;
                break;
                case 'saturday':
                    return 5;
                    break ;
                    case 'sunday':
                        return  6;
                        break;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                }  
}
//Test the function by calling it multiple times and printing the results to the console.
console.log(getSleepHours('tuesday'))

/* Now that you’ve written a function to get the sleep hours for each night, we need to do three things:
Get the total sleep hours that you slept
Get the ideal sleep hours that you prefer
Calculate the sleep debt, if any.*/

  const getActualSleepHours = () => {
   // return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + 
    //getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
    return 6+5+6+9+5+9+2 ;
    
  };
  
// To get the ideal sleep hours that you prefer, create a function named getIdealSleepHours with no parameters.
const getIdealSleepHours=()=>{
    // declare a variable named idealHours and set its value to your ideal hours per night.
    const idealHours=5;
    //You’ll want to multiply by 7 to get the total hours you prefer per week.
    return idealHours*7;
}
// calling getidealsleephours function 
getIdealSleepHours();
console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week
console.log(getIdealSleepHours()); // if idealHours is 8, should print 56
//Create a function named calculateSleepDebt with no parameters.
const calculateSleepDebt=()=>{
    //create a variable named actualSleepHours set equal to the getActualSleepHours() function call.
    const actualSleepHours=getActualSleepHours();
    // create another variable named idealSleepHours, set equal to the getIdealSleepHours() function call.
    const idealSleepHours=getIdealSleepHours();
    // Now that you have actualSleepHours and idealSleepHours, you can write a few if/else statements to output the result to the console.
    if (actualSleepHours === idealSleepHours) {
        console.log('you slept  the perfect amount of hours.');
      } else if (actualSleepHours > idealSleepHours) {
        console.log('you slept more hours than needed');
      } else {
        console.log('you  should get some rest');
      }

//To make this calculator more helpful, add the hours the user is over or under their ideal sleep in each log statement in calculateSleepDebt().
if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
}
//calling the calculateSleepDebt() function.
calculateSleepDebt();