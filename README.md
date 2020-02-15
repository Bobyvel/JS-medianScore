# Explanation Median Score Problem


### Description

The whole logic is in an arrow function named "medianScore". It is tested on VSCode program with command "node medianScore.js". Requires installed Node JS.

An argument is passed to the "medianScore" function. For correct logic, it has to be an array of integers so the needed tests are written. The first one checks if the argument is an array and if it is not empty. If one of these checks is true, it is thrown error.
The second verify if the already confirmed array is with the required in the problem length. If not it throws an error.
The third test checks if all members of the array are integers and positive numbers. Throws error otherwise.
The last verify if some of the array members are higher numbers from the requirements in the problem.

After all checks, if there is not thrown error, start the logic of the problem.
It is initialized new empty array named "medianScores". It will hold the resulted medians.
A second empty array is initialized for the need of a mediator between the passed arguments and "medianScores" array, named "scores".

The problem describes that every member is passed individually, so it is used "for" cycle with indexes for that matter.
In its block, the first element from the input array is pushed in "scores" array. The helping array is sorted in ascending order. After that is checked if the array is with an even number of elements. If not then the length is an odd number.
In the even block of the "if" statement the middle element index is found as the length of "scores" array is divided by 2. The second middle element is the previous found index minus 1.
The median is calculated as the elements corresponding to the two indexes are summed and the result is divided by 2. The whole calculation is rounded up to the nearest integer. The median is pushed in the final array "medianScores".

In odd block, the middle element is found as the length of the helping array "scores" is divided by 2 and rounded down to the nearest integer.
The element is pushed in "medianScores" array.

This logic is repeated until the input array the last element is passed.

The function returns the resulted "medianScores" array.

### Tech

*JavaScript



    




