import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const baseUrl = 'https://api.quotable.io/random'

const Footer = () => (
    <div className="footer">
        Random Quote Machine App created by Lee Bissessar
        <p>Built using React, Bootstrap, and Sass</p>
    </div>
)

const App = () => {
    const [quote, setQuote] = useState(null)

    useEffect(() => {
        fetchQuote()
    }, [])

    const fetchQuote = async () => {
        try {
            const response = await fetch(baseUrl)
            const data = await response.json()
            setQuote(data)
        } catch (error) {
            console.error('Error fetching quote:', error)
        }
    }

    const handleNewQuote = () => {
        fetchQuote()
    }

    return (
        <div className="container">
            <div
                id="quote-box"
                className="d-flex flex-column align-items-center"
            >
                {quote && (
                    <div className="quote-container">
                        <div id="text">{quote.content}</div>
                        <div id="author">- {quote.author}</div>
                        <div className="d-flex justify-content-between">
                            <button
                                id="new-quote"
                                className="btn btn-primary"
                                onClick={handleNewQuote}
                            >
                                New Quote
                            </button>
                            <a
                                id="tweet-quote"
                                className="btn btn-primary tweet-quote-container"
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                                    `${quote.content} - ${quote.author}`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Tweet Quote
                                <FontAwesomeIcon
                                    className="twitter-icon"
                                    icon={faTwitter}
                                />
                            </a>
                        </div>
                    </div>
                )}
                <Footer />
            </div>
        </div>
    )
}

export default App
