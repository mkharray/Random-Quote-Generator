const quoteContainer = document.getElementById("quote-container");
const authorText = document.getElementById("author");
const quoteText = document.getElementById("quote");
const twitterBtn= document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

async function getQuote(){
    const apiurl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    const proxy = "https://cors-anywhere.herokuapp.com/";
try{
const response = await fetch(proxy + apiurl);
const data = await response.json();
if  (data.quoteAuthor === "")
{
authorText.innerText = "Unknown";
}
else{
    authorText.innerText = data.quoteAuthor;
}
quoteText.innerText = data.quoteText;
}catch(error){
    getQuote();
}
}

function tweetquote(){
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterurl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;

    window.open(twitterurl, '_blank');
}
function authorclick(){
    const author = authorText.innerText;
    window.open(`http://google.com/search?q=${author}`, "_blank");
}
//event listner
newQuoteBtn.addEventListener("click",getQuote);
twitterBtn.addEventListener("click", tweetquote);
authorText.addEventListener("click",authorclick);
getQuote();
