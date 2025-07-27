let userName = 'Mohammed';

userName ? console.log(`Hello ${userName} !`) : console.log('Hello ');

let userQuestion = 'How can I be a millionaire?';

console.log(userQuestion);

let randonNumber = Math.floor(Math.random() * 7);

console.log(randonNumber);

let eightBall = '';

switch (randonNumber) {
  case 0:
    console.log('It is certain');
    break;
  case 1:
    console.log('It is decidedly so');
    break;
  case 2:
    console.log('Reply hazy try again');
    break;
  case 3:
    console.log('Cannot predict now');
    break;
  case 4:
    console.log('Do not count on it');
    break;
  case 5:
    console.log('My sources say no');
    break;
  case 6:
    console.log('Outlook not so good');
    break;
  case 7:
    console.log('Yes, definitely');
    break;
}
console.log(`The Magic 8 Ball says: ${eightBall}`);



