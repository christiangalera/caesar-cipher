function caesarCypher (message: any, key: any): string {
  // decode message
  if(key < 0) return caesarCypher(message, key + 26)

  // encode message
  let newMessage = '';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  message = message.toLowerCase()

  for (const char of message) {
    let newChar = char;
    const charIndexAtAlphabet = alphabet.indexOf(char)
    if(charIndexAtAlphabet >= 0 ) {
      newChar = alphabet.charAt( (charIndexAtAlphabet + key) % 26 )
      newMessage += newChar;
    }
  }

  return newMessage;
}

const key = 3;
const message = 'Hello World'
const encryptedMessage = caesarCypher(message, key);

console.log(encryptedMessage);
console.log(caesarCypher(encryptedMessage, -key));