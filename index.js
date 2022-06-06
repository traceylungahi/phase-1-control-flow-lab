function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    return 'This one is on me!'
  }
  else if (ride > 2000 && ride <= 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else if (ride > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city) {
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  }
  else if (city === 'Pittsburgh') {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case tip = 'generous':
      return 'Thank you so much.'
      break;
    case tip = 'not as generous':
      return 'Thank you.'
      break;
    default:
      return 'Bye.'
      break;
  }
}