# B-Tree Implementation in JavaScript

## Introduction

This repository contains an implementation of the B-tree data structure in JavaScript. B-trees are self-balancing tree data structures that maintain sorted data and allow for efficient search, insertion, and deletion operations. This implementation aims to provide a robust and efficient B-tree solution for various applications.

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

##Reflection

Developing this B-tree implementation provided valuable insights into data structures, algorithms, and software engineering principles. Key learnings include:

1. Understanding B-tree Concepts: Deepened understanding of node splitting, merging, and balancing.

2. Algorithm Optimization: Experimented with various approaches to optimize performance.

3. Testing Strategies: Designed comprehensive test suites using Jest to validate functionality.

4. Error Handling: Implemented robust error handling mechanisms for improved reliability.

5. Code Maintainability: Emphasized clean, readable, and well-documented code for easier maintenance.

Overall, this project was a rewarding learning experience, enhancing proficiency in data structure design and algorithmic optimization.

##Results










