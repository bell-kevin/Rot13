function rot13(message){
  //your code here
   let newString = "";
  
  for (let char of message) { 
    if ( char.match(/[a-z]/i) === null ) newString += char;
    else if ( char.charCodeAt() > 77 && char.charCodeAt() < 91 ) {
      //subtr 91 instead of 90 as going from end of character set to beginning counts as 1 step up
      let newChar1 = (char.charCodeAt() + 13 - 91) + 65;
      newString += String.fromCharCode(newChar1);
    }
    else if ( char.charCodeAt() > 109 && char.charCodeAt() < 123 ) {
      let newChar2 = (char.charCodeAt() + 13 - 123) + 97;
      newString += String.fromCharCode(newChar2);
    }
    else {
      let newChar3 = char.charCodeAt() + 13;
      newString += String.fromCharCode(newChar3);
    }
  }
  return newString;
}
