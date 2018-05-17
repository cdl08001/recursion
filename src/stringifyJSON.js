// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:
/*
Step 1: create function identifyObjectType(obj)
  - Given an object, identify the type of object
  - and if it is a 'number', 'boolean', or 'string',
  - return it as a string;

Step 2: create function isArray(obj)
  - Given an object, identify if it is an array, and if so, check if empty.
    - If empty, return '[]', otherwise, return true;
  - If object is NOT an array, check if empty.
    - If empty, return '{}', otherwise, return false;

Base Case: 
  - If obj is a simple object, return the obj
  - If obj is empty array\object, return obj
  - 

Recursive Case:
  - 

*/
function isSimpleObject(obj){

  if(typeof obj === 'number'){
    return true;
  } else if(typeof obj === 'boolean'){
    return true;
  } else if(typeof obj === 'string'){
    return true;
  } else if (obj === null){
    return true;
  }
}

function isEmpty(obj){
  if(obj.length === 0){
    return true;
  } else {
    for(var key in obj){
      if(obj.hasOwnProperty(key)){
        return false
      }
    }
    return true; 
  }
}

function isArray(obj){
  if(Array.isArray(obj)){
    return true;
  } else {
    return false;
  }
}

var stringifyJSON = function(obj){ 
  var result = '';

  //Base Case:
  if(isSimpleObject(obj)){
    if(typeof obj === 'string'){
      result += `"${obj}"`;
      return result;
    } else {
      result += obj;
      return result;
    }
  } else if(isEmpty(obj)){
      if(isArray(obj)){
        result += '[]';
        return result;
      } else {
          result += '{}';
          return result;
      }
  }

  //Recursive Case:

}





