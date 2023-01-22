import BST from './BST'
import { vanilla } from './datasets'

export const basic = () => {
    const bst = new BST()
    bst.add(12)
    bst.add(23)
    bst.add(11)
    bst.add(187)
    bst.add(20)
    bst.add(1000)
    bst.add(99)
    console.log('min: ', bst.findMin());
    console.log('min: ', bst.findMax());

    const nodeToFind = 23;
    let [_, depth] = bst.findNodeByDataIter(nodeToFind);
    console.log(`depth of ${nodeToFind}(iter):`, depth);
    [_, depth] = bst.findNodeByDataRecur(nodeToFind);
    console.log(`depth of ${nodeToFind}(recur):`, depth);
}

export const preorderTraversal = () => {
    let bst = {} 
    Object.assign(bst, vanilla)
    console.log('bst obj', bst)
    bst.preorderTraversalRecur()
}
