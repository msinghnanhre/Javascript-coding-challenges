//Given the head of a linked list, remove the nth node from the end of the list and return its head.
//Input: head = [1,2,3,4,5], n = 2
//Output: [1, 2, 3, 5]


//solution 
var removeNthFromEnd = function (head, n) {
    let curr = head;
    let len = 0;
    while (curr) {
        len++;
        curr = curr.next;
    }
    curr = head;
    if (curr.next) {
        if (n == len) {
            return head.next
        }

        for (let i = 0; i < len - n - 1; i++) {
            curr = curr.next;
        }

        curr.next = curr.next.next;
        return head;
    }
    return null;
};

//alternate solution
var removeNthFromEnd = function (head, n) {
    let fast = head, slow = head
    for (let i = 0; i < n; i++) fast = fast.next
    if (!fast) return head.next
    while (fast.next) fast = fast.next, slow = slow.next
    slow.next = slow.next.next
    return head
};