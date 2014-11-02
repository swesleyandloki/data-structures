var makeBinarySearchTree = function(value){
  var newSearchTree = Object.create(binarySearchTreeMethods);
  newSearchTree.value = value;
  newSearchTree.left = undefined; //holds all lesser values
  newSearchTree.right = undefined; //holds all greater values
  return newSearchTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.breadthFirstLog = function(callBack,toBePassed){
  var that = this;
  var nextToBePassed = [];
  toBePassed = toBePassed || [that];
  for (i=0; i<toBePassed.length; i++){
    if (toBePassed[i] !== undefined){
      callBack(toBePassed[i].value);
      if(toBePassed[i].left){
      nextToBePassed.push(toBePassed[i].left);
      }
      if(toBePassed[i].right){
        nextToBePassed.push(toBePassed[i].right);
      }
    };
  };
  if(nextToBePassed.length>0){
    this.breadthFirstLog(callBack,nextToBePassed);
  }
};


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


binarySearchTreeMethods.rebalance =function (){
  var treeValues = [];
  this.depthFirstLog(function(value){
    treeValues.push(value);
  });
  treeValues.sort();
  this.left = undefined;
  this.right = undefined;
  this.value = treeValues[Math.floor(treeValues.length/2)];
  var ornament;
  while(treeValues.length>0){
    ornament = treeValues.splice(Math.round(treeValues.length/4), 1);
    this.insert(ornament);
    if(treeValues.length>0){
      ornament = treeValues.splice(Math.round(treeValues.length*3/4), 1);
      this.insert(ornament);
    }
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 insert O(log(n))
 contains O(log(n))
 depthFirstLog O(n)
 */
