let head = [3, 2, 0, -4]


//for this solution to work You need to build linked list by passing into the structure we built in last problem, At this point head 
//is simply an array< It does not have next property.
const hasCycle = (head) => {
    // initial with fast and slow pointers with head
    let slow = head
    let fast = head
    while (fast && fast.next) {
 
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            return true
        }
    }

    return false
}

console.log(hasCycle(head))