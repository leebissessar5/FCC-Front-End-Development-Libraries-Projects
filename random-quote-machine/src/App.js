import React, { useEffect, useState } from 'react'

const baseUrl = 'https://api.quotable.io/random'

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
        <div id="quote-box">
            {quote && (
                <>
                    <div id="text">{quote.content}</div>
                    <div id="author">- {quote.author}</div>
                    <button id="new-quote" onClick={handleNewQuote}>
                        New Quote
                    </button>
                    <a
                        id="tweet-quote"
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                            `${quote.content} - ${quote.author}`
                        )}`}
                    >
                        Tweet Quote
                    </a>
                </>
            )}
        </div>
    )
}

export default App
