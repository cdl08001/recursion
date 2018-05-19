// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
/*

1) document.body
   - Example: <body>(all body elements)</body>

2) element.childNodes
   - Example: [text, div#mocha, text, div.targetClassName]

3) element.classList
   - Example: childNodes[3].classList might equal something like: ["targetClassName", value: "targetClassName"]

Input: 'targetClassName'
   - Example: <div class="targetClassName"></div>

Output: Array containing all elements with a matching class:
   - Example: [body.targetClassName, div.targetClassName]

Need to use underbar to leverage .contains and .forEach:

Steps:
1) Create nodeList variable to hold results.
2) Create function to find child nodes with matching classes:
   - if a node's classList contains the className, push to results.
   - if a node contains children, run function recursively, pushing each
     child node as input to test function.
3) Return results. 
*/

function getElementsByClassName(className) {
  var nodeList = [];
  function findMatchingClasses(node) {
    if (_(node.classList).contains(className)) {
      nodeList.push(node);
    }
    _(node.childNodes).forEach(function(child) {
      findMatchingClasses(child);
    });
  }
  findMatchingClasses(document.body);
  return nodeList;
}

