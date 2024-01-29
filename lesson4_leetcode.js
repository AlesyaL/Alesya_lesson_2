const romanToInt = function(s) {
    const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }; 

  let result = 0;
  let prevValue = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const currentChar = s[i];
    const currentValue = romanNumerals[currentChar];
    if (currentValue < prevValue) {
        result -= currentValue;
    } else {
        result += currentValue;
    }
    prevValue = currentValue;
}
  return result;
};
const romanNumber = "XXI";
const decimalNumber = romanToInt(romanNumber);
console.log(decimalNumber);