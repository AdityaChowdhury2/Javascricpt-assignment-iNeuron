/*1. Carefully observe this example.
a) Is the InnerFunction() a closure?
b) What is output of this program
function OuterFunction()
{
    var outerVariable = 100;
    function InnerFunction() {
    alert(outerVariable);
    }
    return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();
*/
/* -------------(a) Answer-------------*/
// yes , The InnerFunction is a closure. Because the InnerFunction can access variables from its parent function OuterFunction and it returns from its OuterFunction so that outerVariable can be used later.
/* -------------(b) Answer-------------*/
// The output of this program is 100 will be show as alert in the web browser.
//2. What is the difference between a closure and a scope ?
/* -------------Answer-------------*/
/* When a function is created within another function, the inner function is called closure. This closure is generally returned so that the outer function's variables can be used later. On the other hand, a scope defines which variables you can access. Global scope and local scope are the two types of scope. */
//3. What is a lexical scope and how is it related to closure?
/* -------------Answer-------------*/
/* Lexical scope describes how nested functions have access to variables defined in parent scopes. Lexical scope is one part of Closure. Where Closure has lexical scope and it can use this even after the parent function is closed */
/*4. Output of following closure ?
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
    console.log(i); // What is logged?
    }, 1000);
    }
*/
/* -------------Answer-------------*/
/*
3
3
3
*/
