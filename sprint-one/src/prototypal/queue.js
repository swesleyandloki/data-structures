var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(item){
  this.storage[this.size()]=item;
}

queueMethods.dequeue = function(){
  var first = this.storage[0];
  _.each(this.storage, function(el,key,list){
    if(key>0){
      key--;
      list[key]=el;
    }
  });
  delete this.storage[this.size()-1];
  return first;
}

queueMethods.size = function(){
  return Object.keys(this.storage).length;
}


