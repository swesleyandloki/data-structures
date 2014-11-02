var makeTree = function(value){
  var newTree = _.extend({}, treeMethods);
  newTree.value = value;
  newTree.children = undefined;
  newTree.parent = null;
  return newTree;
};


var treeMethods = {};

treeMethods.traverse = function(callback){
  var that = this;
  callback(that.value);
  if(that.children){
    for(var i=0; i<that.children.length; i++){
      that.children[i].traverse(callback);
    }
  }
};


treeMethods.removeFromParent = function(){

  var parent = this.parent;
  if(parent){
    for (var i = 0; i< parent.children.length; i ++){
      if( this === parent.children[i] ){
        parent.children[i]= parent.children[parent.children.length-1];
        parent.children.pop();
      };
    };
  };
  this.parent = null;
  return this;
};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  this.children = this.children || [];
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target){
  var hasTarget = (this.value === target);

  if( !hasTarget && this.children){
    for( var i = 0 ; i < this.children.length; i++){
      if(!hasTarget){
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
