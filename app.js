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

  for (var i=0;i<100;i+=1) {
    span = d.createElement("span")
    if (prime(i)) {
    // if (i % 2 === 0){  
      span.style.backgroundColor = "red";
    } 
    fragment.append(span);
  } 

  pixels.append(fragment);

  // // get main
  // let main = d.getElementById("pixels");

  
  // let numbers = [];  

  // let fragment = d.createDocumentFragment();
  // let main = d.getElementById("main");

  // // build spans  
  // for (var i=0; i<10000; i+=1) {    
  //   numbers.push(i);          
  // } 
  // console.log(numbers);

  // // let span = d.createElement("span");
  // // console.log(numbers);



  // // fragment.append(span);
  // // main.append(fragment);


})(document);