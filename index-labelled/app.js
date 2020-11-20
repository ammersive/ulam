(d => {

  // Build an array of span elements
  let gridLength = 10;
  let gridSize = gridLength * gridLength;
  let spanArray = []; 

  for (let i = 0; i < gridSize; i += 1) {
    span = d.createElement("span");
    span.textContent = String(i);
    spanArray.push(span);    
  }

  // Append span array elements to a fragment, to send back to DOM in one go
  let fragment = d.createDocumentFragment();
  for (let i = 0; i < spanArray.length; i += 1) {
    fragment.append(spanArray[i]);
  }  

  grid.append(fragment);

})(document);