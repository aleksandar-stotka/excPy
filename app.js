


const calcAverage = (a,b,c) => (a + b + c) /3



const scoreDolphins = calcAverage(44,23,71)
const scoreCoalas= calcAverage(65,54,49)


const checkWinner = (avgDolphins,avgKoalas) => {
  if(avgDolphins >= 2 * avgKoalas) {
    console.log(`winner is delfin with ${avgDolphins} `)
  } else {
    console.log(`winner is coalas with ${avgKoalas}`)
  }  
}
checkWinner(scoreDolphins,scoreCoalas)


/* Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.*/


const calculateTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [];

const result = []

bills.forEach(bill => {
  const tip = calculateTip(bill)
  tips.push(tip)
  result.push(bill + tip)
});

console.log(result);
console.log(tips)
///////////////////////////////////////////// Mark jhon

const mark = {
  fullName: 'Mark jhnson',
  mass: 78,
  height: 70
}

const jhon = {
  fullName: 'Mark jhnson',
  mass: 80,
  height: 88
}



 


const calculateMbi = () => {
  const markBmi = mark.mass / mark.height * mark.height *2
  
const jhonBmi = jhon.mass / jhon.height * jhon.height *2

     if(markBmi > jhonBmi) {
      console.log(`mark is bigger with ${markBmi}`)
     } else console.log(`${jhon.fullName} is bigger with ${jhonBmi} against ${markBmi}`)
  
}

 

 
calculateMbi()

////////////// for loop

const billss = [125, 555, 44];
const tipss = [];

const resultt = []
const calculateTips = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};


  
const calculateAvg = (arr) => {
  let sum = 0;
  arr.forEach(item => {
      sum += item;
  });
  return arr.length > 0 ? sum / arr.length : 0;
};


  
   /////// 
   
  
  
  (function () {
    const header = document.querySelector('h1')
    header.style.color = "red"
    
    document.querySelector("body").addEventListener('click' , function() {
      if(header.style.color === "red") {
        header.style.color = "blue"
      } else {
        header.style.color = "red"
      }
      
    })

  })();



  /////////  

    const oneWord = (str) => {
   
         return  str.replace(/ /g, ' ').toUpperCase()
        
      

    }
    
      const uperFirstWord = (str) => {
         const [first, ...others] = str.split('')
         return [first.toUpperCase(),...others].join( '')


      }

      const transformation = (str, fn) => {
        console.log(`original array ${str}`)
        console.log(`uper array ${fn(str)}`)
      }
   
       transformation('this is one word  ', oneWord)
       transformation("uppew", uperFirstWord)
       //////////////////////

       function greet(whattosay) {
        return function(name) {
          console.log(whattosay + " " + name)
        }
       }

     var sayHy = greet("heloo")
     sayHy('toni')

    


   

     
 
 



 



 







