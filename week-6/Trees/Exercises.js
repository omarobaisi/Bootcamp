class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }
    findMax(node) {
        if(node.rightChild) {
            return this.findMax(node.rightChild)
        } else {
            return node.value
        }
    }
    setNewValue(node) {
        // If the node has no children
        if(!node.leftChild && !node.rightChild) {
            return null
        // If the node has one child
        } else if(!node.leftChild && node.rightChild) {
            return node.rightChild
        } else if(!node.rightChild && node.leftChild) {
            return node.leftChild
        }
        // If the node has two children
        else {
            return this.findMax(node.leftChild)
        }
    }
    insertNode(value) {
      if(!this.value) {
        this.value = value
      } else if(value > this.value && this.rightChild) {
        this.rightChild.insertNode(value)
      } else if(value < this.value && this.leftChild) {
        this.leftChild.insertNode(value)
      } else if(value > this.value) {
          this.rightChild = new BSNode(value);
      } else {
          this.leftChild = new BSNode(value);
      }
    }
    findNode(value) {
        if(value === this.value || (this.leftChild && value === this.leftChild.value) || (this.rightChild && value === this.rightChild.value)) {
            return true;
        } else if(value > this.value && this.rightChild) {
            return this.rightChild.findNode(value);
        } else if(value < this.value && this.leftChild) {
            return this.leftChild.findNode(value)
        } else {
            return false
        }
    }
    findCommonParent(val1, val2) {
        if(val1 > this.value && val2 < this.value || val1 < this.value && val2 > this.value) {
            return this.value
        } else if(val1 === this.leftChild.value || val2 === this.leftChild.value) {
            return this.value
        } else if(val1 === this.rightChild.value || val2 === this.rightChild.value) {
            return this.value
        } else if(val1 > this.value && this.rightChild) {
            return this.rightChild.findCommonParent(val1, val2)
        } else if(val1 < this.value && this.leftChild) {
            return this.leftChild.findCommonParent(val1, val2)
        }
    }
    removeNode(value) {
        if(this.leftChild && value === this.leftChild.value) {
            this.leftChild = this.setNewValue(this.leftChild);
            console.log(this)
            console.log(this.leftChild)
        } else if (this.rightChild && value === this.rightChild.value) {
            this.rightChild = this.setNewValue(this.rightChild);
            console.log(this)
            console.log(this.rightChild)
        } else if(value > this.value && this.rightChild) {
            this.rightChild.removeNode(value);
        } else if(value < this.value && this.leftChild) {
            this.leftChild.removeNode(value);
        } else {
            console.log("Can't find value");
        }
    }
}

// Exercise 2

const bSTree = new BSNode()
bSTree.insertNode("J")
bSTree.insertNode("H")
bSTree.insertNode("R")
bSTree.insertNode("E")
bSTree.insertNode("S")
bSTree.insertNode("P")
bSTree.insertNode("G")
bSTree.insertNode("B")
bSTree.insertNode("L")
bSTree.insertNode("Y")
bSTree.insertNode("I")

bSTree.findCommonParent("B", "I")
bSTree.findCommonParent("B", "G")
bSTree.findCommonParent("B", "L")
bSTree.findCommonParent("L", "Y")
bSTree.findCommonParent("E", "H")

// Exercise 3

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
nodeWithOneChild.removeNode(9);


