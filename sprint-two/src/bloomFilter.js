var makeBloomFilter = function(m, k){
  var bloomArray = new Array(m);
  var salts = [];
  for(var i=0; i<k; i++){
    salts.push(''+Math.random());
  }
  //.map(function(){return ''+Math.random();});
  var bloomFilter = {};

  bloomFilter.insert = function(str){
    salts.forEach(function(salt){
      var index = getHash(str+salt, m);
      bloomArray[index] = true;
    });
  };

  bloomFilter.contains = function(str){
    var containsStr = true;
    salts.forEach(function(salt){
      var index = getHash(str+salt, m);
      if(bloomArray[index]===undefined){
        containsStr = false;
      }
    });
    return containsStr;
  };

  return bloomFilter;

};



var getHash = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};


