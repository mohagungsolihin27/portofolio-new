const studentsProfile = [
    { name : "student1", age : "20", isLulus : true },
    { name : "student2", age : "19", isLulus : false},
    { name : "student3", age : "20", isLulus : true },
    { age : "18", isLulus : false} 
];

class tableView {
    constructor(name, age, isLulus) {
        this.name = name;
        this.age = age;
        this.isLulus = isLulus;
    }
}

const table = [];
studentsProfile.forEach((item) => {
    const tableItem = new tableView(item.name, item.age, item.isLulus);
    table.push(tableItem);
});

console.log(table);