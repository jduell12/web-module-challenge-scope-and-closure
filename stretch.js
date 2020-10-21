/*  STRETCH GOALS COMPLETED */

/* 2. Write a function that would allow you to do this using a closure. */

function createBase(baseNumber){
    return function(number){
        return baseNumber + number;
    }
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

// console.log(addSix(10));
// console.log(addSix(21));

/* 3. Research the differences between functional programming and object oriented programming. 
   Then, describe the pros and cons of functional programming vs object-oriented programming. 
   This is a common interview question and great practice! 

   Functional Programming                       Object oriented programming
   ----------------------                       ----------------------------
   deals with functions                         deals with objects
   uses immutable data                          uses mutable data
   can be executed in any order                 should be executed in a specific order
   basic elements are variables and             basic elements are objects and methods
    functions
   used with few things and many operations     used with many things and few operations 

*/