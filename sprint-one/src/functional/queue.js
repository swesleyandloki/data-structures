var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){

    storage[someInstance.size()]=value;
  };

  someInstance.dequeue = function(){
    var val = storage[0];
    _.each(storage, function(element,key){
      if( key > 0 ){
        key--;
        storage[key]= element;
      }
    });
    delete storage[someInstance.size()-1];
    return val;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
