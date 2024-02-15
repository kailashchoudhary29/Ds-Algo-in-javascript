function swapObjectKeysAndValues(obj) {
    const swappedObj = {};
    
    for (let key in obj) {
        
      swappedObj[obj[key]] = key;
      console.log( swappedObj[obj[key]] + ":::")
    }
    
    return swappedObj;
  }
  
  const obj = { a: 1, b: 2, c: 3 };
  const swappedObj = swapObjectKeysAndValues(obj);
  
  console.log(swappedObj);


  const swapobj1 = Object.entries(obj).reduce((acc,[key,value]) =>{
    acc[value] = key
    return acc

  },{})

  console.log(swapobj1)