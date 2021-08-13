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
        if (index > 0 && index > this.size) {
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
linked_list.removeAt(1)
linked_list.printList()