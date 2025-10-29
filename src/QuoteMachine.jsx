import { FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";
import "./index.css";
import AllQuotes from "./AllQuotes";
import Icons from "./Icons";

const QuoteMachine = () => {
  const [quote, setQuote] = useState({
    quote: "I attributed my success to this: I never gave or took any excuse.",
    author: "Washiy",
  });

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * AllQuotes.length);
    setQuote(AllQuotes[randomIndex]);

    let numbers = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += numbers[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
    document.getElementById("new-quote").style.backgroundColor = color;
    document.getElementById("text").style.color = color;
    (document.querySelectorAll(".icon")).forEach(icon => {
      icon.style.backgroundColor = color;
    });
  };

  return (
    <div className="quote-container">
      <div className="quote-box" id="quote-box">
        <h2 id="text"><FaQuoteLeft style={{fontSize: '1em'}} />{quote.quote}</h2>
        <p id="author">~ {quote.author}</p>
        <div className="controls">
          <div className="icons">
           <Icons quote={quote} />
        </div>
         <button id="new-quote" onClick={getRandomQuote}>New Quote</button>
       </div>
     </div>
    </div>
  );
};

export default QuoteMachine;