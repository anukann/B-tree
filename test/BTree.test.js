// Import the BTree class
const BTree = require('../src/BTree');

// Test suite for the BTree class
describe('BTree', () => {
    // Test case for the insert method
    describe('insert', () => {
        it('should insert keys into the B-tree', () => {
            const bTree = new BTree(3);
            bTree.insert(5);
            bTree.insert(3);
            bTree.insert(8);
            expect(bTree.find(5)).toBe(true);
            expect(bTree.find(3)).toBe(true);
            expect(bTree.find(8)).toBe(true);
        });

        it('should handle duplicate key insertion', () => {
            const bTree = new BTree(3);
            bTree.insert(5);
            bTree.insert(3);
            bTree.insert(8);
            bTree.insert(3); // Duplicate key

            // Check if keys are inserted correctly
            expect(bTree.find(5)).toBe(true);
            expect(bTree.find(3)).toBe(true);
            expect(bTree.find(8)).toBe(true);
        });

        it('should handle insertion into a non-leaf node', () => {
            const bTree = new BTree(3);
            bTree.insert(5);
            bTree.insert(3);
            bTree.insert(8);
            bTree.insert(6);

            // Check if keys are inserted correctly
            expect(bTree.find(5)).toBe(true);
            expect(bTree.find(3)).toBe(true);
            expect(bTree.find(8)).toBe(true);
            expect(bTree.find(6)).toBe(true);
        });
    });

    // Test case for the find method
    describe('find', () => {
        it('should find existing keys in the B-tree', () => {
            const bTree = new BTree(3);
            bTree.insert(5);
            bTree.insert(3);
            bTree.insert(8);
            expect(bTree.find(5)).toBe(true);
            expect(bTree.find(3)).toBe(true);
            expect(bTree.find(8)).toBe(true);
        });

        it('should return false for non-existing keys in the B-tree', () => {
            const bTree = new BTree(3);
            bTree.insert(5);
            bTree.insert(3);
            bTree.insert(8);
            expect(bTree.find(10)).toBe(false);
            expect(bTree.find(0)).toBe(false);
        });
    });

    // Test case for the delete method
    describe('delete', () => {
        it('should delete keys from the B-tree', () => {
            const bTree = new BTree(3);
            bTree.insert(5);
            bTree.insert(3);
            bTree.insert(8);
            bTree.delete(5);
            expect(bTree.find(5)).toBe(false);
            expect(bTree.find(3)).toBe(true);
            expect(bTree.find(8)).toBe(true);
        });

        it('should handle deletion of non-existing keys', () => {
            const bTree = new BTree(3);
            bTree.insert(5);
            bTree.insert(3);
            bTree.insert(8);
            bTree.delete(10); // Non-existing key
            // Tree should remain unchanged
            expect(bTree.find(5)).toBe(true);
            expect(bTree.find(3)).toBe(true);
            expect(bTree.find(8)).toBe(true);
        });

        it('should handle deletion of the root node', () => {
            const bTree = new BTree(3);
            bTree.insert(5);
            bTree.delete(5);
            // Tree should be empty
            expect(bTree.find(5)).toBe(false);
            expect(bTree.isEmpty()).toBe(true);
        });
    });
});