medianScore = arr => {
  // Check if input array is from type array and if is not empty
  if (!Array.isArray(arr) || arr.length <= 0) {
    throw Error("The input must be an array of integers");
  }
  // Check if the input array langth is in norm
  if (arr.length > 5 * Math.pow(10, 4)) {
    throw Error("The input must be an array of integers");
  }
  // Check if the array elements are integers and positive numbers
  if (arr.some(i => !Number.isInteger(i)) || arr.some(i => i < 0)) {
    throw Error("The array must be from  positive integers");
  }
  // Check if the array elements are in norm
  if (arr.some(i => i > Math.pow(10, 6))) {
    throw Error("The score can't be more than 10^6");
  }
  // Create array for the results
  let medianScores = [];
  // Create array for passing the input array elements
  let scores = [];

  for (let i = 0; i < arr.length; i++) {
    scores.push(arr[i]);
    scores.sort((a, b) => a - b);

    // Even array length
    if (scores.length % 2 == 0) {
      let middleElementOne = scores[scores.length / 2];
      let middleElementTwo = scores[scores.length / 2 - 1];
      let median = Math.ceil((middleElementOne + middleElementTwo) / 2);
      medianScores.push(median);
    } // Odd array length
    else {
      let middleElement = Math.floor(scores.length / 2);
      medianScores.push(scores[middleElement]);
      console.log("odd " + scores);
    }
  }

  return medianScores;
};

//let scores = [100, 100000, 50, 70, 45];
let scores = [100, 20, 50, 70, 45, 10, 50];
//let scores = {scor: 100};
//let scores = [];
console.log(medianScore(scores));
