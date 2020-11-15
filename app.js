(d => {

  // Prime number function
  let prime = num => {
    let isPrime = true; 
    if (num <= 1) {
      isPrime = false;
    } else { 
      for (i = 2; i <= (num / 2); i += 1) {
        if (num % i === 0) {
          isPrime = false;
        }
      }
    } 
    return isPrime;
  }  

  // Build an array of span elements
  let gridSize = 10000;
  let spanArray = []; 

  for (let i = 0; i < gridSize; i += 1) {
    span = d.createElement("span");
    spanArray.push(span);    
  }

  // Apply colour class to spans where span index + 1 is prime (accounting for 0 indexing)
  for (let i = 0; i < gridSize; i += 1) {
    if (prime(i + 1)){
      spanArray[i].classList.add("prime");
    }
  }  

  // Append span array elements to fragment, to send back to DOM 
  let fragment = d.createDocumentFragment();
  for (let i = 0; i < spanArray.length; i += 1) {
    fragment.append(spanArray[i]);
  }  

  grid.append(fragment);

})(document);