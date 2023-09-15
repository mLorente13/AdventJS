function checkPart(part) {
    function checkPalindrome() {
      for (let i = 0; i < part.length; i++) {
        let partSplice = part.split('').reverse();
        partSplice.splice(i, 1);
        if (partSplice.join('') === partSplice.reverse().join('')) {
          return true;
        }
      }
    }
    let partReversed = part.split("").reverse().join("");
    if (partReversed === part || checkPalindrome() == true) {
      return true;
    } else {
  
    }
    return false;
  }