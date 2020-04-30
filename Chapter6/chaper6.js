// A VECTOR TYPE
// it should take x and y parameters(numbers) which it should save to properties of the same name. give it two methods,
// plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of
//the two vectors x and y values.
// add a getter property length to the prototype that computes the length of the vector, that is, the distance of
// point (x,y) from the origin

class Vector {
  constructor(x,y){
    this.x =x;
    this.y = y
  }

  plus(vectors){
    let newX = this.x +vectors.x
    let newY = this.Y +vectors.Y

  }

  minus(vectors){
    let newX = this.x -vectors.x
    let newY = this.Y -vectors.Y

  }
}



// -------------------------------------GROUPS------------------------------------------------------------------------
// create a class called Group, it has,add, delete, and has methods. Its constructor creates an empty group, add adds
// a value to the group (but only if it isnt already a member ), delete removes its argument from the group(if it was
// a member) and has returns a Boolean value indication whether its argument is a member of the group.
//Use the === operator or something equivalent such as indexOf, to determine whether two values are the same or not
// give the class a static from method that takes an iterable object as argument and creates a group that contains all
//the values produced by iterating over it


class Group {
  constructor(){
    this.groups = []
  }
  add(x){
    for(let i =0; i < this.groups.length; i++){
      if(this.groups[i] === x){
        console.log('its already in here')
        return this.groups
      }
    }
    console.log('added')
    this.groups.push(x)
  }
  delete(x){
    for(let i =0; i < this.groups.length; i++){
      if(this.groups[i] === x){
        this.groups.splice(i,1)
        console.log('spliced')
        console.log(this.groups)
      }
    }
  }
  has(x){
    for(let i =0; i < this.groups.length; i++){
      if(this.groups[i] === x){
        console.log(true)
        return true
      }
    }
    console.log(false)
  }

  static from(itObj){
    let d = new Group
    for(let i = 0; i < itObj.length; i++){
      d.add(itObj[i])
    }
    console.log(d.groups)
  }
}

let numbers = [1,2,3,4,5,6]

Group.from(numbers)


//----------------------------------------------------------BORROWING A METHOD-----------------------------------------------
