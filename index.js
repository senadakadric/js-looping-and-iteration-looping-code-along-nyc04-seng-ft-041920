// Code your solutions in this file

function writeCards(arrayOfNames, eventName) {
  const messages = [];
  for (let i = 0; i < arrayOfNames.length; i++) {
    messages.push(
      `Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`
    );
  }
  return messages;
}

function countDown(integer) {
  for (let i = integer; i > -1; i--) {
    console.log(i);
  }
}
