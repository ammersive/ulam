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
  //build spans : working  
  // for (var i=0;i<10000;i+=1) {
  //   pixels.append(d.createElement("span"));
  // }  

  
  let fragment = d.createDocumentFragment();

  let spanArray = []; 

  for (var i = 1; i < 10; i += 1) {
    span = d.createElement("span");
    if (i % 2 === 0){
    // if (prime(i)){
      span.classList.add("prime-colour");
    }
    spanArray.push(span);    
  }

  console.log(spanArray);

  




  
  // fragment.append(span);  
  // pixels.append(fragment);
  // // get main
  // let main = d.getElementById("pixels");

  // // fragment.append(span);
  // // main.append(fragment);


})(document);