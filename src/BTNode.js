class BTNode {
    // Constructor initializes the node with the given order
    constructor(order) {
        // Maximum number of keys this node can hold
        this.fullNumber = order - 1;
        // Reference to the parent node
        this.father = null;
        // Array to hold references to child nodes
        this.children = [];
        // Array to hold keys
        this.keys = [];
    }

    // Check if this node is the last internal node in the B-tree
    isLastInternalNode() {
        // If the node has no keys, it cannot be the last internal node
        if (this.keys.length === 0) {
            return false;
        }
    
        // Check if all child nodes are leaf nodes (i.e., have no keys)
        for (let child of this.children) {
            if (child && child.keys.length !== 0) {
                return false;
            }
        }
    
        // If all child nodes are leaf nodes, this node is the last internal node
        return true;
    }

    // Get the parent node of this node
    getFather() {
        return this.father;
    }

    // Set the parent node of this node
    setFather(father) {
        this.father = father;
    }

    // Get an array of child nodes
    getChildren() {
        return this.children;
    }

    // Get the child node at the specified index
    getChild(index) {
        return this.children[index];
    }

    // Add a child node at the specified index
    addChild(index, node) {
        this.children.splice(index, 0, node);
    }

    // Remove the child node at the specified index
    removeChild(index) {
        this.children.splice(index, 1);
    }

    // Get the key at the specified index
    getKey(index) {
        return this.keys[index];
    }

    // Add a key at the specified index
    addKey(index, element) {
        this.keys.splice(index, 0, element);
    }

    // Remove the key at the specified index
    removeKey(index) {
        this.keys.splice(index, 1);
    }

    // Get an array of keys
    getKeys() {
        return this.keys;
    }

    // Get the number of keys in this node
    getSize() {
        return this.keys.length;
    }

    // Check if this node is full
    isFull() {
        return this.fullNumber === this.keys.length;
    }

    // Check if this node is overflowing
    isOverflow() {
        return this.fullNumber < this.keys.length;
    }

    // Check if this node is null (i.e., contains no keys)
    isNull() {
        return this.keys.length === 0;
    }
}

module.exports = BTNode;
