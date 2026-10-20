
const users = [
    { name: "Aline", age: 24 },
    { name: "Eric", age: 17 }
];

// Fix 1: Return the condition from filter
const adults = users.filter(u => u.age >= 18);

// Fix 2: Use map to create an array of names
const names = users.map(u => u.name);

// Fix 3: Sort alphabetically using a comparison
const sorted = [...users].sort((a, b) =>
    a.name.localeCompare(b.name)
);

// Fix 4: Property names are case-sensitive
console.log("Adults:", adults);
console.log("Names:", names);
console.log("First sorted name:", sorted[0].name);
