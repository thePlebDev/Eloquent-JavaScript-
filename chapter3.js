//Write a function min that takes two arguments and returns their minimum.
function min(a,b){
  if( a > b){
    console.log(b)
  }else{
    console.log(a)
  }
}
//min(5,10)

//Define  a recursion function isEven. The function should accept a single parameter(a positive, whole number)
//and return a Boolean

function isEven(a){
  if(a === 1){
    console.log(a + ' a is odd')
    return a
  }else if (a = 0) {
    console.log(a + ' a is even')
    return a
  }else{
    isEven(a-2)
  }
}

isEven(5)
