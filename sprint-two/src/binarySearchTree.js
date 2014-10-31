var makeBinarySearchTree = function(value){
  var newSearchTree = Object.create(binarySearchTreeMethods);
  newSearchTree.value = value;
  newSearchTree.left = undefined; //holds all lesser values
  newSearchTree.right = undefined; //holds all greater values
  return newSearchTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value){

  var pickASide;
  pickASide = (value < this.value) ? 'left' : 'right';

  if(this[pickASide]===undefined){
    this[pickASide] = makeBinarySearchTree(value);
    return;
  }else{
    this[pickASide].insert(value);
  }

};

binarySearchTreeMethods.contains = function(value, wasFound){
  var pickASide;
  wasFound = wasFound || (value === this.value);
  if(!wasFound){
    pickASide = (value < this.value) ? 'left' : 'right';
    if(this[pickASide]!==undefined){
      return this[pickASide].contains(value, wasFound);
    }
  }
  return wasFound;
};

binarySearchTreeMethods.depthFirstLog = function(callBack){
  callBack(this.value);
  if(this.left!==undefined){
    this.left.depthFirstLog(callBack);
  }
  if(this.right!==undefined){
    this.right.depthFirstLog(callBack);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 insert O(log(n))
 contains O(log(n))
 depthFirstLog O(n)
 */
