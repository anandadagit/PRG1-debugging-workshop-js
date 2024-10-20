function findCentury(year) {
  const century = Math.floor((year - 1) / 100) + 1;  
  return century + getOrdinalSuffix(century);
}

function getOrdinalSuffix(n) {
  const lastTwoDigits = n % 100; // Get the last two digits to handle numbers like 11, 12, 13, etc.
  
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return "th";
  }
  const lastDigit = n % 10;
  if (lastDigit === 1) {
    return "st";
  } else if (lastDigit === 2) {
    return "nd";
  } else if (lastDigit === 3) {
    return "rd";
  } else {
    return "th";
  }
}

module.exports = { findCentury, getOrdinalSuffix };

// Hint: Start by calling findCentury with an input of 1066. What should you expect to see?
findCentury(101); // Should return "2nd"
findCentury(300); // Should return "3rd"
findCentury(1066); // Should return "11th"
findCentury(1776); // Should return "18th"
findCentury(2023); // Should return "21st"