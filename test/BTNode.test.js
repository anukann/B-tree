// Import the BTNode class
const BTNode = require('../src/BTNode');

// Test suite for the BTNode class
describe('BTNode', () => {
    // Test case for the addChild method
    describe('addChild', () => {
        it('should add a child node at the specified index', () => {
            const node = new BTNode(3); 
            const childNode = new BTNode(3);
            node.addChild(0, childNode);
            expect(node.getChild(0)).toBe(childNode);
        });
    });

    // Test case for the removeChild method
    describe('removeChild', () => {
        it('should remove the child node at the specified index', () => {
            const node = new BTNode(3); 
            const childNode = new BTNode(3);
            node.addChild(0, childNode);
            node.removeChild(0);
            expect(node.getChildren()).toHaveLength(0);
        });
    });

    // Test case for the addKey method
    describe('addKey', () => {
        it('should add a key at the specified index', () => {
            const node = new BTNode(3); 
            node.addKey(0, 5);
            expect(node.getKey(0)).toBe(5);
        });
    });

    // Test case for the removeKey method
    describe('removeKey', () => {
        it('should remove the key at the specified index', () => {
            const node = new BTNode(3);
            node.addKey(0, 5);
            node.removeKey(0);
            expect(node.getKeys()).toHaveLength(0);
        });
    });

});

