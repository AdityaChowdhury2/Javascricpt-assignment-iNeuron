/*
1. Can we put duplicate values in the set object ?
2. Write the syntax for
a) Creating new set object
b) Adding new element to set object
c) Deleting element from set object
3. Create a set object with four random numbers from 0 to 10. Check if this
newly created set object has 8 in it. Use set object methods
*/
// 1. Can we put duplicate values in the set object ?
/*Answer : No we can only keep unique values in the set object*/


//2. Write the syntax for
//a) Creating new set object
let set = new Set();
// b) Adding new element to set object
set.add(23)
set.add(12)
set.add(10)
console.log(set)
//c) Deleting element from set object
set.delete(12)
console.log(set);
// 3. Create a set object with four random numbers from 0 to 10. Check if this
// newly created set object has 8 in it.Use set object methods
let set2 = new Set();
set2.add(8);
set2.add(0);
set2.add(3);
set2.add(5);
console.log(set2);
console.log(set2.has(8))