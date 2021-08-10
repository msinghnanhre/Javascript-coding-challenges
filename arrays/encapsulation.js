// what is Encapsulation ?
//     A mechanism of restricting direct access to some of the objects's components.
//     A mechanism of bundling data with methods that operate on that data 

//Why encapsulation?
//Security - controlled access.
//Hide implementation and expose behaviour
//Loose coupling-  Modify the implementation anytime


//In example down we we encapsulate employee detail so that they are only accessable through setter and getter method not directly
class Employee{

    setEmployee(name, id) {
        this.name = name
        this.id = id
    }

    getEmployeeName() {
        return this.name
    }

    getEmployeeId() {
        return this.id
    }
}

let employee = new Employee()

employee.setEmployee("a", 5);
console.log(employee.getEmployeeName())