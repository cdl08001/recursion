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
  - If array.length === 0, OR
  - Object.keys(obj).length === 0, add ] or } to result.
  - Return result

Recursive Case:
  - If object is an array:
    - use obj.shift() to target first element. Add to result.
    - call stringifyJSON(obj) to work through remaining elements

  - If object is not an array (meaning it is an object literal):
    - use Object.keys(obj) to get an array of the object keys. Push to variable.
    - add first element in array to result, followed by ": ", followed by obj[key] value, followed by ", ".
    - remove first element key from object using delete.
    - call stringifyJSON(obj) to work through remaining elements



*/

var result = '';

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

  isSimpleObject(obj);
  var objectIsArray = Array.isArray(obj);

  //Base Case:
  if(isSimpleObject){
    result += obj;
    return result; 
  } else if(obj.length === 0){
    result += ']';
    return result;
  } else if(Object.keys(obj).length === 0){
    result += '}';
    return result;
  } 

  //Recursive Case:
  if(objectIsArray){
    var currrentElement = obj.shift();
    result += currrentElement;
    stringifyJSON(obj);
  } else if(!objectIsArray){
    var objectKeys = Object.keys(obj);
    result += objectKeys[0] + ': ' + obj[objectKeys[0]] + ', ';
    delete obj[objectKeys[0]];
    stringifyJSON(obj);
  }
}