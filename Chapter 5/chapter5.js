//Use the reduce method in combination with the concat method to "flatten" an array of arrays into a single
// array that has all the elements of the original arrays

const randomArrays = [[1,2,3],[4,5,6],[7,8,9]]

const reducer = (accumulator, currentValue)=>{
  return accumulator.concat(currentValue)
}
console.log(randomArrays.reduce(reducer))
// expected value of [1,2,3,4,5,6,7,8,9]



//YOUR OWN LOOP
// write a higher-order function loop that provides something like a for loop statemnet. it takes a value,
// a test function, an update function, and a body function. Each iteration, it first runs the test function
// on the current loop value and stops if that returns false. Then it calls the body function, giving it
//the current value. Fina.ly, it calls the update function to create a new value and starts from the
// begging
// When defining the function, you can use a regular loop to do the actual looping

function numReducer(value,testFunc,updateFunc,bodyFunc){
  while(value != false){
    value = testFunc(value) //stops if returns false
    value = bodyFunc(value) //given the current value
    value = updateFunc(value)
  }
  console.log(value)
}

function testFunc(value){
  if( value === 0){
    return false
  }else{
    return value
  }
}

function bodyFunc(value){
  if(value === false){
    return false
  }else{
    return value --
  }
}
function updateFunc(value){
  if (value == false) {
    return false
  }else{
    value = value
    return value
  }
}

//EVERYTHING
//implement every as a function that takes an array and a predicate function as parameters. Write two versions
// one using a loop and one using the some method

function everything(nums,testing){
  for (i of nums ){
    var value = testing(i);
    if(value ==false){
      console.log(value)
      return value
    }else{
      console.log(value)
    }
  }
  console.log('out of for loop')
  console.log(value)
}

function tests(num){
  if(num < 5){
    return true
  }else{
    return false
  }
}
everything([1,5,2],tests)
//expected outcome true, false
