 var HashTable = function(){
  this._limit = 2;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
  this.upperLimit = 0.75;
  this.lowerLimit = 0.25;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(bucket===undefined){
    this._storage.set(i, [[k,v]]);
  }else{
    bucket.push([k,v]);
    this._storage.set(i, bucket);
  }
  this._size ++;
  if ( this._size/this._limit > this.upperLimit ){
    this._limit = this._limit * 2;
    this.reHash();
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if ( bucket ){
    for(var i=0; i<bucket.length; i++){
      if(k===bucket[i][0]){
        return bucket[i][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket) {
    for(var j=0; j<bucket.length; j++){
      if(k===bucket[j][0]){
        bucket.splice(j,1);
        this._size --;
      }
    }
    if(bucket.length===0){
      bucket = null;
    }
    this._storage.set(i, bucket);
    if ( this._size/this._limit < this.lowerLimit && this._limit > 2  ){
      this._limit = this._limit / 2;
      this.reHash();
    }
  }

};

HashTable.prototype.reHash = function(){
  var that = this;
  var oldStorage = this._storage;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
  oldStorage.each(function(el, key, list){
    if( el !== undefined && el !== null){
      //console.log(list);
      for( var i=0; i<el.length; i++ ){
        //debugger;
        that.insert(el[i][0],el[i][1]);
      }
    }
  });


}



/*
 * Complexity: What is the time complexity of the above functions?
 */
