(d => {


  // Build an array of span elements
  let gridLen = 20;
  let gridSize = gridLen * gridLen;
  let spanArray = []; 

  for (let i = 0; i < gridSize; i += 1) {
    span = d.createElement("span");
    spanArray.push(span);    
  }

  // center span where print head starts
  let currentIndex = (gridSize / 2) + (gridLen / 2);
  let iString = "";

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

    iString = String(i);
    spanArray[currentIndex].textContent = iString;

    // Move printhead one square in current direction
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