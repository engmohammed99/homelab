let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 17;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;

}
else if (runnerAge > 18 && !registeredEarly) {
  raceNumber += 1000;

}



if (runnerAge > 18 && registeredEarly) {
  console.log(`Your race will start at 9:30am and your race number is ${raceNumber}`);
}
else if (runnerAge > 18 && !registeredEarly) {
  console.log(`You will race at 11 am and your race number is ${raceNumber}`);
}
else if (runnerAge < 18) {

  console.log(`race start at 12 and your race number is ${raceNumber}`);

}
else {
  console.log('Please see the registration desk');
}


