/*

Big O Notation

For every problem there are 10-20+ solutions that could work

How do you know which one works best?

Who cares? If the best solution is the one you get to work

Performance matters when parsing thru millions of lines in larger codebases and making decisions. Could shorten the runtime for a process by hours potentially

Its important to have a precise vocabulary about how code performs

useful for discussing tradeoffs of different approaches

when code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications

*/

function addUpTo(n){
  let total = 0
  for (let i=1;i<= n;i++){
    total += i
  }
  console.log(total)
}

addUpTo(6)
addUpTo(100)

let t1 = performance.now()
addUpTo(1000000)
let t2 = performance.now()
addUpTo(1000000)
console.log(`Time elapsed: ${(t2-t1)} milliseconds`)

function addUpToo(n){
  console.log( n * (n + 1)/2)
}

addUpToo(6)
addUpToo(100)

let t3 = performance.now()
addUpToo(1000000)
let t4 = performance.now()
addUpToo(1000000)
console.log(`Time elapsed: ${(t4-t3) } milliseconds`)


/*

Here we can see both of these solve the problem. But how would we determine which is better?

Is better: 

Faster?
Less memory-intensive?
More readable?

Typically we look at faster and above we can see how that can be tracked with performance now.

So it clearly seems like one solution is faster than the other but the process we arrived at was not the greatest for all cases

Rather than counting seconds, we could track the amount of simple operations a program has to complete

the second solution only has three computations to make no matter the input. it multiplies, adds, and divides, once. 3 simple operations no matter the value of n
***(f(n)) is a constant 3
***O(1)


while the first only has one addition operation, it has to do that for each time it iterates through or n times. the number of operations grows proportionally with n
***(f(n)) is a linear n
***O(n)

Thus using Big O notation we can describe this phenomenon and try to use it to evaluate the efficiency of how of code is performing

O(f(n)) = n ***linear
O(f(n)) = n^2  ***quadratic
O(f(n)) = 1 ***constant


*/

function countUpAndDown(n){
  console.log('Going Up!')
  for(let i=0;i<n;i++){
    console.log(i)
  }
  console.log('At the top')
  for(let j=n-1;j >= 0; j--){
    console.log(j)
  }
  console.log('Back down safely!')
}

countUpAndDown(15)

/*

Looking at countUpAndDown it has to iterate through the function 2n times but with Big O notation that is simply stated as O(n)

*/

function printAllPairs(n) {
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      console.log(i,j)
    }
  }
}

printAllPairs(3)

/*

For the example above, it runs thru the initial loop n times, but then it has has to run through the nested loop n times for each iteration. Thus n * n or n^2 loops

O(n^2)
*/

function numberOfHalves(n) {
  let count = 0;
  while (n > 1) {
    n /= 2;
    count++;
  }
  console.log(count);
}

numberOfHalves(100000)

/*

When determining time complexity using Big O notation, the rules of thumb are as follows:

1. Arithmetic operations at constant
2. Variable assignment is constant
3. Accessing elements in an array(by index) or object (by key) is constant
4.  In a loop the complexity is the length of the loop times the complexity of whatever happens inside the loop

*/

function logAtLeastFive(n){
  for ( let i = 1;i <= Math.max(5,n);i++){
    console.log(i)
  }
}

logAtLeastFive(9)
logAtLeastFive(3)
/*

This above will print at least five by doing a comparison. If the argument n passed in is higher, it will run n times. Thus this too is O(n) in regards to time complexity

*/

function logAtMostFive(n){
  for ( let i = 1;i <= Math.min(5,n);i++){
    console.log(i)
  }
}

logAtMostFive(9)
logAtMostFive(3)

/*

Conversely as this functions grows, it will constantly print 5 no matter the input. Thus the time complexity is O(1)

*/

function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    console.log(newArray);
}

onlyElementsAtEvenIndex([5,6,2,7,8,9,4,5])

/*
In this latest example, our array work would only count as O(1) but then we do have the loop which makes this an O(n)

*/

function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    console.log(subtotalArray);
}

subtotals([23,92,12,34,94])

/*

Once we see that we have to iterate twice through the arrays to complete this function, we know we have an O(n^2)

*/