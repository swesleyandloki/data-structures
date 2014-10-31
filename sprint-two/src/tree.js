var makeTree = function(value){
  var newTree = _.extend({}, treeMethods);
  newTree.value = value;
  newTree.children = undefined;
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  this.children = this.children || [];
  this.children.push(child);
};

treeMethods.contains = function(target){
  var hasTarget = (this.value === target);

  if( !hasTarget && this.children){
    for( var i = 0 ; i < this.children.length; i++){
      if(!hasTarget){
        console.log(this.children[i]);
        hasTarget = this.children[i].contains(target);
      }
    }
  }

  return hasTarget;
};


/*
 * Complexity: What is the time complexity of the above functions?
 addChild is O(c)
 contains is O(n)
 */
