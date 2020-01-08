// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) => YES 
// tickets([25, 100]) => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

function tickets(peopleInLine){
    let change = {
      twentyFive: 0,
      fifty: 0,
      hundred: 0
    }
    
    // returns an array of booleans
    // must all be true to return "YES"
    const results = peopleInLine.map(bill => {
      if (bill === 25) {
        change.twentyFive += 1
        return true
      } else if (bill === 50) {
        if (change.twentyFive > 0) {
          change.twentyFive -= 1
          change.fifty += 1
          return true
        }
        return false
      } else if (bill === 100) {
        if (change.twentyFive > 2 && change.fifty === 0) {
          change.twentyFive -= 3
          change.hundred += 1
          return true
        } else if (change.twentyFive >= 1 && change.fifty > 0) {
          change.twentyFive -= 1
          change.fifty -= 1
          change.hundred += 1
          return true
        }
        return false
      }
    })
    
    if (results.includes(false)) {
      return 'NO'
    }
    
    return 'YES'
}