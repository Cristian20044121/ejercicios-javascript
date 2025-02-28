const makeCounter = (n)=>{
  let count = n;
  return ()=>{
    count++;
    console.log(count);
  }
}

let counter = makeCounter(10);
counter();
counter();
counter();