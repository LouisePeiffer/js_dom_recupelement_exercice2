// 1 
let myBody = document.getElementsByTagName('body')[0]
console.log(myBody);

// 2 
let firstElement = myBody.firstElementChild
console.log(firstElement);

// 3
let lastElement = myBody.lastElementChild
console.log(lastElement);

// 4 
let myDiv = document.getElementsByTagName('div')[0]
console.log(myDiv);

let exo4 = myDiv.children
console.log(exo4);

// 5 
let firstLi = document.getElementsByTagName('li')[0]
console.log(firstLi);

let nextLi = firstLi.nextElementSibling
console.log(nextLi);


// 6 
let previousLi = nextLi.previousElementSibling
console.log(previousLi);