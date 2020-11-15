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
  let gridLen = 100;
  let gridSize = gridLen * gridLen;
  let spanArray = []; 

  for (let i = 0; i < gridSize; i += 1) {
    span = d.createElement("span");
    spanArray.push(span);    
  }

  // Apply colour class to spans where span index + 1 is prime (accounting for 0 indexing)
  // for (let i = 0; i < gridSize; i += 1) {
  //   if (prime(i + 1)){
  //     spanArray[i].classList.add("prime");
  //   }
  // }  

  let currentIndex = (gridSize / 2) + (gridLen / 2);
  console.log(currentIndex);

  // Difference in span index as print head moves 
  let north = -gridLen;
  let south = +gridLen;
  let east = 1;
  let west = -1;
  let directionalIndexSteps = [north, east, south, west];

  // Current direction of travel for print head (used to determine direction of travel in directionalIndexSteps)
  let currentDirection = 0; 
  
  // Step through natural numbers
  for (let i = 1; i <= 100; i += 1) {
    // spans checked before printhead changes direction 
    let spansRepeated = Math.floor((i + 1) / 2);
    for (let j = 1; j <= spansRepeated; j += 1) {
      if (prime(i)) {
        console.log(spanArray[currentIndex]);
        spanArray[currentIndex].classList.add("prime");
      }
      // Move printhead
      currentIndex += directionalIndexSteps[currentDirection];
    }
    // Change direction by cycling through directionalIndexSteps
    currentDirection = (currentDirection + 1) % 4;
  }

  // defining the center span
  // let center = (gridLen * (gridLen) / 2) + (gridLen / 2);
  // spanArray[center].classList.add("prime");
  // spanArray[center - gridLen].classList.add("prime");
  // spanArray[center - gridLen + 1].classList.add("prime");
  // spanArray[center - gridLen + 1 + gridLen].classList.add("prime");
  // spanArray[center - gridLen + 1 + gridLen + gridLen].classList.add("prime");

  // if (spanArray[i] has classlist where num of classlist is prime) {
    // apply prime styling
    //spanArray[i].classList.add("prime");
  // }

  // Append span array elements to fragment, to send back to DOM 
  let fragment = d.createDocumentFragment();
  for (let i = 0; i < spanArray.length; i += 1) {
    fragment.append(spanArray[i]);
  }  

  grid.append(fragment);

})(document);