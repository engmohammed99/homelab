const getSleepHours = day => {
  switch (day) {
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 7;
      break;
    case 'monday':
      return 6;
      break;
    case 'tuesday':
      return 5;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 5;
      break;
    case 'friday':
      return 4;
      break;
    default:
      return 'Error! Invalid day!';
      break;
  }
}
const getActualSleepHours = () => {
  return getSleepHours('saturday') + getSleepHours('sunday') +
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday');

}
const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours * 7;
}
const calculateSleepDebt = () => {

  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('You have no sleep debt!');
  }
  else if (actualSleepHours > idealSleepHours) {
    console.log(`You have ${actualSleepHours - idealSleepHours} hours of sleep surplus!`);
  }
  else {
    console.log(`You have ${idealSleepHours - actualSleepHours} of sleep debt!`);

  }
}


calculateSleepDebt();
