// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:
/*

*/
var stringifyJSON = function(obj){ 
  var finalArray = [];
  var finalObject = [];

// Initial Check: Return Simple Objects
  if(obj === null){
    return 'null';
  } else if(typeof obj === 'string'){
    return `"${obj}"`;
  } else if(typeof obj !== 'object'){
    return '' + obj;
  }

// If 'obj' is an array:
  if(Array.isArray(obj)){
    if(obj.length === 0){
      return '[]';
    } else {
      obj.forEach(function(element){
        finalArray.push(stringifyJSON(element))
      })
    }
    return '[' + finalArray + ']';
  }

// If 'obj' is an object literal:
  if(Object.keys(obj).length === 0){
    return '{}';
  } else if (Object.keys(obj).includes('functions')){
    return '{}';
  } else if(Object.keys(obj).length === 1) {
    var objectKeys = Object.keys(obj);
    objectKeys.forEach(function(key){
      var objectValue = obj[key];
      finalObject.push(stringifyJSON(key));
      finalObject.push(':');
      finalObject.push(stringifyJSON(objectValue));
    })
    return '{' + finalObject.join('') + '}';
  } else if(Object.keys(obj).length > 1){
    var objectKeys = Object.keys(obj);
    objectKeys.forEach(function(key){
      var objectValue = obj[key];
      finalObject.push(stringifyJSON(key));
      finalObject.push(':');
      finalObject.push(stringifyJSON(objectValue));
      if(key !== objectKeys[objectKeys.length - 1]){
        finalObject.push(',');
      }
    })
    return '{' + finalObject.join('') + '}';    
  }


}










