var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){
    if(list.tail === null){
      list.tail = makeNode(value);
      list.head = list.tail;
    } else {
      list.tail.next = makeNode(value);
      list.tail = list.tail.next;
    }


  };

  list.removeHead = function(){
    var head = list.head.value;
    if (list.head !== null){
      list.head = list.head.next;
    }
    return head;
  };

  list.contains = function(target){
    var currNode = list.head;
    var wasFound = false;
    while(!wasFound && currNode !== null){
      wasFound = (currNode['value'] === target);
      currNode = currNode.next;
    }
    return wasFound;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail and removeHead are constant, contains is linear.  we thinks.
 */
