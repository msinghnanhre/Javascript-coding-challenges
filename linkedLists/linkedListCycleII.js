
var detectCycle = function (head) {
    let fast = head
    let slow = head

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            fast = head
            while (fast !== slow) {
                slow = slow.next
                fast = fast.next
            }
            return slow
        }
    }
    return null
};