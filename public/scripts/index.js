//function to store quote from the rest API
const quotesHandler = () => {
  fetch("https://type.fit/api/quotes")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const quoteTextHolder = document.getElementById("quote-text"); ///getting the p tag to place the quote text
      console.log("quoteTextHolder", quoteTextHolder);
      let quoteIndex = Math.round(Math.random() * 1643); //getting the index of random quotes
      quoteTextHolder.innerHTML = data[quoteIndex].text;
      const quoteAuthorHolder = document.getElementById("author-name");
      console.log("quotesHandler -> quoteAuthorHolder", quoteAuthorHolder);
      quoteAuthorHolder.innerHTML = "- \t" + data[quoteIndex].author;
    })
    .catch((err) => {
      console.log("getQuotes -> err", err);
    });
};
quotesHandler(); //call to the getQuotes method
