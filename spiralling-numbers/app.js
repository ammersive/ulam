(d => {

  // Build an array of span elements
  let gridLength = 6;
  let gridSize = gridLength * gridLength;
  let spanArray = []; 

  for (let i = 0; i < gridSize; i += 1) {
    span = d.createElement("span");
    spanArray.push(span);    
  }

  // The position of the print head, starting in the center
  let currentIndex = (gridSize / 2) + (gridLength / 2);  

  // Directions: differences in span indexes as the print head moves
  let up = -gridLength;
  let down = +gridLength;
  let right = 1;
  let left = -1;
  let directions = [up, left, down, right];

  // Current direction of travel of the print head
  let currentDirection = 0;  
  // Spans left to check before turning
  let stepsRemaining = 1;
  // A path is the total straight side of the spiral before a turn is made
  let pathLength = 1;
  // This accounts for tight spiraling at the start of the loop (it should not increment until two directional turns)
  let pathsTraversed = -1;

  // Step through the natural numbers
  for (let i = 1; i <= gridSize; i += 1) {

    // If no steps remain, the print head is at the end of a path. Log that with pathsTraversed.
    if (stepsRemaining === 0) {
      pathsTraversed += 1;

      // On paths of an odd number, increase the path length 
      if (pathsTraversed % 2 === 1) {
        pathLength += 1;
      }
      // Change direction and reset steps remaining
      currentDirection = (currentDirection + 1) % 4;
      stepsRemaining = pathLength;
    }

    // Print a number to the current span 
    iString = String(i);
    spanArray[currentIndex].textContent = iString;

    // Decrement the g and b colour values to highlight the spiral visually
    let b = (255 - (i * 7));
    let g = (255 - (i * 7));    
    spanArray[currentIndex].style.backgroundColor=`rgb(200, ${g}, ${b})`;

    // Move print head one square in current direction
    currentIndex += directions[currentDirection];
    stepsRemaining -= 1;
  }

  // Append span array elements to a fragment, to send back to DOM in one go
  let fragment = d.createDocumentFragment();
  for (let i = 0; i < spanArray.length; i += 1) {
    fragment.append(spanArray[i]);
  }  

  grid.append(fragment);

})(document);