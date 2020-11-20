(d => {

  // Build an array of span elements
  let gridLength = 10;
  let gridSize = gridLength * gridLength;
  let spanArray = []; 

  for (let i = 0; i < gridSize; i += 1) {
    span = d.createElement("span");    
    span.textContent = String(i);
    switch (i) {
      case 55 : span.classList.add("current"); break;
      case 56 : span.classList.add("right"); break;
      case 54 : span.classList.add("left"); break;
      case 45 : span.classList.add("up"); break;
      case 65 : span.classList.add("down"); break;
    }
    spanArray.push(span);    
  }

  // Append span array elements to a fragment, to send back to DOM in one go
  let fragment = d.createDocumentFragment();
  for (let i = 0; i < spanArray.length; i += 1) {
    fragment.append(spanArray[i]);
  }  

  grid.append(fragment);

})(document);