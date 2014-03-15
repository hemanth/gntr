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
    yield* inorder(node.left);
    yield node.label;
    yield* inorder(node.right);
  }
}

var preorder = function* preorder(node) {
  if (node) {
    yield node.label;
    yield* preorder(node.left);
    yield* preorder(node.right);
  }
}

var postorder = function* postorder(node) {
  if (node) {
    yield* postorder(node.left);
    yield* postorder(node.right);
    yield node.label;
  }
}

module.exports = {
  tree: tree,
  inorder: inorder,
  preorder: preorder,
  postorder: postorder
};