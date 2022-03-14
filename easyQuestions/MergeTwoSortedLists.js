// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// For example: 
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// There are a few things we need to deal with. 
// First, either "a" or "b" could be empty.
// Second, during processing list "a" or list "b" could run out. 
// Third, starting the results list empty and building it up while going through "a" and "b"

// https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220303143032/Merge-Two-Sorted-LinkedLists1.jpg