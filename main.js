x = parseFloat(prompt('Enter the weight of the pumpkin.'))

if (x < 5.5) {
  y = 1.0 * x
} else if (x < 10.75) {
  y = 0.9 * x
} else if (x < 25) {
  y = x * 0.8
} else if (x < 50) {
  y = x * 0.7
} else if (x < 100) {
  y = x * 0.6
} else {
  y = x * 0.5
}

console.log('Your pumpkin of ' + x + 'lbs costs $' + y + '.')

