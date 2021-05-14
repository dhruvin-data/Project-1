/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes=[];
const q1={
  quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
  source:"Nelson Mandela"
}
const q2={
  quote:"Design is not just what it looks like and feels like. Design is how it works.",
  source:"Steve Jobs",
  year:2007
}
const q3={
  quote:"You must stay drunk on writing so reality cannot destroy you.",
  source:"Ray Bradbury",
  citation:"Zen in the Art of Writing"
}
const q4={
  quote:"No battle plan can survive the first round of bullet",
  source:"John Lennon",
  year:1980,
  citation:"Beautiful Boy"
}
const q5={
  quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  source:"James Cameron"
}
const q6={
  quote:"Never trust a computer you can’t throw out a window.",
  source:"Steve Wozniak"
}
const q7={
  quote:"It has become appallingly obvious that our technology has exceeded our humanity.",
  source:"Albert Einstein"
}

//adding the quotes of the array

quotes.push(q1);
quotes.push(q2);
quotes.push(q3);
quotes.push(q4);
quotes.push(q5);
quotes.push(q6);
quotes.push(q7);



/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  const randomNum = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomNum];
  return randomQuote;
}





/***
 * `printQuote` function
***/

function printQuote() {

  // 1. Create a variable that calls the getRandomQuote() // function
  let getQuote = getRandomQuote();
  
   // 2. Create a variable that initiates your HTML string with
  // the first two <p></p> elements, their classNames,
  // and the quote and source properties, but leave off
  // the second closing `</p>` tag for now
  let PtoHTML1 = "<p class='quote'>" + getQuote.quote +"</p>"+ "<p class='source'>" + getQuote.source;


  // 3. Use an if statement to check if the citation property // exists, and if it does, concatenate a <span></span>
  // element, appropriate className, and citation property // to the HTML string
  if('citation'in getQuote){
    PtoHTML1 += "<span class='citation'>" + getQuote.citation+ "</span>";
  }

  // 4. Use an if statement to check of the year property exists, // and if it does, concatenate a <span></span> element,
  // appropriate className, and year property to the HTML //string
  if('year'in getQuote){
    PtoHTML1 += "<span class='year'>" + getQuote.year+ "</span>";
  }

  // 5. After the two if statements, concatenate the closing </p> // tag to the HTML string
  PtoHTML1+= "</p>";
  // 6. set the innerHTML of the quote-box div to equal the // complete HTML string}
  document.getElementById('quote-box').innerHTML = PtoHTML1;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);