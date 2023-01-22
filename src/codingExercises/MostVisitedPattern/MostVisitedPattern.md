Understanding
1. Get the patterns
    - a pattern will be any 3 sequence of websites that was visited by the same person (different timestamps is part of the rule)
2. 
- Bonus: 2 patterns that are tied, get the one with the least letters used? (put chars in a set, one with smallest length)


# Algorithm

## 1 pass processing
1. Iterate over username, check the next 2 if they're the same, 
    - define the pattern and store how many instances. How?

## Multipart processing
1. Get all patterns - all websites visited 3 consecutive times by the same user, if they're existing then increment count!
    - iterate over username, if next 2 are the same, 
    - if pattern does not exist, store the website pattern comma-separated
    - if it already exists, increment count
    - keep track of count as well during iteration, a map of <count, [...pattern arrays]>
    - I have a **map** at the end of patterns and instances
2. Have a function that converts an array of 3 websites to a set of chars, another function that applies this to the list of arrays and return the min length of them
2. At the end, if mostVisitedWebsites.length > 1, call function on mostVisitedWebsites
