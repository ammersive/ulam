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

  // build spans  
  for (var i=0;i<10000;i+=1) {
      pixels.append(d.createElement("span"));
  }  
  // get main
  let main = d.getElementById("pixels");

  // keep track of which spans are primeList
  let primeList = [];

//   // Prime number function
//   let prime = num => {
//     let isPrime = true; 
//     if (num <= 1) {
//       isPrime = false;
//     } else { 
//       for (i = 2; i <= (num / 2); i += 1) {
//         if (num % i === 0) {
//           isPrime = false;
//         }
//       }
//     } 
//     return isPrime;
//   }

//   if (prime(indexOf("span"))) {

//   }

})(document);