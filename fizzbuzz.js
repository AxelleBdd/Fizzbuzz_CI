const fizzbuzz = (number) => {
  if (number % 3 == 0 && number % 5 == 0){
    return "Fizzbuzz"
  } else if (number % 3 == 0) {
    return "Fizz"
  } else if (number % 5 == 0) {
    return "Buzz"
  } else {
    return number
  }
}

module.exports = { fizzbuzz }