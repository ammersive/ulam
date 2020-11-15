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

  // center span where print head starts
  let currentIndex = (gridSize / 2) + (gridLen / 2);

  // Difference in span index as print head moves, we'll cycle through the array with modulus to get our spiral
  let north = -gridLen;
  let south = +gridLen;
  let east = 1;
  let west = -1;
  let directionalIndexSteps = [north, west, south, east];

  // Current direction of travel for print head (used to determine direction of travel in directionalIndexSteps)
  let currentDirection = 0;  
  // spans left to check before turning
  let stepsRemaining = 1;
  // "paths" will be each straight side of the spiral
  let pathLength = 1;
  // This accounts for initial tight spiralling required when paths are length 1
  let pathsTraversed = -1;

  // Step through the natural numbers
  for (let i = 1; i <= gridSize; i += 1) {

    // If print head reaches the end of a straight path, change direction (by cycling through directionalIndexSteps array), and reset steps remaining to path length

    // If steps remaining = 0, print head is at the end of a path. Log that with pathsTraversed.
    if (stepsRemaining === 0) {
      pathsTraversed += 1;

      // When print head has traversed 2 paths/sides of the spiral, increase the path length 
      if (pathsTraversed % 2 === 1) {
        pathLength += 1;
      }
      // Change direction, reset steps remaining
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

  // Append span array elements to fragment, to send back to DOM 
  let fragment = d.createDocumentFragment();
  for (let i = 0; i < spanArray.length; i += 1) {
    fragment.append(spanArray[i]);
  }  

  grid.append(fragment);

})(document);