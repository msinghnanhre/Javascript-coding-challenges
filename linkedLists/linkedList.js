//function to create individual nodes for our linked list
class Node {
    constructor(val, next = null){
        this.value = val;
        this.next = next
    }
}

//linked List function 

class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }
    //insert in the beginning of the linked list
    addNodeAtHead(val) {
        this.head = new Node(val, this.head)
        this.size++
        return;
    }
    //insert in the end of the linked list
    addNodeAtEnd(val){
        let node = new Node(val);
            if (!this.head) {
                return this.head = node
            } else {
                let current = this.head
                while (current.next) {
                    current = current.next
                }
                current.next = node
            }
        this.size++
        return;
    }

    //insert at index in the linked list
    insertAt(data, index) {
        if (index > 0 && index > this.size) {
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head)
            return;
        }

        const node = new Node(data);

        let current, previous;
        current = this.head;

        let count = 0;

        while (count < index) {
            previous = current //node before index
            count++;
            current = current.next;  //node after index
        }

        node.next = current;
        previous.next = node;

        this.size++
    }

    //get value from index

    getValue(index) {
        let current = this.head
        let count = 0;
        while (current) {
            if (count === index) {
                console.log(current.value)
            }
            count++
            current = current.next
        }
        return;
    }

    //remove at index

    removeAt(index) {
        if (index >= this.size || index < 0) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            this.size--
        }
    }

    //clear linked list
    clearList() {
        this.head = null;
        this.size = 0;
    }


    //print all values in linked list
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.value)
            current = current.next
        }
    }
}

const linked_list = new LinkedList();

linked_list.addNodeAtHead(5)

linked_list.addNodeAtHead(7)
linked_list.addNodeAtEnd(6)
linked_list.insertAt(2, 1)
//linked_list.getValue(0)
linked_list.removeAt(-1)
linked_list.printList()

/**
 * Initialize your data structure here.
 */

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// var MyLinkedList = function () {
//     this.head = null;
// };

// /**
//  * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
//  * @param {number} index
//  * @return {number}
//  */
// MyLinkedList.prototype.get = function (index) {
//     if (index === 0) {
//         return this.head ? this.head.val : -1;
//     }

//     let cur = this.head;
//     let i = 0;

//     while (i < index && cur !== null) {
//         i++;
//         cur = cur.next;
//     }

//     return cur ? cur.val : -1;
// };

// /**
//  * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtHead = function (val) {
//     const newNode = new ListNode(val);
//     newNode.next = this.head;
//     this.head = newNode;
// };

// /**
//  * Append a node of value val to the last element of the linked list. 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtTail = function (val) {
//     const newNode = new ListNode(val);

//     if (this.head === null) {
//         this.head = newNode;
//         return;
//     }

//     let cur = this.head;
//     while (cur.next !== null) {
//         cur = cur.next;
//     }
//     cur.next = newNode;
// };

// /**
//  * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
//  * @param {number} index 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtIndex = function (index, val) {
//     let newNode = new ListNode(val);

//     if (index === 0) {
//         newNode.next = this.head;
//         this.head = newNode;
//         return;
//     }

//     let i = 0;
//     let cur = this.head;

//     while (i < index - 1) {
//         i++;
//         cur = cur ? cur.next : null;
//     }

//     if (cur) {
//         newNode.next = cur.next;
//         cur.next = newNode;
//     }
// };

// /**
//  * Delete the index-th node in the linked list, if the index is valid. 
//  * @param {number} index
//  * @return {void}
//  */
// MyLinkedList.prototype.deleteAtIndex = function (index) {
//     if (index === 0) {
//         this.head = this.head.next;
//     }

//     let cur = this.head;
//     let i = 0;

//     while (i < index - 1 && cur !== null) {
//         i++;
//         cur = cur.next;
//     }

//     if (cur && cur.next) {
//         cur.next = cur.next.next;
//     }
// };

// /**
//  * Your MyLinkedList object will be instantiated and called as such:
//  * var obj = new MyLinkedList()
//  * var param_1 = obj.get(index)
//  * obj.addAtHead(val)
//  * obj.addAtTail(val)
//  * obj.addAtIndex(index,val)
//  * obj.deleteAtIndex(index)
//  */