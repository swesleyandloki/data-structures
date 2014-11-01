var Graph = function(){
  this._storage = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  if (Object.keys(this._storage).length === 1){
    var firstEdge = Object.keys(this._storage)[0];
    this._storage[firstEdge] = [newNode];
    this._storage[newNode] = [firstEdge];
  } else if(toNode !== undefined){
      this._storage[newNode] = [toNode];
      this._storage[toNode].push(newNode);
  } else {
    this._storage[newNode] = [];
  }
};

Graph.prototype.contains = function(node){
  return this._storage[node] ? true : false;
};

Graph.prototype.removeNode = function(node){
  if(this._storage[node]){
    var links = this._storage[node];
    for(var i = 0; i < links.length; i++){
      var edges = this._storage[links[i]];
        for(var j = 0; j<edges.length; j++){
          if(edges[j]===node){
            edges[j] = edges[edges.length-1];
            edges.pop();
          }
        }
      this._storage[links[i]] = edges;
    }
    delete this._storage[node];
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var results = false;
  _.each(this._storage[fromNode], function(el,key){
    if( el === toNode ){
      results = true;
    }
  });
  return results;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this._storage[fromNode].push(toNode);
  this._storage[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var that = this;
  var args = arguments;
  for(var i=0; i<2; i++){
    _.each(that._storage[args[i]],function(el,key,list){
      if(el===toNode || el===fromNode){
        that._storage[args[i]][key] = list[list.length-1];
        that._storage[args[i]].pop();
      }
    });

  }
  if(this._storage[fromNode].length===0){
    this.removeNode(fromNode);
  }
  if(this._storage[toNode].length===0){
    this.removeNode(toNode);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
