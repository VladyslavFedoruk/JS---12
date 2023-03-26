class Employee {
    constructor(name, salary, position) {
        this.name = name,
            this.salary = salary,
            this.position = position
    }
}

const employees = [
    new Employee('Ivan', 37000, 'QA'),
    new Employee('Alex', 8000, 'Front-End Dev'),
    new Employee('Misha', 42000, 'DevOps'),
    new Employee('Vlad', 57000, 'Back-End Dev'),
];

class EmpTable {
    constructor(employees) {
        this.employees = employees
    }
    getHtml() {
        let html = '<table><thead><tr><th>Name</th><th>Salary</th><th>Position</th></tr></thead><tbody>';
        for (let i = 0; i < this.employees.length; i++) {
            html += `<tr><td>${this.employees[i].name}</td><td>${this.employees[i].salary}</td><td>${this.employees[i].position}</td></tr>`;
        }
        html += '</tbody></table>';
        return html;
    }
}

const empTable = new EmpTable(employees);
document.write(empTable.getHtml());