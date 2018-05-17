// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

/*
Step 1: create function identifyObjectType(obj)
  - Given an object, identify the type of object
  - and if it is a 'number', 'boolean', or 'string',
  - return it as a value;

Step 2: create function isArray(obj)
  - Given an object, identify if it is an array, and if so, check if empty.
    - If empty, return '[]', otherwise, return true;
  - If object is NOT an array, check if empty.
    - If empty, return '{}', otherwise, return false;

Base Case: 

Recursive Case:


*/

var result = '';

function isSimpleObject(obj){
  if(typeof obj === 'number'){
    return result + obj;
  } else if(typeof obj === 'boolean'){
    return result + obj;
  } else if(typeof obj === 'string'){
    return result + obj;
  } else if (obj === null){
    return result + obj;
  }
}

function isArray(obj){
  if(Array.isArray(obj)){
    if(obj.length === 0){
      return '[]';
    } else {
      return true;
    } 
  } else if(Object.keys(obj).length === 0){
      return '{}';
  } else {
      return false; 
  }
}

var stringifyJSON = function(obj){
  //Base Case:


  //Recursive Case:
}
