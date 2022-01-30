// Falsy
Boolean(); // false
Boolean(0); // false
Boolean(null); // false
Boolean(NaN); // false
Boolean(undefined); // false
Boolean(""); // false

// Truthy
Boolean(" "); // true
Boolean("a"); // true
Boolean(-1); // true
Boolean(1); // true
Boolean(255); // true
Boolean([]); // true
Boolean({}); // true
Boolean(function(){}); // true