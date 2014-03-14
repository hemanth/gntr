function Tree(label, left, right) {
  this.label = label;
  this.left = left;
  this.right = right;
}

var tree = function tree(list) {
  var n = list.length;
  if (n == 0) {
    return null;
  }
  var i = Math.floor(n / 2);
  return new Tree(list[i], tree(list.slice(0, i)), tree(list.slice(i + 1)));
}

var inorder = function* inorder(node) {
  if (node) {
    for (var value of inorder(node.left)) {
      yield value;
    }
    yield node.label;
    for (var value of inorder(node.right)) {
      yield value;
    }
  }
}

var preorder = function* preorder(node) {
  if (node) {
    yield node.label;
    
    for (var value of preorder(node.left)) {
      yield value;
    }
 
    for (var value of preorder(node.right)) {
      yield value;
    }
  }
}

var postorder = function* postorder(node) {
  if (node) {
    for (var value of postorder(node.left)) {
      yield value;
    }
    
    for (var value of postorder(node.right)) {
      yield value;
    }
   
    yield node.label;
  }
}

module.exports = {
  tree: tree,
  inorder: inorder,
  preorder: preorder,
  postorder: postorder
};