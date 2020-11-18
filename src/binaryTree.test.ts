import BinaryTree from 'comp-sci-maths-lib/dist/dataStructures/binaryTree/BinaryTree'
// import Stack from '../comp-sci-maths-lib/src/dataStructures/stack/Stack'
import InOrder from 'comp-sci-maths-lib/dist/algorithms/binaryTreeTraversal/traverseInOrder'

test('Binary Tree', () => {
    const tree = new BinaryTree<number>((a, b) => a - b);

    tree.add(7);
    tree.add(9);
    tree.add(4);
    tree.add(90);
    [6 ,7, 1, 3].forEach(x => {
        tree.add(x)
    });

    expect(tree.contains(6)).toBeTruthy();
    expect(tree.contains(81)).toBeFalsy();
});

test('Binary Tree in Order', () => {
    const tree = new BinaryTree<number>((a, b) => a - b);

    tree.add(7);
    tree.add(5);
    tree.add(2);
    tree.add(8);
    tree.add(1);
    tree.add(4);
    tree.add(90);
    const inorderResults:number[] = []

    InOrder(tree, x => inorderResults.push(x))
    expect(inorderResults).toEqual([1,2,4,5,7,8,90])
})