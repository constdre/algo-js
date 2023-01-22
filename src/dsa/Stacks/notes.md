Sequence-biased structure. 

Use when:  
- there is a storing of sequence involved, backtracking, history, a stack may be used.
- you need a previous, current, and next. Input element is 'next', the stack top is 'current', element under it is 'previous'. 

Specific cases: 
- undo/redo
- to backtrack and follow sequence (a maze reaching a dead end), each path is added to the stack
- function call stack
- recursion with nested structures
- reversing, by default it reverses the input when popped
- Getting sum of subarray minimums/maximums/ranges
- for rearranging items in a list given a new item
- for remembering history and order of insertion


# Random
- Very first action when stack is empty is to push.
- Used to store the indices of array elements, not the element themselves.

# Use Case 1
The elements inside the stack can be considered as **items for processing**. There will be a **stack condition** for a push or pop.
What is "popped" is the item to be processed. 

The stack condition is related to a ranking aspect for items in the stack.

Stack, order for processing for each pop.
Stack with its order-biased structure naturally gives you a previous, current, and next

When the next inputs returns a true for the stack condition, it is the "next", the stack top is the current, and the one below is the previous.

You have sequence at the end if you can iterate many times - or you have a previous, current and next.


# Use Case 2

