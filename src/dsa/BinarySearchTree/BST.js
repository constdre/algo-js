import BSTNode from './BSTNode'

class BST {
    constructor() {
        this.root = null
    }
    add(data) {
        if (this.root === null) {
            this.root = new BSTNode(data)
            console.log(`Created ${data} as root`)
            return
        }
        create(this.root)
        function create(currentNode) {
            if (data === currentNode.data) {
                console.log('data already exists, will do nothing')
                return
            }
            let direction = data > currentNode.data
                ? 'right'
                : 'left'
            if (currentNode[direction] === null) {
                currentNode[direction] = new BSTNode(data)
                console.log(`Created ${data} at the ${direction} of ${currentNode.data}`)
            } else {
                create(currentNode[direction])
            }
        }
    }
    delete(data) {
        //TODO: come back to this after traversal
        if (this.root == null) {
            return
        }
        const remove = (data, current) => {
            if (data == current.data) {
                // delete
                current = null
            }
            remove(data, this.root)
            // the node has left and right
            if (data > current.data && current.right != null) {
                remove(data, current.right)
            } else if (data < current.data && current.left != null) {
                remove(data, current.left)
            } else {
                return
            }
        }

    }
    getMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }
    getMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }
    findNodeByDataIter(data) {
        if (data === null) {
            return "you sent a null input";
        }
        let current = this.root, depth = 0, direction;
        while (current !== null && current.data !== data) {
            direction = this.getNextDirection(data, current);
            current = current[direction] ? current[direction] : null;
            depth++;
        }
        depth = (current !== null) ? depth : "node does not exist";
        return [current, depth];
    }
    findNodeByDataRecur(data, current = this.root, depthCount = 0) {
        if (data === null) return [null, "you sent a null input"];
        if (current === null) return [null, "node does not exist"];
        if (data === current.data) {
            return [current, depthCount];
        } else {
            const direction = this.getNextDirection(data, current);
            return this.findNodeByDataRecur(data, current[direction] ?? null, ++depthCount);
        }
    }
    getNextDirection(data, current) {
        return data > current.data ? BST.right : BST.left;
    }
    preorderTraversalRecur(node = this.root) {
        if (node === null) return
        console.log(node.data)
        this.preorderTraversalRecur(node.left)
        this.preorderTraversalRecur(node.right)
    }
    inorderTraversalRecur(node = this.root) {
        if (node === null) return
        this.inorderTraversalRecur(node.left)
        console.log(node.data)
        this.inorderTraversalRecur(node.right)
    }
    postorderTraversalRecur(node = this.root) {
        if (node === null) return
        this.postorderTraversalRecur(node.left)
        this.postorderTraversalRecur(node.right)
        console.log(node.data)
    }
    breadthFirstSearch() {
        const workingQueue = [this.root]
        while (workingQueue.length > 0) {
            const node = workingQueue.shift()
            // process node
            console.log(node.data)
            // add node's children to queue if there are any 
            node.left !== null && workingQueue.push(node.left)
            node.right !== null && workingQueue.push(node.right)
        }
    }
}
export default BST;