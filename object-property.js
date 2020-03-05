
const students = [
    {id: 21, name: "nayem"},
    {id: 31, name: "Rahat" },
    {id: 41, name: "Mukit"},
    {id: 45, name:  "Iftekhar"}
];

const names = students.map(s => s.name);
const id = students.map(s => s.id);
const bigger = students.filter(s => s.id>40)
const bigger1 = students.find(s => s.id>40);
console.log(bigger1);