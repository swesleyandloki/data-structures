var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {
};

queueMethods.enqueue = function(val){
  this.storage[this.size()] = val;
};

queueMethods.dequeue = function(){
  var dqd = this.storage[0];
  _.each(this.storage, function(el, key, list){
    if(key > 0){
      key--;
      list[key] = el;
    }
  });
  delete this.storage[this.size()-1];
  return dqd;
};

queueMethods.size = function(){
  return Object.keys(this.storage).length;
};

