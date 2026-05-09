const quoteBtn = document.getElementById("quoteBtn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const copyBtn = document.getElementById("copyBtn");
const darkBtn = document.getElementById("darkBtn");
const startBtn = document.getElementById("startBtn");

/* FETCH API */

async function getQuote(){

  try{

    const response = await fetch(
      "https://dummyjson.com/quotes/random"
    );

    const data = await response.json();

    quote.innerText = data.quote;
    author.innerText = "- " + data.author;

  }catch(error){

    quote.innerText =
      "Failed to fetch quote. Please try again.";

    author.innerText = "";

  }

}

/* GENERATE BUTTON */

quoteBtn.addEventListener("click", getQuote);

/* COPY BUTTON */

copyBtn.addEventListener("click", ()=>{

  navigator.clipboard.writeText(
    quote.innerText
  );

  alert("Quote copied successfully!");

});

/* DARK MODE */

darkBtn.addEventListener("click", ()=>{

  document.body.classList.toggle("dark");

});

/* SMOOTH SCROLL */

startBtn.addEventListener("click", ()=>{

  document
    .getElementById("feature")
    .scrollIntoView({
      behavior:"smooth"
    });

});

/* AUTO LOAD QUOTE */

getQuote();