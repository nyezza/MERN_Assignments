function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
  }
  
  function fiveHeads() {
    return new Promise((resolve, reject) => {
      let headsCount = 0;
      let attempts = 0;
  
      while (headsCount < 5 ) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if (result === "heads") {
          headsCount++;
          if (headsCount >4){
            resolve('It took ' +attempts+' tries to flip five "heads"')
          }
          else {
            reject ('not yet')
          }
        } else {
          headsCount = 0;
        }
      }
      
    });
  }
  
  fiveHeads()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  
  console.log("When does this run now?");