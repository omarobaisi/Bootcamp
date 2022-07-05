let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

// Bought a tesla and a us citizen
if(boughtTesla && isUSCitizen) {
    // bought four or more years ago
    if(currentYear - yearOfTeslaPurchase >= 4) {
        console.log('Would you like an upgrade?')
    // Less than 4 years
    } else {
        console.log('Are you satisfied with your car?')
    } 
// Bought a tesla but not a us citizen
} else if(boughtTesla && !isUSCitizen) {
    console.log('Would you like to move to the US?')
// The customer has not bought a Tesla
} else if(!boughtTesla) {
    console.log('Are you intrested in buying a tesla?')
}