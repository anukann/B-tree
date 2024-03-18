# B-Tree Implementation in JavaScript
![Graph Image](https://github.com/anukann/B-tree/blob/main/Btree.png)

## Introduction

This repository contains an implementation of the B-tree data structure in JavaScript. A B-tree is a balanced tree data structure commonly used for storing and managing large datasets efficiently. It is designed to optimize search, insertion, and deletion operations, making it suitable for applications requiring fast access to sorted data.

### Key Properties:
- Balanced Structure: B-trees maintain balance by ensuring all leaf nodes are at the same level, reducing the height of the tree and minimizing disk accesses.

- Variable Node Size: Nodes in a B-tree can contain a variable number of keys and child pointers, optimizing storage efficiency.

- Ordered Keys: Keys within each node are stored in sorted order, facilitating efficient searching using techniques like binary search.

- Efficient Operations: B-trees offer logarithmic time complexity for search, insertion, and deletion, enabling fast data manipulation.

- Range Queries: They support efficient range queries, allowing retrieval of data within specified ranges with minimal overhead.

- Multi-level Indexing: B-trees are widely used as multi-level indexing structures in database systems for quick access to disk-stored data.

B-trees are fundamental in various applications requiring scalable and high-performance data access, including databases, file systems, and storage systems.

## Description

The B-tree implementation consists of two main components:
- `BTree.js`: This file contains the implementation of the B-tree class, which manages the overall structure of the B-tree, including insertion, deletion, and searching operations.
- `BTNode.js`: This file defines the B-tree node class, representing individual nodes in the B-tree. It includes methods for managing keys and child nodes.

The implementation is accompanied by Jest test suites (`BTree.test.js` and `BTNode.test.js`) to ensure correctness and validate the functionality of the B-tree operations.

## Requirements

- Node.js installed on your system
- Jest testing framework (installed automatically as a development dependency)

## User Manual

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/anukann/B-tree


2. Install Jest globally on your system (if not already installed):
 ```bash
   npm install -g jest
 ```
### Running Tests

1. Navigate to the root directory of the project.
2. Run the Jest tests using the following command:
```bash
   npx jest test/BTree.test.js test/BTNode.test.js
```
This command will execute the test suites defined in the BTree.test.js and BTNode.test.js files located in the test directory. Jest will run the tests and provide feedback on whether they passed or failed.

## Reflection

Developing this B-tree implementation provided valuable insights into data structures, algorithms, and software engineering principles. Key learnings include:

1. Understanding B-tree Concepts: Deepened understanding of node splitting, merging, and balancing.

2. Testing Strategies: Designed comprehensive test suites using Jest to validate functionality.

3. Error Handling: Implemented robust error handling mechanisms for improved reliability.

4. Code Maintainability: Emphasized clean, readable, and well-documented code for easier maintenance.

Overall, this project was a rewarding learning experience, enhancing proficiency in data structure design and algorithmic optimization.

## Results

![Graph Image](https://github.com/anukann/B-tree/blob/main/TestResult.png)








