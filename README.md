### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
**Ans:** getElementById selects an element by Id, getElementByClassName selects all elements using the same class name, querySelector selects the first element of a class selector and querySelectorAll selects all elements of a class selector.

----

### 2. How do you create and insert a new element into the DOM?
**Ans:** I can insert new element in a DOM by creating new element using .createElement and adding content in it and append the new element into the DOM.

----

### 3. What is Event Bubbling? And how does it work?
**Ans:** Event bubbling is a process where event starts in a target and go upwards to the parent and there parent.
if I add 
```
   <div id="parent">
      <button id="child">Click Me</button>
   </div>
```
and click the button, it will show parent clicked and child clicked,
It will go like child > parent > body > html > document.

----

### 4. What is Event Delegation in JavaScript? Why is it useful?
**Ans:** Event delegation is technique where instead of using event listener to every child I can use an event listener in the parent. It will work dynamically and  will work on the future added items. It will maintain the code clean and faster  and easier to maintain.

----

### 5. What is the difference between preventDefault() and stopPropagation() methods?
**Ans:** preventDefault() stops browsers default behavior but it does not stop event bubbling, stopPropagation() stops event bubbling to go up but it does not stop its default behavior.