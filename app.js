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

  // // prime function works
  // console.log(prime(3));
  // console.log(prime(7));
  // console.log(prime(8));
  // console.log(prime(13));

  //build spans : working  
  // for (var i=0;i<10000;i+=1) {
  //   pixels.append(d.createElement("span"));
  // }  

  let spanArray = []; 

  for (var i = 1; i < 10000; i += 1) {
    span = d.createElement("span");
    spanArray.push(span);    
  }
  console.log(spanArray);

  for (var i = 1; i < 100; i += 1) {
    // fine
    if (i % 3 === 0) {
    // NOT FINE  
    // if (true) {
    // if (i % 3 === 0) {
    // if (prime(i)){
      console.log(prime(i)); // fine
      // spanArray[i].classList.add("prime-colour");
    }
  }  
  // console.log(spanArray);

  let fragment = d.createDocumentFragment();
  for (var i = 1; i < spanArray.length - 1; i += 1) {
    fragment.append(spanArray[i]);
  }  

  pixels.append(fragment);

})(document);