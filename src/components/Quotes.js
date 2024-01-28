import React, {useState, useEffect} from "react";

import twitterIcon from "../img/twitter.svg"
import tumblrIcon from "../img/tumblr.svg"

const Quotes = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        getQuote();
    }, []);


    const getQuote = () => {
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let dataQuotes = data.quotes;
                let randowNum = Math.floor(Math.random() * dataQuotes.length);
                let randowQuote = dataQuotes[randowNum];
                setQuote(randowQuote.quote);
                setAuthor(randowQuote.author);
                changeColor();
            })
    }

    const changeColor = () => {
        let arrayColor = [
            '#16a085',
            '#27ae60',
            '#2c3e50',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#342224',
            '#472E32',
            '#BDBB99',
            '#77B1A9',
            '#73A857'
        ];;
        let randowNum = Math.floor(Math.random() * arrayColor.length);
        document.documentElement.style.setProperty("--main-color", arrayColor[randowNum]);
    }

    const handleClick = () => {
        getQuote();
    }


    return (
        <div id="quote-box">
            <div id="text">
                <p>{quote}</p>
            </div>
            <div id="author">
                <p>{author}</p>
            </div>

            <div id="buttons">
                <div className="social-media">
                    <a href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote">
                        <span><img src={twitterIcon} alt="" /></span>
                    </a>
                    <a href="https://www.tumblr.com/" target="_blank" id="tumblr-quote">
                        <span><img src={tumblrIcon} alt="" /></span>
                    </a>
                </div>
                <button onClick={handleClick} id="new-quote">New Quote</button>
            </div>
        </div>
    )
}

export default Quotes;