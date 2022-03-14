// Linked lists can be made with any language

// A linked list is a linear data structure, which just means that the data elements (nodes) are arranged sequentially so each node has an adjacent previous and next node. 

// It is an ordered collection of data 

// Unlike an array linked list elements are not stored in sequential memory location, instead they are linked together with a pointer. 

// Each node has two things, the data and a pointer (granted a double linked list will have 2 pointers.)
// First node is the head. 
// Tail node is the last node in the list, the tail will reference 'null' as next property so you know it's the tail.

// Class of node represents each node in the list `

class Node { 
  // the last one references null so we'll make it null by default 
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Create/Get/Remove Nodes From Linked List
class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }

   // Insert first node
   insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }


// Insert last node
insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }
 
 // insert at index 
 // - if putting an index that doesn't exist then want to return back without doing anything. 
  insertAt(data, index) {
    //  If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

 // get at index 
 getAt(index) { 
   let current = this.head 
   let count = 0 

   while (current) {
     if (count == index) {
       console.log(current.data);
     }
     count++
     current = current.next  
   }

   return null 
 }

 // remove at index 
 removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

 // clear list 
 clearList() {
   this.head = null 
   this.size = 0
 }

 // print list data 
 printListData() {
   // current represents the current node 
   let current = this.head

   while (current) {
     console.log(current.data)
     current = current.next
   }
 }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 3);

// ll.clearList();
// ll.getAt(2);

ll.printListData();