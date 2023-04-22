function getAllEnglishLetters() {
    const allElements = Array.from(document.querySelector('body').textContent);
  
    const alphabet = /^[a-zA-Z]+$/;
    const filteredElements = allElements.filter(element => alphabet.test(element));
  
    return filteredElements;
  }
  
  console.log(getAllEnglishLetters());
