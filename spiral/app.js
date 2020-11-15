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


  let currentIndex = (gridSize / 2) + (gridLen / 2);
  // spanArray[currentIndex].style.backgroundColor = "black";
  // Difference in span index as print head moves 
  let north = -gridLen;
  let south = +gridLen;
  let east = 1;
  let west = -1;
  let directionalIndexSteps = [north, east, south, west];

  // Current direction of travel for print head (used to determine direction of travel in directionalIndexSteps)
  let currentDirection = 0;  
  // spans left to check before turning
  let stepsRemaining = 1;
  let pathLength = 1;
  let pathsTraversed = -1;

  // Step through natural numbers
  for (let i = 1; i <= gridSize; i += 1) {

    // If reached end of straight, change direction by cycling through directionalIndexSteps, reset steps remaining
    if (stepsRemaining === 0) {
      pathsTraversed += 1;
      if (pathsTraversed % 2 === 1) {
        pathLength += 1;
      }
      currentDirection = (currentDirection + 1) % 4;
      stepsRemaining = pathLength;
    }

    // apply prime class
      if (prime(i)) {
        spanArray[currentIndex].classList.add("prime");
      }
      // Move printhead
      currentIndex += directionalIndexSteps[currentDirection];
      stepsRemaining -= 1;
        
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