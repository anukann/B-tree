// Import the BTNode class
const BTNode = require('./BTNode');

class BTree {
    constructor(order) {
        if (order < 3) {
            throw new Error("B-tree's order can not be lower than 3");
        }
        this.order = order;
        this.root = null;
        this.halfNumber = Math.floor((order - 1) / 2);
    }

    // Check if the tree is empty
    isEmpty() {
        return this.root === null;
    }

    // Get the height of a node in the tree
    getHeight(node) {
        if (!node) return 0;
        let height = 0;
        let currentNode = node;
        while (currentNode) {
            // Check if the leftmost child exists before traversing
            if (currentNode.getChild(0)) {
                currentNode = currentNode.getChild(0);
                height++;
            } else {
                break;
            }
        }
        return height;
    }

    // Get the node containing a given key
    getNode(key) {
        if (this.isEmpty()) return null;
        let currentNode = this.root;
        while (currentNode) {
            const keyIndex = currentNode.getKeys().indexOf(key);
            if (keyIndex !== -1) {
                return currentNode;
            }

            let childIndex = 0;
            for (let i = 0; i < currentNode.getSize(); i++) {
                if (currentNode.getKey(i) > key) {
                    break;
                }
                childIndex++;
            }

            if (childIndex < currentNode.getChildren().length) {
                currentNode = currentNode.getChild(childIndex);
            } else {
                currentNode = null;
            }
        }
        return null;
    }

    // Insert a key into the B-tree
    insert(key) {
        // If tree is empty
        if (this.isEmpty()) {
            this.root = new BTNode(this.order);
            this.root.addKey(0, key);
            return;
        }

        // Start insertion from root
        this.insertRecursive(this.root, key);
    }

    // Recursive insertion helper function
    insertRecursive(node, key) {
        // If the node is a leaf, insert key here
        if (node.isLastInternalNode()) {
            // Insert key in the current node
            node.addKey(this.findInsertIndex(node, key), key);
            // Check if node overflows
            if (node.isOverflow()) {
                this.splitNode(node);
            }
        } else {
            // Find appropriate child and recursively insert
            let childIndex = this.findChildIndex(node, key);
            this.insertRecursive(node.getChild(childIndex), key);
        }
    }

    // Find the index to insert a key into the node
    findInsertIndex(node, key) {
        let index = 0;
        while (index < node.getSize() && node.getKey(index) < key) {
            index++;
        }
        return index;
    }

    // Find the index of the child node to insert a key into
    findChildIndex(node, key) {
        let index = 0;
        while (index < node.getSize() && node.getKey(index) < key) {
            index++;
        }
        return index;
    }

    // Split a node when it overflows
    splitNode(node) {
        // Find middle index
        const middleIndex = Math.floor(node.getSize() / 2);
        // Create new node for splitting
        const newNode = new BTNode(this.order);

        // Move keys and children to the new node in the correct order
        for (let i = middleIndex; i < node.getSize(); i++) {
            newNode.addKey(i - middleIndex, node.getKey(i));
            newNode.addChild(i - middleIndex, node.getChild(i + 1));
        }
        newNode.addChild(newNode.getSize(), node.getChild(node.getSize()));

        // Remove keys and children from original node
        node.keys.length = middleIndex;
        node.children.length = middleIndex + 1;

        // If node is root, create new root
        if (node === this.root) {
            const newRoot = new BTNode(this.order);
            newRoot.addKey(0, node.getKey(middleIndex));
            newRoot.addChild(0, node);
            newRoot.addChild(1, newNode);
            this.root = newRoot;
        } else {
            // Promote middle key to parent
            const parent = node.getFather();
            if (parent) {
                parent.addKey(this.findInsertIndex(parent, node.getKey(middleIndex)), node.getKey(middleIndex));
                parent.addChild(this.findChildIndex(parent, newNode.getKey(0)) + 1, newNode);
                newNode.setFather(parent);
                // Check if parent overflows
                if (parent.isOverflow()) {
                    this.splitNode(parent);
                }
            } else {
                // Handle the case where the node does not have a parent
                // This should only happen if the node is the root node
                // Create a new root node
                const newRoot = new BTNode(this.order);
                newRoot.addKey(0, node.getKey(middleIndex));
                newRoot.addChild(0, node);
                newRoot.addChild(1, newNode);
                this.root = newRoot;
                node.setFather(newRoot);
                newNode.setFather(newRoot);
            }
        }
    }

    // Find a key in the B-tree
    find(key) {
        const queue = [this.root];
        while (queue.length > 0) {
            const currentNode = queue.shift();
            if (currentNode) {
                const keyIndex = currentNode.getKeys().indexOf(key);
                if (keyIndex !== -1) {
                    return true; // Return true if the key is found
                }
                queue.push(...currentNode.getChildren());
            }
        }
        return false; // Return false if the key is not found
    }

    // Delete a key from the B-tree
    delete(key) {
        // Find the node containing the key
        let node = this.getNode(key);
        let deleteNode = null;
        if (!node)
            return;

        // If it is root, tree 1 node 1 key -> Delete always
        if (node === this.root && node.getSize() === 1 && node.isLastInternalNode()) {
            this.root = null;
            return;
        } else {
            let flag = true;
            let isReplaced = false;
            // TODO: case 3
            if (!node.isLastInternalNode()) {
                node = this.replaceNode(node);
                deleteNode = node;
                isReplaced = true;
            }

            // If delete affects the height of the tree
            if (node.getSize() - 1 < this.halfNumber) {
                // TODO: case 2
                node = this.balanceDeletedNode(node);
                if (isReplaced) {
                    for (let i = 0; i <= node.getSize(); i++) {
                        for (let j = 0; i < node.getChild(i).getSize(); j++) {
                            if (node.getChild(i).getKey(j) === key) {
                                deleteNode = node.getChild(i);
                                break;
                            }
                        }
                    }
                }
            } else if (node.isLastInternalNode()) {
                // TODO: Case 1
                node.removeChild(0);
            }

            while (!node.getChild(0) === this.root && node.getSize() < this.halfNumber && flag) {
                // This is case 3c: Recursively delete
                if (node === this.root) {
                    for (let i = 0; i <= this.root.getSize(); i++) {
                        if (this.root.getChild(i).getSize() === 0) {
                            flag = true;
                            break;
                        } else {
                            flag = false;
                        }
                    }
                }
                if (flag) {
                    node = this.balanceDeletedNode(node);
                }
            }

            if (deleteNode === null) {
                // Check whether previously deleted or just rebalance / replace
                node = this.getNode(key);
            } else {
                node = deleteNode;
            }

            if (node) {
                // After replace is completed, delete node
                for (let i = 0; i < node.getSize(); i++) {
                    if (node.getKey(i) === key) {
                        node.removeKey(i);
                    }
                }
                // Decrease tree size
                this.treeSize--;
            }
        }
    }
}

module.exports = BTree;
