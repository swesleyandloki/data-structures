var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (this._storage === undefined){
    this._storage = [];
  }
  this._storage.push(item);

};

setPrototype.contains = function(item){
  return _.contains(this._storage,item);
};

setPrototype.remove = function(item){
  var ind = _.indexOf(this._storage,item);
  if( ind > -1 ){
    this._storage[ind] = this._storage[this._storage.length-1];
    this._storage.pop();
  };
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
