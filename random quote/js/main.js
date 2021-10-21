const arrayofQuotes = [{
        "author": "Earl Nightingale",
        "quote": "We become what we think about"
    },
    {
        "author": "Rob Siltanen",
        "quote": "People who are crazy enough to think they can change the world, are the ones who do"
    }, {
        "author": "Brian Tracy",
        "quote": "Optimism is the one quality more associated with success and happiness than any other"
    }, {
        "author": "Dalai Lama",
        "quote": "Happiness is not something readymade. It comes from your own actions."
    }, {
        "author": "Walt Disney",
        "quote": "All our dreams can come true if we have the courage to pursue them."
    }, {
        "author": "Winston Churchill",
        "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts"
    }, {
        "author": "Theodore Roosevelt",
        "quote": "Believe you can and you’re halfway there."
    }, {
        "author": "Jimmy Dean",
        "quote": "I can’t change the direction of the wind, but I can adjust my sails to always reach my destination."
    }, {
        "author": "C.S. Lewis",
        "quote": "You are never too old to set another goal or to dream a new dream."
    }, {
        "author": "George Addair",
        "quote": "Everything you’ve ever wanted is on the other side of fear"
    }, {
        "author": "Mahatma Ghandi",
        "quote": "Be the change that you wish to see in the world"
    }, {
        "author": "Martin Luther King Jr.",
        "quote": "If I cannot do great things, I can do small things in a great way."
    }, {
        "author": "Franklin D. Roosevelt",
        "quote": "The only limit to our realization of tomorrow will be our doubts of today"
    }, {
        "author": "Jack Canfield",
        "quote": "For every reason it’s not possible, there are hundreds of people who have faced the same circumstances and succeeded"
    }
];

function randomSelector(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
};

function generateQuote() {
    let randomNumber = randomSelector(arrayofQuotes.length);
    document.getElementById('quoteOutput').innerHTML = '" ' + arrayofQuotes[randomNumber].quote + ' "';
    document.getElementById('authorOutput').innerHTML = '-' + arrayofQuotes[randomNumber].author;
    document.getElementById('quote').style.display = 'block';
};