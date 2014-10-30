var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage={};
};


Queue.prototype.enqueue = function(item){
  this.storage[this.size()]=item;
};

Queue.prototype.dequeue = function(){
  var dqd = this.storage[0];
  _.each(this.storage, function(el,key, list){
    if ( key > 0 ){
      key--;
      list[key]=el;
    }
  });
  delete this.storage[this.size()-1];
  return dqd;
};



Queue.prototype.size = function(){
  return Object.keys(this.storage).length;
};


