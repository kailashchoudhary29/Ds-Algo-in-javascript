function sumByKey(strArr) {
  // Initialize an empty object to store the sum of values for each key
  const sumObj = {};

  // Iterate through the input array and update the object
  for (let i = 0; i < strArr.length; i++) {
    const [key, valueStr] = strArr[i].split(":");
    // console.log(key + " -:- " + valueStr)
    const value = parseInt(valueStr);
    console.log(value + " value check");
    if (key in sumObj) {
      sumObj[key] += value;
    } else {
      sumObj[key] = value;
    }
    console.log(sumObj[key] + " obj");
  }

  // Construct the output string by iterating through the object
  let outputStr = "";

  const keys = Object.keys(sumObj).sort();
  console.log(keys + " keys123");
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    outputStr += `${key}:${sumObj[key]},`;
  }
  // Remove the trailing comma from the output string
  console.log(outputStr + " output");
  outputStr = outputStr.slice(0, -1);
  console.log(outputStr + " output123");

  return outputStr;
}

const strArr = ["B:-1", "A:1", "B:3", "A:5"];
const output = sumByKey(strArr);
console.log(output);
