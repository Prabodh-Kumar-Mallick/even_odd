function checkNumber() {

    const resultElement = document.getElementById('result');

    let number = parseInt(document.getElementById("numberInput").value);

    if (number % 2 === 0) {
resultElement.style.color = 'yellow';
      document.getElementById("result").textContent = "[This is a Even Number]";
    } 
    
    else if((number % 2 === 1)) {
        resultElement.style.color = 'violet';
      document.getElementById("result").textContent = "[This is a Odd Number]";
    }
  }