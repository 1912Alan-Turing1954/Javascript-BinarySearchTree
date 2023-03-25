const DataBase = [ 'DATA' ];

class Node {
    constructor(data) {
        this.data = data;
        this.type = '';
        this.left = null;
        this.right = null;   
    }
}

class BinaryTreeNode {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
            newNode.type = 'root';
        } else {
            this.insertNode(this.root, newNode);
            DataBase.push(newNode);
        }
    }

    insertNode(node, newNode) {

        if (newNode.data < node.data) {
            
            if (node.left === null) {
                node.left = newNode;
                newNode.type = 'leaf';
            } else {
                this.insertNode(node.left, newNode);
            };

        } else {
            
            if (node.right === null) {
                node.right = newNode;
                newNode.type = 'leaf';
            } else {
                this.insertNode(node.right, newNode);
            };

        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {

        if (node === null) {
            
            return null;

        } else if (key < node.data) {

            node.left = this.removeNode(node.left, key);
            return node;

        } else if (key > node.data) {
            
            node.right = this.removeNode(node.right, key);
            return node;

        } else {
            
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            const aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    inorder(node) {
        
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preorder(node) {
        
        if (node !== null) {
            console.log(node.data);
            this.inorder(node.left);
            this.inorder(node.right);
        }
    }

    getRootNode() {
        return this.root;
    }

    search(node, data) {

        if (node === null) {
            return null;
        } else if (data < node.data) {
            return this.search(node.left, data);
        } else if (data > node.data) {
            return this.search(node.right, data);
        } else {
            return node;
        }
    }
}

const Tree = new BinaryTreeNode();

Tree.insert(3);
Tree.insert(2);
Tree.insert(4);
Tree.insert(1);
Tree.insert(10);
Tree.insert(7);
Tree.insert(8);
Tree.insert(5);
Tree.insert(9);



Tree.preorder(Tree.root)


Tree.inorder(Tree.root)
