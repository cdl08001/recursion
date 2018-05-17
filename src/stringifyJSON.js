// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

/*
Step 1: create function identifyObjectType(obj)
  - Given an object, identify the type of object
  - and if it is a 'number', 'boolean', or 'string',
  - return it as a value;

Step 2: create function isArray(obj)
  - Given an object, identify if it is an array
  - if so,



Base Case: if Object.keys(obj).length is 0, return result

Recursive Case:
  - Run .shift() on keys array (pulling it off and modifying array), store in variable.
  - Return obj[variable] to capture value at given key, push to variable
  - Add .shift() value to result.
  - Add semicolon string ': ' (include space) to result
  - Add obj[variable] to result
  - delete obj[variable]
  - rerun stringifyJSON with object.
  - if Oject.keys(obj).length === 1, we need to close our result with '}'.

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
    return true;
  } else {
    return false;
  }
}

var stringifyJSON = function(obj){
  //Base Case:


  //Recursive Case:
}
