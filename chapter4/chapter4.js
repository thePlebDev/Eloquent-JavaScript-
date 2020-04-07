//--------------------------------------THE SUM OF RANGE.----------------------------------------------------------------------
//write a range function that takes two arguments, start and end and returns an array containing all the numbers from
//start up to and including the end
function ranger(start,end){
  var rangerArray = []
  for( var i = start; i < (end +1); i++){
    rangerArray.push(i)
  }
  console.log(rangerArray)
}
//ranger(2,5)
//expecting => [2,3,4,5]


//Write a sum function that takes an array of numbers and returns the sum for these numbers

function sumer(arrays){
  var total = 0
  for( i of arrays){
    total = total + i
  }
  console.log(total)
}
//sumer([1,2,3])
//expected 6



//As a bonus assignment, modify the range function to take an optional third argument that indicates the 'step' value
//used when building the array. if not step is given, the elements go up by increments of one, corresponding to the old way
function stepRanger(start,end,step){
  var rangerArray = []
  for( var i = start; i < (end +1); i = i + step){
    rangerArray.push(i)
  }
  console.log(rangerArray)
}

//stepRanger(1,10,2)
//expected [1,3,5,7,9]


//-------------------------------------------------REVERSING AN ARRAY-----------------------------------------------------
//write two function reverseArray and reverseArrayInPlace. the first function takes an array as argument and produces a new
//array that has the same elements in the invers order

function reverseArray(arrays){
  var reverse = []
  while(arrays.length > 0){
    reverse.push(arrays.pop())
  }
  console.log(reverse)
}
//reverseArray([1,2,3,4])
//expected => the reversed array

}
