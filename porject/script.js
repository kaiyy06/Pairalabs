let numbers = [1, 2, 3, 4, 5];

let output = "";

// forEach
output += "<h3>forEach()</h3>";
numbers.forEach(n => output += `Value: ${n}<br>`);

// map
let doubled = numbers.map(n => n * 2);
output += `<h3>map()</h3>Doubled: ${doubled.join(", ")}<br>`;

// filter
let evens = numbers.filter(n => n % 2 === 0);
output += `<h3>filter()</h3>Even Numbers: ${evens.join(", ")}<br>`;

// find
let firstEven = numbers.find(n => n % 2 === 0);
output += `<h3>find()</h3>First Even: ${firstEven}<br>`;

// some
let hasBigNum = numbers.some(n => n > 4);
output += `<h3>some()</h3>Any number > 4? ${hasBigNum}<br>`;

// every
let allPositive = numbers.every(n => n > 0);
output += `<h3>every()</h3>All positive? ${allPositive}<br>`;

// reduce
let sum = numbers.reduce((acc, n) => acc + n, 0);
output += `<h3>reduce()</h3>Sum: ${sum}<br>`;

// Show it on the page
document.getElementById("output").innerHTML = output;
