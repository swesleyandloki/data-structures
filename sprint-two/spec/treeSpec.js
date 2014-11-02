describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it('should have methods named "removeFromParent", "traverse", "addChild" and "contains", and a property named "value", and a property named "parent"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.traverse).to.be.a("function");
    expect(tree.removeFromParent).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
    expect(tree.hasOwnProperty("parent")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should be able to remove child tree from parent', function() {
    tree.addChild(5);
    tree.addChild(6);
    var testChild = tree.children[0].removeFromParent();
    expect(tree.children[0].value).to.equal(6);
    expect(tree.children.length).to.equal(1);
    expect(testChild.parent).to.equal(null);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should run callback for each value in tree', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    tree.addChild(2);
    tree.addChild(3);
    tree.traverse(func);
    console.log(array);
    expect(array).to.eql([undefined,2,3]);
  });

});
